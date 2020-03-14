<template>
  <div class="dialog-container">
      <div class="dialog-backdrop" v-bind:style="dialogBackdropStyle" ></div>
      <div class="dialog-container__panel" v-bind:style="dialogContainerPanelStyle" @click="close">
        <div
            class="dialog compose-dialog"
            role="dialog"
            v-bind:style="dialogStyle"
            v-on:click.stop
        >
        <header class="dialog-header">
            <button
                type="button"
                class="back-btn to-left btn reset-btn"
                @click="close"
            >
                <i class="uil uil-arrow-left"></i>
            </button>
            <h5 class="text-center">Compose a new content</h5>
        </header>
        <form v-on:submit.prevent="handleSubmit" class="form">
            <section class="dialog-body">
                <text-area
                    placeholder="New content...."
                    required="required"
                    name="content"
                ></text-area>
            </section>
            <footer class="dialog-footer">
                <button
                    type="submit"
                    class="btn btn-ok"
                >
                    Save
                </button>

                <span
                    type="button"
                    class="btn btn-cancel"
                    @click="close"
                    >
                    Close
                </span>
            </footer>
        </form>
        </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { TextArea } from '../Form';

export default {
    name: 'compose-dialog',
    components: {
        TextArea,
    },
    props: {
        isVisible: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        handleSubmit() {
            this.$toaster.success('Successfully saved.. ');
        },
        close() {
            this.$emit('close');
        },
    },
    computed: {
        dialogContainerPanelStyle() {
            if (this.isVisible) {
                return {
                   visibility: 'visible',
                };
            }
        },
        dialogStyle() {
            if (this.isVisible) {
                return {
                    transform: 'scale(1)',
                    opacity: 1,
                    WebkitTransform: 'scale(1)',
                };
            }
        },
        dialogBackdropStyle() {
            if (this.isVisible) {
                return {
                    opacity: 0.7,
                    visibility: 'visible',
                };
            }
        },
    },
};
</script>
<style lang="scss">
.compose-dialog{
    max-width:450px;
    .form{
        .form-control{
            font-size:0.8rem;
        }
    }
}
</style>
