<template>
    <div class="auth-container">
      <!-- <h1 class="logo color-white  text-center"> HackAlgo </h1> -->
        <div class="auth-content">
            <div class="auth-content__top text-center">
                <h4 class="heading color-white">Change Password </h4>
            </div>
            <form v-on:submit.prevent="handleSubmit">
                <PasswordInput
                   :label="formControls.new_password.label"
                    name="New password"
                    v-model="formControls.new_password.value"
                    required
                    :placeholder="formControls.new_password.placeholder"
                >
                </PasswordInput>
                <PasswordInput
                   :label="formControls.confirm_password.label"
                    name="Confirm password"
                    v-model="formControls.confirm_password.value"
                    required
                    :placeholder="formControls.confirm_password.placeholder"
                >
                </PasswordInput>
                <Button
                    value="Login"
                >
                </Button>
            </form>
            <div class="auth-content__bottom text-center">
                 <p class="text color-white">Forgotten password? <router-link to="/reset-password">Reset</router-link></p>
                <p class="text color-white">New here? <router-link to="/register">Create an account</router-link></p>
            </div>
        </div>
    </div>
</template>
<script >
import { Button, PasswordInput } from '@/components/Form';

export default {
  name: 'change-password',
  components: {
    Button,
    PasswordInput,
  },
  data() {
    return {
      formControls: {
        new_password: {
          value: '',
          label: 'Password',
          touched: false,
          placeholder: '***********',
          validationRules: {
            required: true,
          },
        },
        confirm_password: {
          value: '',
          label: 'Confirm Password',
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

  },
  methods: {
    handleSubmit() {
      this.submitted = true;
    },
  },
};
</script>
<style lang="sass" scoped>

</style>
