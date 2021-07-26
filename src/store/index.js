import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jobs: [],
    filteredJobs: [],
    vmodal: false,
    loading: true,
  },
  mutations: {
    SET_JOBS(state, jobs) {
      state.jobs = jobs
      state.filteredJobs = jobs
      state.loading = false
    }
  },
  actions: {
    getJobs({ commit }) {
      fetch('https://zabr4wty67.execute-api.us-east-2.amazonaws.com/dev/restaurants', {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.AWS_API_KEY
        }
      })
      .then(response => response.json())
      .then(data => {
        commit('SET_JOBS', data);
      })
      .catch(error => console.log(error))
  }
  },
  modules: {
  }
})
