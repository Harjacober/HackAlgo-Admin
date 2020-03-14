<template>
  <div>
    <label :for="id"><i class='uil uil-files-landscapes-alt'></i>{{label}}</label>
    <input class="hidden fileUpload" type="file" name="" :id="id">
  </div>
</template>
<script>
export default {
  name: 'fileInput',
  props: ['id', 'label'],
  mounted() {
    const fileinputs = document.querySelectorAll('.fileUpload');
    for (let i = 0; i < fileinputs.length; i += 1) {
      fileinputs[i].addEventListener('change', (e) => {
        console.log(e.path[0].files[0].name);
      });
    }
  },
};
</script>
