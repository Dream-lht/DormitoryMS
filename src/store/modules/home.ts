export default {
  state: () => ({
    count: 0,
  }),
  mutations: {
    INCREMENT(state: any) {
      // `state` is the local module state
      state.count++
    },
  },
  getters: {
    doubleCount(state: any) {
      return state.count * 2
    },
  },
}
