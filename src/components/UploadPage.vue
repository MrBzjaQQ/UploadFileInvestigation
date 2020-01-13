<template>
  <div class="upload-page">
    <form name="upload">
      <input ref="myFile" type="file" name="myfile" />
      <input type="submit" value="Upload" @click.prevent="onUploadClicked" />
    </form>
  </div>
</template>
<script>
export default {
  name: 'UploadPage',
  methods: {
    onUploadClicked() {
      const input = this.$refs.myFile;
      const file = input.files[0];
      if (file) {
        this.$store.dispatch('startUpload', file);
      }
    },
  },
};
</script>
