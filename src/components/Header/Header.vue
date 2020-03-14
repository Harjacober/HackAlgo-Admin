<template>
    <header class="header">
        <div class="app-header">
            <div class="app-header__panel">
                <div class="app-header__left flex">
                    <button class="harmburger-btn btn reset-btn">
                        <i class='uil uil-bars'></i>
                    </button>
                </div>
                <nav class="app-header__nav to-right">
                    <ul >
                            <li class="profile list">
                                <div class="flex"   @click="toggleDropdown" ref="profileToggleNode">
                                    <img src="/assets/myAvatar.png" class="profile-image" alt="profile image"/>
                                    <p class="name">akinola!</p>
                                </div>
                                <dropdown
                                    :isDropdownOpen="isDropdownOpen"
                                    :styles="setStyles()"
                                    :refNode="profileToggleNode"
                                    @away= "hideDropdown"
                                >
                                <ul >
                                    <li>
                                        <router-link to="/settings"><i class="uil uil-cog"></i> Settings </router-link>
                                    </li>
                                     <li>
                                        <router-link to="/profile"><i class="uil uil-cog"></i> Profile </router-link>
                                    </li>
                                    <li>
                                        <router-link to="/logout"><i class="uil uil-exit"></i> Logout</router-link>
                                    </li>
                                </ul>
                                </dropdown>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <!-- <div class="header-menu">
            <div class="header-menu__panel">
                <div v-if="viewContent" >
                    <router-link to="/" class="back-button reset-btn">
                        <i class='uil uil-angle-left'></i> Go home
                    </router-link>
                </div>
                <ul class="" v-else>
                    <li >
                        <router-link to="/dashboard" > <i class='uil uil-rss'></i> Dashboard</router-link>
                    </li>
                    <li >
                        <router-link to="/problem-set"><i class='uil uil-analytics'></i> ProblemSet</router-link>
                    </li>
                    <li >
                        <router-link to="/contests"><i class='uil uil-cog'></i> Contests</router-link>
                    </li>
                </ul>
            </div>
        </div> -->
    </header>
</template>
<script>
import Dropdown from '../Dropdown/Dropdown.vue';

export default {
  name: 'app-header',
  components: {
    Dropdown,
  },
  data() {
    return {
      isDropdownOpen: false,
      profileToggleNode: '',
    };
  },
  props: {
    viewContent: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.profileToggleNode = this.$refs.profileToggleNode;
  },
  methods: {
    setStyles() {
      return {
        top: '40px',
        right: '60px',
        width: '160px',
      };
    },
    goBack(event) {
      this.$router.go(-1);
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    hideDropdown() {
      this.isDropdownOpen = false;
    },
  },
};

</script>

<style lang="scss" >
.header{
  top:0;
  left:250px;
  right:0;
  width:calc(100% - 250px);
  z-index:999;
  background:#fff;
  position:fixed;

}
.app-header{
    width:100%;
    height:70px;
    position:relative;
    box-shadow:0 4px 16px 0 rgba(0,0,0,0.05);
    .app-header__panel{
      display:block;
      position:relative;
    }
    .app-header__left{
      padding:10px;
      @include MQ($breakpoint-md){
        padding:10px 5px;
      }
      .logo{
          color:#fff;
          padding:15px;
      }
      .harmburger-btn{
        padding:10px;
        border:none;
        font-size:1.5rem;
        cursor:pointer;
        outline:none;
        transition:0.233s cubic-bezier(0.215, 0.610, 0.355, 1);
      }
      .search-form{
        padding:5px;
        position:relative;
        @include MQ($breakpoint-md){
          display:none;
        }
        .search-icon{
          padding:17px 15px;
          position:absolute;
          left:3px;
          top:5px;
        }
        .form-control{
          padding:10px 14px;
          font-size:0.8rem;
          padding-left:40px;
          border-radius:50px;
          background-color: #ebeff5 !important;
          border-radius: 100px;
          border: 1px solid $bg-primary-color;
          transition:.1s cubic-bezier(.4,1,.75,.9);
          &:hover{
            box-shadow:0 3px 9px 0 rgba(0,0,0,0.05);
            border:1px solid #cccccc;
          }
        }
      }
    }
    .app-header__nav{
      padding:10px;
      li.list{
        display:inline-block;
        a.link{
          display:block;
          padding:6px;
          font-size:1.5rem;
          position:relative;
          top:-10px;
          transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.4s;
          opacity:0.5;
          &:hover{
            opacity:1;
          }
        }

      }
      li.profile{
        padding:0 10px;
        border-radius:50px;
        position:relative;
        cursor:pointer;
        top:1px;
        .name{
          font-weight:400;
          font-size:0.9rem;
          padding:10px 0;
          display:block;
        }
        .profile-image{
          width:40px;
          height:40px;
          border-radius:100%;
          padding:4px;
        }
      }
    }
  }

.header-menu{
  // background:#fff;
  position:relative;
  display:none;
  margin-top:4px;
  .header-menu__panel{
    margin:0 auto;
    max-width:1000px;
  }
  .back-button{
    padding:20px 0px;
    border:none;
    font-size:1rem;
    display:inline-block;
    font-weight:600;
    cursor:pointer;
    transition:cubic-bezier(0.075, 0.82, 0.165, 1) 0.4s;
      opacity:0.7;
    &:hover{
      color:$primary-color;
        opacity:1;
    }
  }
  li{
    display:inline-block;
    a{
      color:#000;
      padding:20px 55px;
      // margin-right:30px;
      font-weight:600;
      display:block;
      letter-spacing:0.02rem;
      font-size:0.8rem;
      transition:cubic-bezier(0.075, 0.82, 0.165, 1) 0.4s;
      opacity:0.7;
      &:hover{
        color:$primary-color;
        opacity:1;
      }
    }
    a.is-active{
      border-bottom:3px solid $primary-color;
      color:$primary-color;
      background:$bg-primary-color;
    }
  }
}
</style>
