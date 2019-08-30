import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

var state = {
  count: 1,
  token: "",
}
var mutations = {
  incCount() {
    ++state.count;
  },
  clearLoginState() {
    state.token = "";
  },
  setToken(strToken) {
    state.token = strToken;
  }
}

var getter = {
  completedCountChange(state) {
    return state.count * 2 + '位';
  },
  token() {
    return state.token;
  }
}


var action = {
  asynIncCount(context) {  //因此你可以调用context.commit来提交一个mutation  使用action需要用dispatch
    context.commit('incCount');
  }

}

const store = new Vuex.Store({
  state,//state: state  的简写
  mutations: mutations,
  getters: getter,
  actions: action,
})

//4.对外暴露
export default store;
