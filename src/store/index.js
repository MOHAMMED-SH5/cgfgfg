import Vue from 'vue'
import Vuex from 'vuex'
if (!localStorage.getItem("persons")) localStorage.setItem("persons", "[]");
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    persons: JSON.parse(localStorage.getItem("persons")),
  },
  getters: {
    getdata(state) {
      return state.persons;
    }
  },
  mutations: {
    addperson(state, payload) {
      if (payload.index >= 0) state.persons.splice(payload.index, 1, payload)
      else state.persons.push(payload);
      localStorage.setItem("persons", JSON.stringify(state.persons));
    },
    deleteperson(state, index) {
      console.log('the person has delete sucsess')
      state.persons.splice(index, 1)
      localStorage.setItem("persons", JSON.stringify(state.persons));
      // splice(من وين بدي ابدا حزف, كم عنصر بدي احزف)
    },
    },
})
