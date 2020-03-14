<template>
  <div
    class="dropdown"
    v-bind:class="classNames"
    v-on-clickaway="away"
    :style="dropdownStyle"
  >
    <div
      class="dropdown-panel"
      role="menu"
    >
      <div class="dropdown-arrow" ></div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { mixin as clickaway } from 'vue-clickaway';

export default {
  name: 'dropdown',
  props: {
       classNames: {
          type: String,
          default: '',
       },
        isDropdownOpen: {
            type: Boolean,
            default: false,
        },
        styles: {
            type: Object,
            default: () => {},
        },
        refNode: {},
  },
  mixins: [clickaway],
    computed: {
        dropdownStyle() {
            const dropdownStyle = {
                ...this.styles,
            };

            if (this.isDropdownOpen) {
                // translate open dropdown
                dropdownStyle.transform = 'translateY(0px)';
                dropdownStyle.opacity = '1';
                dropdownStyle.visibility = 'visible';
                dropdownStyle.WebkitTransform = 'translateY(0px)';
            }

            return dropdownStyle;
        },
    },
  methods: {
    away(ev) {
       if (this.refNode.contains(ev.target)) return;
        this.$emit('away');
    },
  },
};
</script>
<style lang="scss">

.dropdown{
    box-shadow:0 2px 6px 0 rgba(0,0,0,0.07);
    border-radius:5px;
    background: #ffffff;
    width:120px;
    min-height:100px;
    position:absolute;
    top:0;
    z-index:999;
    transition: transform .3s ease-out;
    transition: -webkit-transform 0.233s cubic-bezier(0, 0, 0.21, 1);
    transition: transform 0.233s cubic-bezier(0, 0, 0.21, 1);
    transition: transform 0.233s cubic-bezier(0, 0, 0.21, 1), -webkit-transform 0.233s cubic-bezier(0, 0, 0.21, 1);
    transition: all 0.233s cubic-bezier(0, 0, 0.21, 1);
    // opacity:0.7;
    outline: none;
    border:1px solid #eee;
    will-change: transform;
    visibility: hidden;
    -webkit-transform: translateY(-2px);
            transform: translateY(-2px);
    .dropdown-arrow {
        top: -17px;
        right:10px;
        position:absolute;
        z-index:-1;
        &:after{
            content: '';
            display: block;
            width: 14px;
            height: 14px;
            background: #fff;
            transform: rotate(45deg) translate(6px,6px);
            -webkit-box-shadow: -1px -1px 1px -1px rgba(0,0,0,.54);
            box-shadow: -1px -1px 1px -1px rgba(0,0,0,.54);
        }
    }
    .dropdown-panel{
        position:relative;
        z-index:99;
        li{
            display:block;
            a{
                padding:13px 8px;
                color:#000;
                display:block;
                font-weight:500;
                font-size:0.9rem;
                font-family:$font-family-monserrat;
                margin:2px 0;
                cursor: pointer;
                transition: background-color 0.3s cubic-bezier(0, 0, 0.21, 1);
                &:hover{
                    background:$bg-primary-color;
                }
            }
        }
    }
}
</style>
