<template>
     <div class="form-group text-center">
        <button type="submit" :disabled="isLoading" class="ripple btn  form-button has-shadow" :class="classNames" v-bind="$attrs" >
            <clip-loader :loading="isLoading" :color="color" :size="size"></clip-loader>
            <span v-if="!isLoading">{{ value }}</span>
        </button>
    </div>
</template>/

<script>
import ClipLoader from 'vue-spinner/src/ClipLoader.vue';

export default {
  name: 'Button',
  components: {
    ClipLoader,
  },
  inheritAttrs: false,
  data() {
    return {
      color: '#fff',
      size: '20px',
    };
  },
  props: {
    value: {
      type: String,
      required: true,
      default: 'submit',
    },
    classNames: {
      type: String,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
};

</script>
<style lang="scss">
.btn{
      display:inline-block;
      margin:5px 0;
      border-radius:5px;
      border:none;
      transition: box-shadow 0.2s ease 0s, opacity 0.2s ease 0s;
      cursor:pointer;
      text-align:center !important;
      outline: none;
      font-family:$primary-font-family;
  }
  .reset-btn{
    margin:0;
    padding:0;
    background:none;
    box-shadow:none;
  }
  .form-button{
        display: block;
        width: 100%;
        margin-top:20px;
        background:$secondary-color;
        color:#fff;
        font-size:1rem;
        font-weight:600;
        padding:12px 0px;
    }
    .form-button.small{
        max-width:150px;
        font-size:0.8rem;
    }
  .btn.has-shadow{
      box-shadow: 0 5px 5px 0 rgba(0, 0,0, 0.09);
  }
  .btn:disabled{
    cursor:not-allowed;
    opacity:0.6;
}
</style>
