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
        :src="avatar"
        :alt="`Avatar of ${profile.name}`"
      />
      <div class="flex flex-col w-full">
        <h5 class="text-lg">{{ profile.name }}</h5>
        <h6 class="text-sm text-gray-600">{{ profile.email }}</h6>
      </div>
      <button
        type="button"
        class="text-sm bg-green-600 text-white py-1 px-3 rounded font-bold flex-shrink-0"
        @click="switchToEditMode"
        v-show="mode !== 'edit'"
      >Edit Profile</button>
    </div>
    <div class="px-8 pb-3 bg-gray-100 pt-5">
      <editable-text class="mb-5" v-model="profile.name" label="Name" :mode="mode" />
      <editable-text
        class="mb-5"
        v-model="profile.birthday"
        label="Birthday"
        type="date"
        :mode="mode"
      />
      <editable-text
        class="mb-5"
        v-model="profile.gender"
        label="Gender"
        type="select"
        :options="genders"
        :mode="mode"
      />
      <editable-text class="mb-5" v-model="profile.location" label="Location" :mode="mode" />
      <editable-text
        class="mb-5"
        v-model="profile.summary"
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
      >Save Changes</button>
      <button
        type="reset"
        class="text-sm bg-transparent text-red-600 text-white py-1 px-3 rounded font-bold flex-shrink-0"
      >Cancel</button>
    </div>
  </form>
</template>

<script>
import Vue from 'vue';
import EditableText from '../../components/Form/EditableText.vue';

export default {
  data() {
    const profile = {
      name: 'Joshua',
      email: 'test@test.com',
      birthday: '14/03/1993',
      gender: 'female',
      location: 'Ibadan, Nigeria',
      summary: 'Nothing to see here, looking for a job',
      image: 'https://randomuser.me/api/portraits/men/61.jpg',
    };
    return {
      profile: { ...profile },
      origProfile: { ...profile },
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
  methods: {
    switchToEditMode() {
      this.mode = 'edit';
    },
    cancel() {
      this.profile = { ...this.origProfile };
      this.profileImage = [];
      this.mode = 'view';
    },
    save() {
      // TODO: Update profile server side
      this.mode = 'view';
    },
  },
  computed: {
    avatar() {
      return this.profileImagePreview || this.profile.image;
    },
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
  },
  beforeDestroy() {
    if (this.profileImagePreview) {
      URL.revokeObjectURL(this.profileImagePreview);
    }
  },
  components: {
    EditableText,
  },
};
</script>
