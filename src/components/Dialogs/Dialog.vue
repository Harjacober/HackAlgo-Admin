<template>
    <div class="dialog-container">
      <div class="dialog-backdrop" v-bind:style="dialogBackdropStyle" ></div>
      <div class="dialog-container__panel" v-bind:style="dialogContainerPanelStyle">
        <div
            class="dialog app-dialog"
            role="dialog"
            v-bind:style="dialogStyle"
            v-on:click.stop
        >
        <section class="dialog-body">
            <h4 class="title" v-if="title">{{ title }}</h4>
            <p class="message">{{ text }}</p>
        </section>
        <footer class="dialog-footer">
                <button
                    type="submit"
                    class="btn btn-ok"
                    v-if="confirmEnabled"
                >
                    Confirm
                </button>

                <button
                    type="button"
                    class="btn btn-cancel"
                    @click="close"
                    >
                    Close
                </button>
            </footer>
        </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'app-dialog',
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      title: null,
      text: '',
      confirmEnabled: true,
      onConfirm: () => {},
    };
  },
  methods: {
    close() {
      // method for closing modal
      this.isVisible = false;
    },
    confirm() {
      // we must check if this.onConfirm is function
      if (typeof this.onConfirm === 'function') {
        // run passed function and then close the modal
        this.onConfirm();
        this.hide();
      } else {
        // we only close the modal
        this.hide();
      }
    },

    show(params) {
      if (!this.$parent) {
        this.$mount();
        document.body.appendChild(this.$el);
      }

      setTimeout(() => {
        // making dialog visible
        this.isVisible = true;
        // setting title and text
        this.title = params.title;
        this.text = params.text;
        this.confirmEnabled = params.confirmEnabled;
        // setting callback function
        this.onConfirm = params.onConfirm;
      }, 100);
    },

  },
  computed: {
    dialogContainerPanelStyle() {
      if (this.isVisible) {
        return {
          visibility: 'visible',
        };
      }
      return {};
    },
    dialogStyle() {
      if (this.isVisible) {
        return {
          transform: 'scale(1)',
          opacity: 1,
          WebkitTransform: 'scale(1)',
        };
      }
      return {};
    },
    dialogBackdropStyle() {
      if (this.isVisible) {
        return {
          opacity: 0.7,
          visibility: 'visible',
        };
      }

      return {};
    },
  },
};
</script>
<style lang="scss">

.app-dialog{
    max-width:300px;
    text-align:center;
    margin:0 auto;
    .dialog-body{
        font-family:$font-family-roboto;
        font-size:0.9rem;
        letter-spacing:0.01rem;
    }
}
</style>
