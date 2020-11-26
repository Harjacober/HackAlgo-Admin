<template>
  <div class="auth-container">
    <div class="auth-content">
      <div class="auth-content__panel">
        <div class="auth-content__top text-center">
          <h4 class="heading ">Code Verification</h4>
          <p class="text "> <i class='uil uil-padlock'></i> verify your registration code</p>
        </div>
        <form v-on:submit.prevent="handleSubmit">
          <TextInput
            :label="formControls.code.label"
            name="code"
            v-model="formControls.code.value"
            required
            :placeholder="formControls.code.placeholder"
          >
          </TextInput>

          <Button
            value="Verify"
          >
          </Button>
        </form>
        <div class="auth-content__bottom text-center">
          <p class="text"><router-link to="/login">Login Here</router-link></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
  import { createNamespacedHelpers } from 'vuex';
  import { TextInput, Button } from '@/components/Form';

  const { mapState, mapGetters, mapActions } = createNamespacedHelpers('auth');

  export default {
    name: 'VerifyCode',
    components: {
      TextInput,
      Button,
    },
    computed: {
      ...mapGetters(['isLoading', 'hasError']),
      ...mapState(['errorMessage']),
    },
    data() {
      return {
        formControls: {
          code: {
            value: '',
            label: 'Code',
            touched: false,
            placeholder: 'e.g 123xxxxxx',
            validationRules: {
              required: true,
            },
          },
        },
        submitted: false,
      };
    },
    mounted() {
      if (this.$route.query && this.$route.query.code) {
        this.formControls.code.value = this.$route.query.code;
      }
    },
    methods: {
      async handleSubmit() {
        if (this.isLoading) return;
        const code = this.formControls.code.value;
        this.verifyCode({ code }).then((data) => {
          this.$toaster.success('Verification was successful');
          this.$router.push('/');
        });
      },
      ...mapActions(['verifyCode']),
    },
    watch: {
      hasError(val) {
        if (val) {
          this.$toaster.error(this.errorMessage);
        }
      },
    },
  };
</script>

<style scoped>

</style>
