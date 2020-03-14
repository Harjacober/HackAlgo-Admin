<template>
  <div class="app-layout">
      <Sidebar />
      <main class="app-layout__main">
        <Header />
          <div class="app-content">
            <h4 class="heading"> {{ pageName }}</h4>
            <slot></slot>
          </div>
        <Footer/>
      </main>
    </div>
</template>

<script>
import Header from '../Header/Header.vue';
import Footer from '../Footer/Footer.vue';
import Sidebar from '../Sidebar/Sidebar.vue';

export default {
  name: 'layout',
  components: {
    Header, Footer, Sidebar,
  },
  props: {
    pageName: {
      type: String,
      default: '',
    },
  },
  methods: {},

};
</script>

<style lang="scss">
// APP LAYOUT STYLES
.app-layout{
    background:$bg-primary-color;
    min-height:100vh;
  }

  .app-layout__main{
    padding-left:250px;
    margin:0 auto;

    @include MQ($breakpoint-md){
      padding:0;
    }
  }

  .app-content{
    margin:0 auto;
    max-width:1150px;
    padding:10px 15px;
    padding-top:90px;
    min-height:500px;
    .heading{
      font-size:1.6rem;
      letter-spacing:0.03rem;
      font-weight:700;
      padding:10px 5px;
    }
  }
</style>
