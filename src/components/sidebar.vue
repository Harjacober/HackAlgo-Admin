<template>
  <div class='side-bar bg-white h-screen'>
    <div class="flex flex-col flex-no-wrap">
      <span class="flex lg:hidden justify-end text-4xl pt-5 pr-4">
        <i class='uil uil-times sideBarTrigger'></i>
      </span>
      <span>
        <p class="flex text-3xl font-thin side-bar-text-logo">
          Admin</p>
      </span>
      <ul class="flex flex-col flex-no-wrap vertical-menu">
        <li><router-link to="/"><i class='uil uil-analytics'></i>Home</router-link></li>
        <li><router-link to="/problemset"><i class='uil uil-presentation-line'></i>Problem Set</router-link></li>
        <li><router-link to="/contest"><i class='uil uil-parcel'></i>Contests</router-link></li>
        <li><router-link to="/this"><i class='uil uil-sun'></i>Help</router-link></li>
        <li><router-link to="/is"><i class='uil uil-cog'></i>Settings</router-link></li>
        <p class="classic-side-bar-header">Mad oh</p>
        <li><router-link to="/is"><i class='uil uil-comment-heart'></i>Support</router-link></li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.side-bar-text-logo {
  padding: 11px 30px;
}
.classic-side-bar-header {
  font-size: 10px;
  text-transform: uppercase;
  color: #616161;
  padding: 11px 28px;
  letter-spacing: 2px;
}
.side-bar {
  position: fixed;
  width: 240px;
  top: 47px;
  border-right: 1px solid #d3d3d3;
  z-index: 9999;
  @media only screen and (max-width: 720px) {
    margin-left: -240px;
    top: 0;
  }
}
.side-bar.isOpen {
  @media only screen and (max-width: 720px) {
    margin-left: 0px;
  }
}
ul.vertical-menu {
  li {
    a {
      display: flex;
      padding: 11px 20px;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      font-size: 15px;
      i {
        font-size: 20px;
      }
    }
    a.router-link-active {
      color: $secondary-color;
      // background: rgba(2, 19, 255, 0.09);
    }
    a.has-submenu {
      position: relative;
      flex-flow: column nowrap;
      padding: 11px 0;
      .submenu {
        transition: max-height .2s ease-in;
        max-height: 0px;
        overflow: hidden;
      }
      .submenu.isOpen {
        display: flex;
        margin: 0; padding: 0;
        height: auto;
        max-height: 200px;
        border-left: 2px solid #ccc;
      }
    }
    a:hover {
      background: rgba(2, 19, 255, 0.1);
;
    }
  }
  .has-icon {
    display: flex;
    flex-flow: row nowrap;
  }
  i, .has-icon > i {
    width: 37px;
  }
}
</style>
<script>
export default {
  mounted() {
    this.toggleSubmenu();
  },
  methods: {
    toggleSubmenu() {
      const alink = document.querySelectorAll('a.has-submenu p.trigger');
      for (let i = 0; i < alink.length; i += 1) {
        alink[i].addEventListener('click', (e) => {
          e.preventDefault();
          const submenu = document.querySelectorAll('.submenu');
          for (let j = 0; j < submenu.length; j += 1) {
            if (submenu[j] !== alink[i].nextSibling && submenu[j].classList.contains('isOpen')) {
              submenu[j].classList.remove('isOpen');
            }
          }
          if (alink[i].nextSibling.tagName === 'UL') {
            const currentSubmenu = alink[i].nextSibling;
            currentSubmenu.classList.toggle('isOpen');
          }
        });
      }
    },
  },
};
</script>
