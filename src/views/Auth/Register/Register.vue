<template>
    <div class="auth-container">
      <!-- <h1 class="logo color-white  text-center"> HackAlgo </h1> -->
        <div class="auth-content">
            <div class="auth-content__panel">
            <div class="auth-content__top text-center">
                <h4 class="heading ">Register</h4>
                <p class="text "> <i class='uil uil-padlock'></i> Create a free account</p>
            </div>
            <form v-on:submit.prevent="handleSubmit">
                <TextInput
                    :label="formControls.username.label"
                    name="username"
                    v-model="formControls.username.value"
                    required
                    autocomplete="off"
                    interfaceClass="black"
                    :placeholder="formControls.username.placeholder"
                >
                </TextInput>
                <TextInput
                    :label="formControls.email.label"
                    name="email"
                    type="email"
                    v-model="formControls.email.value"
                    required
                    autocomplete="off"
                    interfaceClass="black"
                    :placeholder="formControls.email.placeholder"
                >
                </TextInput>

                <PasswordInput
                   :label="formControls.password.label"
                    name="password"
                    v-model="formControls.password.value"
                    interfaceClass="black"
                    required
                    :placeholder="formControls.password.placeholder"
                >
                </PasswordInput>

                <Button :isLoading="isLoading" :disabled="isLoading" value="Register"></Button>
            </form>
             <div class="auth-content__bottom text-center">
                <p class="text ">Already have an account? <router-link to="/login">Login</router-link></p>
            </div>
            </div>
        </div>
    </div>
</template>
<script >
  import { createNamespacedHelpers } from 'vuex';
  import { TextInput, Button, PasswordInput } from '@/components/Form';

  const { mapState, mapGetters, mapActions } = createNamespacedHelpers('auth');

  export default {
  name: 'register',
  components: {
    TextInput,
    Button,
    PasswordInput,
  },
  data() {
    return {
      formControls: {
        username: {
          value: '',
          label: 'Username',
          touched: false,
          placeholder: 'E.g coderarc',
          validationRules: {
            required: true,
          },
        },
        email: {
          value: '',
          label: 'Email address',
          touched: false,
          placeholder: 'e.g joe@example.com',
          validationRules: {
            required: true,
            email: true,
          },
        },
        password: {
          value: '',
          label: 'Password',
          touched: false,
          placeholder: '***********',
          validationRules: {
            required: true,
          },
        },
      },
      submitted: false,
    };
  },
  computed: {
    ...mapGetters(['isLoading', 'hasError']),
    ...mapState(['errorMessage']),
  },
  methods: {
    async handleSubmit() {
      if (this.isLoading) return;
      const username = this.formControls.username.value;
      const email = this.formControls.email.value;
      const password = this.formControls.password.value;
      this.register({ username, email, password }).then((data) => {
        this.$toaster.success('Registration was successful, kindly check your mail');
        this.resetForm();
        this.$router.push('/verify-code');
      });
    },
    resetForm() {
      this.formControls.username.value = '';
      this.formControls.email.value = '';
      this.formControls.password.value = '';
    },
    ...mapActions(['register']),
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
<style lang="sass" scoped>

</style>
