import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

const store = createStore({
  state () {
    return {
      current: "Dashboard",
      username: "Samantha",
    }
  },
  mutations: {
    updatecurrent (state, newval) {
      state.current = newval;
    }
  }
})
const app = createApp(App);

app.use(store)
app.mount('#app')