<template>
  <div class="auth-container">
    <!-- <h1 class="logo color-white  text-center"> HackAlgo </h1> -->
    <div class="auth-content">
      <div class="auth-content__panel">
        <div class="auth-content__top text-center">
          <h4 class="heading">Login</h4>
          <p class="text"><i class="uil uil-padlock"></i> Login securely</p>
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
          ></TextInput>

          <PasswordInput
            :label="formControls.password.label"
            name="password"
            v-model="formControls.password.value"
            required
            interfaceClass="black"
            :placeholder="formControls.password.placeholder"
          ></PasswordInput>

          <Button :isLoading="isLoggingIn" :disabled="isLoggingIn" value="Login"></Button>
        </form>
        <div class="auth-content__bottom text-center">
          <p class="text">
            Forgotten password?
            <router-link to="/recover-password">Recover</router-link>
          </p>
          <p class="text">
            New here?
            <router-link to="/register">Create an account</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex';
import { TextInput, Button, PasswordInput } from '@/components/Form';

const { mapState, mapGetters, mapActions } = createNamespacedHelpers('auth');

export default {
  name: 'login',
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
          label: '',
          touched: false,
          placeholder: 'e.g alphacoder',
          validationRules: {
            required: true,
          },
        },
        password: {
          value: '',
          label: '',
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
    ...mapGetters(['isLoggingIn', 'hasError']),
    ...mapState(['errorMessage']),
  },
  methods: {
    async handleSubmit() {
      if (this.isLoggingIn) return;
      const username = this.formControls.username.value;
      const password = this.formControls.password.value;
      await this.login({ username, password });
    },
    ...mapActions(['login']),
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
<style lang="sass" scoped></style>
