<template>
  <div class="upload">
    <div v-if="!isOpen" class="upload-button">
      <button @click="onOpenClicked">Open uploading items</button>
    </div>
    <div v-else class="upload-progress">
      <button @click="onCloseClicked">Close</button>
      <ProgressBar
        v-for="upload in uploads"
        :key="upload.id"
        :fileName="upload.fileName"
        :progress="upload.progress"
      />
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import ProgressBar from './ProgressBar.vue';

export default {
  name: 'Upload',
  components: {
    ProgressBar,
  },
  data: () => ({
    isOpen: false,
  }),
  computed: {
    ...mapGetters(['uploads']),
  },
  methods: {
    onOpenClicked() {
      this.isOpen = true;
    },
    onCloseClicked() {
      this.isOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.upload {
  position: absolute;
  bottom: 0;
  right: 50px;
}
.upload-progress {
  position: relative;
  padding: 20px;
  border: 1px solid lightgray;
}
</style>
