import Vue from 'vue'
import Vuex from 'vuex'
import cocktail from '@/utils/cocktail.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drinkObj: JSON.parse(localStorage.getItem('drink')),
  },
  mutations: {
    SET_DRINK(state, drink) {
      state.drinkObj = drink
    },
  },
  actions: {
    getDrink() {
      cocktail()
    },
  },
  modules: {},
})
