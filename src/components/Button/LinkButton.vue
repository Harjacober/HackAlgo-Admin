<template>
    <router-link :to="to" class="btn link-button ripple">
    <slot />
    </router-link>
</template>
<script>
export default {
  name: 'link-button',
  props: {
    to: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss">

.link-button{
    background:$primary-color;
    padding:10px 20px;
    box-shadow:0 5px 10px 0 rgba(0,0,0,0.1);
    font-weight:600;
    font-size:0.8rem;
    letter-spacing:0.04rem;
    color:#fff;
    font-weight:500;
    opacity:1;
    transition:cubic-bezier(0.075, 0.82, 0.165, 1) 0.4s;
    &:hover{
        box-shadow:0 10px 18px 0 rgba(0,0,0,0.2);
    }
    i{
        font-size:1.2rem;
        padding-right:5px;
    }
}
</style>
