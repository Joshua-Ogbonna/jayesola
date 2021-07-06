import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

// Import axios
import axios from 'axios'
// Import vuexpersist
import VuexPersist from 'vuex-persist'

const vuexLocalStorage = new VuexPersist({
  key: 'vuex',
  storage: window.localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    isAuthenticated: false,
    token: localStorage.getItem('token') || '',
    user: {},
    leads: [],
    clients: [],
    notes: [],
    tasks: []
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authState: state => state.isAuthenticated,
    user: state => state.user,
    leads: state => state.leads.reverse(),
    clients: state => state.clients.reverse(),
    notes: state => state.notes.reverse(),
    tasks: state => state.tasks.reverse()
  },
  mutations: {
    register_request (state) {
      state.isLoading = true
    },
    register_success (state, token, user) {
      state.token = token
      state.user = user
      state.isLoading = false
      state.isAuthenticated = true
    },
    // Login request
    login_request (state) {
      state.isLoading = true
    },
    login_success (state, token, user) {
      state.token = token
      state.user = user
      state.isLoading = false
    },
    // Logout request
    logout (state) {
      (state.token = ''), (state.user = {}), (state.isAuthenticated = false)
    },

    // Profile request
    profile_request (state) {
      state.isLoading = true
    },
    // Profile success
    profile_success (state, user) {
      state.isLoading = false
      state.user = user
    },
    // Lead request
    lead_request (state) {
      state.isLoading = true
    },
    // Lead success
    lead_success (state, leads) {
      state.isLoading = false
      state.leads = leads
      localStorage.setItem('leads', leads)
    },
    // Post lead request
    postLead_request (state) {
      state.isLoading = true
    },
    postLead_success (state) {
      state.isLoading = false
    },
    // Client request
    client_request (state) {
      state.isLoading = true
    },
    // Client success
    client_success (state, clients) {
      state.clients = clients
      state.isLoading = false
    },
    // Client post request
    postClient_request (state) {
      state.isLoading = true
    },
    postClient_success (state) {
      state.isLoading = false
    },
    // Note request
    note_request (state) {
      state.isLoading = true
    },
    note_success (state, notes ) {
      state.isLoading = false
      state.notes = notes
    },
    // Task request
    task_request(state) {
      state.isLoading = true
    },
    task_success(state, tasks) {
      state.isLoading = false
      state.tasks = tasks
    }
  },
  actions: {
    SIGNUP ({ commit }, payload) {
      commit('register_request', true)
      axios
        .post('https://frozen-refuge-45677.herokuapp.com/api/signup', payload)
        .then(response => {
          if (response.data.success) {
            // router.push('/dashboard')
            const token = response.data.token
            const user = response.data.user
            // Set token to localStorage
            localStorage.setItem('token', token)
            // Set axios headers
            axios.defaults.headers.common.Authorization = token

            commit('register_success', token, user)
            router.push('/dashboard')
          }
          console.log(response)
        })
        .catch(err => {
          console.log(err)
        })
    },

    // Login Action
    async LOGIN ({ commit }, payload) {
      commit('login_request')

      await axios
        .post('https://frozen-refuge-45677.herokuapp.com/api/login', payload)
        .then(response => {
          if (response.data.success) {
            const token = response.data.token
            const user = response.data.user

            // Set localstorage token
            localStorage.setItem('token', token)
            // Set axios headers
            axios.defaults.headers.common.Authorization = token

            // Commit response login
            commit('login_success', token, user)
            router.push('/dashboard')
          }
        })
        .catch(err => console.log(err.message))
    },

    // Sign out action
    SIGNOUT ({ commit }) {
      commit('logout')
      localStorage.removeItem('token')
      delete axios.defaults.headers.common.Authorization
      router.push('/login')
    },

    // Get user profile
    GETPROFILE ({ commit }) {
      commit('profile_request')
      axios
        .get('https://frozen-refuge-45677.herokuapp.com/api/profile', {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        })
        .then(response => {
          // console.log(response);
          const user = response.data.user
          commit('profile_success', user)
        })
    },

    // Get a lead
    GETLEAD ({ commit }) {
      commit('lead_request')
      axios
        .get(
          'https://frozen-refuge-45677.herokuapp.com/api/leads/' +
            this.state.user._id
        )
        .then(response => {
          const leads = response.data.leads.leads
          commit('lead_success', leads)
        })
    },

    // Post a Lead
    async POSTLEAD ({ commit }, payload) {
      commit('postLead_request')
      await axios
        .post('https://frozen-refuge-45677.herokuapp.com/api/create', payload, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        })
        .then(response => {
          if (response.data.success) {
            router.push('/dashboard')
            commit('postLead_success')
          }
        })
    },

    // Get Clients
    async GETCLIENTS ({ commit }) {
      commit('client_request')
      await axios
        .get(
          'https://frozen-refuge-45677.herokuapp.com/api/clients/' +
            this.state.user._id
        )
        .then(response => {
          // console.log(response.data.clients.clients)
          const clients = response.data.clients.clients

          commit('client_success', clients)
        })
    },

    // Post Clients
    async POSTCLIENTS ({ commit }, payload) {
      commit('postClient_request')
      await axios
        .post('https://frozen-refuge-45677.herokuapp.com/api/client', payload, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        })
        .then(response => {
          if (response.data.success) {
            router.push('/dashboard/clients')
            commit('postClient_success')
          }
        })
        .catch(err => {
          console.log(err)
        })
    },

    // Get Client note
    async getNote ({ commit }, id) {
      commit('note_request')
      await axios
        .get('https://frozen-refuge-45677.herokuapp.com/api/client/' + id)
        .then(response => {
          if (response.data.success) {
            const notes = response.data.data.notes
            commit('note_success', notes)
          }
        })
        .catch(err => {
          console.log(err)
        })
    },

    // Get client tasks
    async getTasks ( { commit }, id) {
      commit('task_request')
      await axios
        .get('https://frozen-refuge-45677.herokuapp.com/api/client/' + id)
        .then(response => {
          if (response.data.success) {
            const tasks = response.data.data.tasks
            commit('task_success', tasks)
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {},
  plugins: [vuexLocalStorage.plugin]
})
