<template>
    <aside class="app-layout__sidebar">
            <div class="app-layout-sidebar__panel">
                <div class="app-layout-sidebar__top">
                    <div class="logo-container text-center">
                        <h4 class="logo"> HackAlgo. </h4>
                    </div>
                </div>
                <nav class="app-layout-sidebar__nav">
                    <ul class="nav-lists__top">
                        <li>
                            <router-link to="/dashboard"   activeclass='active' class="ripple"><i class='uil uil-home'></i> Dashboard</router-link>
                        </li>
                        <li>
                            <router-link to="/contests" class="ripple"><i class='uil uil-dice-five'></i> Contests</router-link>
                        </li>
                        <li>
                            <router-link to="/problem-set" class="ripple"><i class='uil uil-science'></i> Problem Set</router-link>
                        </li>
                         <li>
                            <router-link to="/leaderboard" class="ripple"><i class='uil uil-no-entry'></i> LeaderBoard</router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
</template>
<script>

export default {
  name: 'sidebar',
};
</script>

<style lang="scss">
.app-layout__sidebar{
    background:$primary-color;
    position:relative;
    width:250px;
    height:100vh;
    position: fixed;
    z-index: 1;
    @include MQ($breakpoint-md){
      display:none;
    }
    .app-layout-sidebar__panel{
      padding:10px 20px;
      position:relative;
      height:100vh;
      // background:rgba(255,255,255,0.08)
    }
    .logo-container{
      padding:0 10px;
      color:#fff;
      margin:20px 0;
      font-weight:700;
      font-size:1.6rem;
      // border-radius:50px;
      letter-spacing:0.1rem;
      border-left:7px solid $secondary-color;
      // border-right:7px solid $secondary-color;
    }
    .create-btn{
      padding:15px;

      color:$primary-color;
      width:100%;
      i{
        font-size:1.1rem;
      }
    }
    .app-layout-sidebar__nav{
      padding:10px 0;

      .nav-lists__bottom{
        position:relative;
        bottom:0;
      }
      li{
        display:block;
        a{
          display:block;
          color:#fff;
          font-weight:500;
          padding:10px 16px;
          margin:5px 0;
          font-size:0.8rem;
          letter-spacing:0.01rem;
          border-radius:7px;
          transition: all 0.5s ease-in;
          i{
            font-size:1.5rem;
            position: relative;
            bottom:-1px;
            padding-right:3px;
          }

          &:hover{
            background:rgba(0,0,0,0.3);
          }
        }
        a.active{
          background:rgba(0,0,0,0.1);
          &:hover{
            background:rgba(0,0,0,0.3);
          }
        }
      }
    }
  }
</style>
