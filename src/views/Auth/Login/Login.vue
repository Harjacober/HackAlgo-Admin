<template>
    <div class="auth-container">
      <!-- <h1 class="logo color-white  text-center"> HackAlgo </h1> -->
        <div class="auth-content">
            <div class="auth-content__panel">
                <div class="auth-content__top text-center">
                    <h4 class="heading ">Login</h4>
                    <p class="text "> <i class='uil uil-padlock'></i> Login securely</p>
                </div>
                <form v-on:submit.prevent="handleSubmit">
                    <TextInput
                        :label="formControls.email.label"
                        name="email"
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
                        required
                        interfaceClass="black"
                        :placeholder="formControls.password.placeholder"
                    >
                    </PasswordInput>

                    <Button
                        value="Login"
                    >
                    </Button>
                </form>
                <div class="auth-content__bottom text-center">
                    <p class="text ">Forgotten password? <router-link to="/recover-password">Recover</router-link></p>
                    <p class="text ">New here? <router-link to="/register">Create an account</router-link></p>
                </div>
            </div>
        </div>
    </div>
</template>
<script >
import { TextInput, Button, PasswordInput } from '@/components/Form';

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
        email: {
          value: '',
          label: '',
          touched: false,
          placeholder: 'e.g joe@example.com',
          validationRules: {
            required: true,
            email: true,
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
