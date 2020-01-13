<template>
  <div class="progress-bar">
    <div class="progress">{{`${progress}%`}}</div>
    <button class="button stop" @click="onStopClicked">Stop</button>
    <button class="button stop" @click="onResumeClicked">Resume</button>
    <button class="button stop" @click="onPauseClicked">Pause</button>
    <button class="button stop" @click="onRetryClicked">Retry</button>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    progress: {
      type: Number,
      default: 0,
    },
    fileName: {
      type: String,
      default: '',
    },
  },
  methods: {
    onStopClicked() {
      this.$emit('stop-clicked');
    },
    onResumeClicked() {
      this.$emit('resume-clicked');
    },
    onPauseClicked() {
      this.$emit('pause-clicked');
    },
    onRetryClicked() {
      this.$$emit('retry-clicked');
    },
  },
};
</script>

<style scoped>
.progress-bar {
  display: flex;
  flex-flow: row nowrap;
}
</style>
