import axios from 'axios'

const state = () => ({
  Planets: []
})

const getters = {
  allPlanets: state => state.Planets
}

const mutations = {
  GET_Planets(state, Planets) {
    state.Planets = Planets
  }
}

const actions = {
  async fetchPlanets({ commit }) {
    let response = await axios.get(process.env.baseUrl + '/planets')
    commit('GET_Planets', response.data)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
