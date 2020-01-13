import Vue from 'vue';
import Vuex from 'vuex';
import Resumable from 'resumablejs';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dynamicId: 0, // it will be replaced by uuid
    uploads: {},
  },
  mutations: {
    setFileProgress(state, payload) {
      const fileInfo = {
        ...payload,
      };
      state.uploads[payload.id] = fileInfo;
    },
    incrementDynamicId(state) {
      state.dynamicId += 1;
    },
  },
  actions: {
    startUpload({ state, commit }, file) {
      const r = new Resumable({
        target: 'http://127.0.0.1:5000/server.php',
        testChunks: true,
      });
      r.addFile(file);
      const fileId = state.dynamicId;
      commit('incrementDynamicId');
      r.on('uploadStart', () => {
        console.log('upload started');
      });
      r.on('fileAdded', () => {
        debugger;
        console.log('file added');
      });
      r.on('progress', () => {
        debugger;
        commit('setFileProgress', {
          id: fileId,
          fileName: file.name,
          fileProgress: r.progress() * 100,
          resumable: r,
        });
      });
      const uploadFinished = () => {
        commit('removeFile', fileId);
      };
      r.on('fileSuccess', uploadFinished);
      r.on('fileError', () => {
        console.log('file error');
      });
      r.upload();
      console.log(r.isUploading());
    },
  },
  getters: {
    uploads(state) {
      return state.uploads;
    },
  },
  modules: {
  },
});
