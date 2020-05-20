import Vue from 'vue'
import Vuex from 'vuex'
import cocktail from '@/utils/cocktail.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drinkObj: {},
  },
  mutations: {
    SET_DRINK(state, drink) {
      state.drinkObj = drink
    },
  },
  actions: {
    getDrink({ commit }) {
      cocktail((drink) => {
        commit('SET_DRINK', drink)
      })
    },
  },
  modules: {},
})
