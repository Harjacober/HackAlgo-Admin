// we need our modal component
/* eslint-disable */
import Dialog from './Dialog.vue';

Dialog.install = (Vue, options = {}) => {
  Vue.prototype.$dialog = new (Vue.extend(Dialog))({ propsData: options });
  Vue.dialog = Vue.prototype.$dialog;
  if (process.env.NODE_ENV === 'development') window.dialog = Vue.prototype.dialog;
};
export default Dialog;
