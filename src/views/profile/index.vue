<template>
  <form
    class="bg-white shadow-md rounded w-full overflow-hidden mt-8 lg:w-4/5 xl:w-2/5"
    @submit.prevent="save"
    @reset.prevent="cancel"
  >
    <div class="flex flex-row items-center px-8 py-3">
      <!-- TODO: Handle profile pictures -->
      <img
        class="w-20 h-20 rounded-full mr-4 flex-shrink-0"
        :src="isFetching ? '' : avatar"
        :alt="isFetching ? '' : `Avatar of ${profileForm.name}`"
      />
      <div class="flex flex-col w-full">
        <h5 class="text-lg">{{ isFetching ? 'Loading...' : profileForm.name }}</h5>
        <h6 class="text-sm text-gray-600">
          {{ isFetching ? 'Please wait...' : profileForm.email }}
        </h6>
      </div>
      <button
        type="button"
        class="text-sm bg-green-600 text-white py-1 px-3 rounded font-bold flex-shrink-0"
        @click="switchToEditMode"
        v-show="mode !== 'edit' && !isFetching"
      >
        Edit Profile
      </button>
      <clip-loader :loading="isFetching" size="28px" color="#38a169" />
    </div>
    <div class="px-8 pb-3 bg-gray-100 pt-5">
      <editable-text class="mb-5" v-model="profileForm.name" label="Name" :mode="mode" />
      <editable-text
        class="mb-5"
        v-model="profileForm.birthday"
        label="Birthday"
        type="date"
        :mode="mode"
      />
      <editable-text
        class="mb-5"
        v-model="profileForm.gender"
        label="Gender"
        type="select"
        :options="genders"
        :mode="mode"
      />
      <editable-text class="mb-5" v-model="profileForm.location" label="Location" :mode="mode" />
      <editable-text
        class="mb-5"
        v-model="profileForm.summary"
        label="Summary"
        type="textarea"
        :mode="mode"
      />
      <editable-text
        v-if="mode === 'edit'"
        type="file"
        v-model="profileImage"
        label="Replace profile picture"
        :mode="mode"
      />
    </div>
    <div class="flex flex-row justify-end items-center px-8 py-6" v-show="mode === 'edit'">
      <button
        type="submit"
        class="text-sm bg-green-600 text-white py-1 px-3 rounded font-bold flex-shrink-0 mr-4"
      >
        Save Changes
      </button>
      <button
        type="reset"
        class="text-sm bg-transparent text-red-600 text-white py-1 px-3 rounded font-bold flex-shrink-0"
      >
        Cancel
      </button>
    </div>
  </form>
</template>

<script>
import Vue from 'vue';
import { createNamespacedHelpers } from 'vuex';
import ClipLoader from 'vue-spinner/src/ClipLoader.vue';
import EditableText from '../../components/Form/EditableText.vue';

const { mapState, mapGetters, mapActions } = createNamespacedHelpers('profile');

export default {
  data() {
    return {
      profileForm: {},
      origProfile: {},
      mode: 'view',
      profileImage: [],
      profileImagePreview: null,
      genders: [
        {
          id: 'male',
          text: 'Male',
        },
        {
          id: 'female',
          text: 'Female',
        },
        {
          id: 'other',
          text: 'Other',
        },
      ],
    };
  },
  async mounted() {
    await this.getProfile();
  },
  methods: {
    switchToEditMode() {
      this.mode = 'edit';
    },
    cancel() {
      this.profileForm = { ...this.origProfile };
      this.profileImage = [];
      this.mode = 'view';
    },
    save() {
      // TODO: Update profile server side
      this.origProfile = { ...this.profileForm };
      this.mode = 'view';
    },
    ...mapActions(['getProfile']),
  },
  computed: {
    avatar() {
      return this.profileImagePreview || this.profileForm.profilephoto || this.placeholderAvatar;
    },
    placeholderAvatar() {
      return `https://avatars.dicebear.com/api/initials/${this.profileForm.name}.svg`;
    },
    ...mapState(['profile', 'errorMessage']),
    ...mapGetters(['isFetching', 'hasError']),
  },
  watch: {
    profileImage(val) {
      if (this.profileImagePreview) {
        URL.revokeObjectURL(this.profileImagePreview);
        this.profileImagePreview = null;
      }
      if (val[0]) {
        this.profileImagePreview = URL.createObjectURL(val[0]);
      }
    },
    profile(val) {
      this.profileForm = { ...val };
      this.origProfile = { ...val };
    },
    hasError(val) {
      if (val) {
        this.$toaster.error(this.errorMessage);
      }
    },
  },
  beforeDestroy() {
    if (this.profileImagePreview) {
      URL.revokeObjectURL(this.profileImagePreview);
    }
  },
  components: {
    EditableText,
    ClipLoader,
  },
};
</script>
