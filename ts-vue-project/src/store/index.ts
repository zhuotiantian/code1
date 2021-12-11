import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list:[
      {
        text: '学习《typescript全面解读》',
        complete: false,
      },
      {
        text: '学习《vue技术栈开发实战》',
        complete: false,
      },
    ]
  },
  mutations: {
    updateList(state,{index,content}){
      state.list[index].text=content;
    }
  },
  actions: {
  },
  modules: {
  },
});
