<template>
        <transition name="fade" >
        <div class="card">
            <div class="card-content">
                <router-link :to="{ name: 'content', params: { id: item.id } }">
                    <div class="top">
                        <p class="timeago"><i class='uil uil-calendar-alt'></i> {{ item.date }}</p>
                    </div>
                    <p class="text"> {{ item.text }}</p>
                 </router-link>
                 <div class="bottom">
                        <div class="user flex">
                            <img :src="item.user.avatar" >
                            <p class="name">{{ item.user.name }} </p>
                        </div>
                        <div class="to-right">
                            <button class="reset-btn more-button ripple" @click="toggleDropdown" ref="triggerNode">
                                <i class='uil uil-ellipsis-v'></i>
                            </button>
                        </div>
                        <dropdown
                            :isDropdownOpen= 'isDropdownOpen'
                            :refNode = 'triggerNode'
                            @away= "hideDropdown"
                            :styles='{
                                top: "40px",
                                right: "1px",
                            }'
                        >
                            <ul >
                                <li>
                                    <a href="#"><i class="uil uil-trash"></i> Delete </a>
                                </li>
                                <li>
                                    <a href="#"><i class="uil uil-comment-alt-edit"></i> Edit</a>
                                </li>
                            </ul>
                        </dropdown>
                </div>
            </div>
        </div>
    </transition>

</template>

<script>
import dropdown from '../Dropdown/Dropdown.vue';

export default {
  name: 'card',
  components: {
    dropdown,
  },
  data() {
    return {
      triggerNode: '',
      isDropdownOpen: false,
    };
  },
  mounted() {
    this.triggerNode = this.$refs.triggerNode;
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    hideDropdown() {
      this.isDropdownOpen = false;
    },
  },
};
</script>
<style lang="scss">
@import "../../styles/common.scss";

.card{
    border-bottom: 1px solid rgb(241, 241, 241);
    font-family: $font-family-roboto;
    padding:15px;
    padding-bottom:4px;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.4s;
    cursor:pointer;
    &:hover{
        background:$bg-primary-color;
    }
    .card-content{
        padding:5px;
    }
    .top{
        // border-bottom: 1px solid #ddd;
        padding:3px 5px;
        .timeago{
            font-size:0.8rem;
        }
    }
    .text{
        font-family: $font-family-roboto;
        font-size:1rem;
        padding:5px;
    }
    .bottom{
        position:relative;
    }
    .user{
        padding:5px;
        img{
            border-radius:100%;
            width:30px;
            height:30px;
            border:3px solid #fff;
            border-top:3px solid #ddd;
            border-bottom:3px solid #ddd;
            box-shadow:0 5px 10px 0 rgba(0,0,0,0.01)
        }
        .name{
            padding:5px 2px;
            font-weight:400;
            font-size:0.8rem;
        }
    }
    .more-button{
        border:none;
        font-size:1.1rem;
        padding:8px;
        transition:cubic-bezier(0.075, 0.82, 0.165, 1) 0.4s;
        &:hover{
            background:#fff;
            border-radius:100%;
            cursor:pointer;
        }
    }
}


.fade-enter-active, .fade-leave-active {
    transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
}
</style>
