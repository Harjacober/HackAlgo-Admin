<template>
  <div>
    <form action="">
      <TextInput
        :label="formControls.name.label"
        name="name"
        v-model="formControls.name.value"
        required
        autocomplete="on"
        interfaceClass="black"
        :placeholder="formControls.name.placeholder">
      </TextInput>
      <inputFile
        :id="'testcases'"
        :label="'Select your test cases'"/>
      <Button
        value="Submit">
      </Button>
    </form>
  </div>
</template>
<script >
import { TextInput, Button, PasswordInput } from '@/components/Form';
import inputFile from '@/components/inputFile.vue';

export default {
  name: 'login',
  components: {
    TextInput,
    Button,
    inputFile,
  },
  data() {
    return {
      formControls: {
        name: {
          value: '',
          label: 'Name',
          touched: false,
          placeholder: 'e.g Passphrase Strength',
          validationRules: {
            required: true,
            email: true,
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
