import { createStore } from 'vuex'

export default createStore({
  state: {
    name: '流星蝴蝶剑'
  },
  mutations: {
    name: (state, newValue) => {
      state.name = newValue
    }
  },
  actions: {
    setName: (ctx, value) => {
      ctx.commit('name', value)
    }
  }
})