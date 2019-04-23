import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
  state:{
    name:'root',
    num:1,
  },
  mutations:{
    increment(state, payload) {
      state.num++;
    }
  },
  getters:{
    getNum: state => {
      return state.num ;
    },
    getName: (state, getters) => {
      return getters.getNum+state.name;
    }
  },
  actions:{
    increment({commit, state},payload) {
      console.log(payload);
      setTimeout(() => {
        commit('increment');
        console.log(state.num);
      }, 1000);
    }
  }
});
export default store;