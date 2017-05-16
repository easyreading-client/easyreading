import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const myPlugin = store => {
  // for (let i = localStorage.length - 1; i >= 0; i--) {
  //   let book = localStorage.getItem(localStorage.key(i))
  //   book = JSON.parse(book)
  //   store.state.books.push(book)
  // }
}
export default new Vuex.Store({
  state: {
    // xx: {}
    books: [],
    routing: false,
    read: {
      bookid: undefined,
      pages: [],
      page: 0,
      showmore: false,
      showtoc: false,
      fontSize: undefined,
      fontFamily: undefined
    },
    modal: {
      close: undefined,
      size: 0
    }
  },
  mutations: {
    // mutation: (state, payload) => {
    //   state.xx = payload.xx
    // }
    add (state, payload) {
      state.books.push(payload)
      localStorage.setItem(payload.id, JSON.stringify(payload))
    },
    remove (state, payload) {
      state.books = state.books.filter(function (obj) {
        if (obj.id !== payload) {
          return true
        }
        return false
      })
      localStorage.removeItem(payload)
    },
    routing: (state, payload) => {
      state.routing = payload
      if (state.routing) {
        // console.log(this.a)
        this.a.commit('closemodal')
      }
    },
    addmodal: (state, payload) => {
      if (!state.modal.close) {
        state.modal.close = new Set()
      }
      state.modal.size++
      state.modal.close.add(payload)

      // console.log(state.modal.close.size)
    },
    removemodal: (state, payload) => {
      if (state.modal.close && state.modal.close.has(payload)) {
        state.modal.close.delete(payload)
        state.modal.size--
      }
    },
    closemodal: (state) => {
      // console.log('closemodal')
      if (state.modal.close && state.modal.close.size > 0) {
        for (let i of state.modal.close) {
          i()
        }
        state.modal.close.clear()
        state.modal.size = 0
      }
    },
    setFontSize: (state, payload) => {
      state.read.fontSize = payload
      localStorage.setItem('readFontSize', payload)
    },
    setFontFamily: (state, payload) => {
      state.read.fontFamily = payload
      localStorage.setItem('readFontFamily', payload)
    }
  },
  getters: {
    // xx: state => state.needScrollTops
    routing: state => state.routing,
    hasModal: state => state.modal.size > 0,
    fontSize: state => {
      if (!state.read.fontSize) {
        var value = ~~localStorage.getItem('readFontSize')
        state.read.fontSize = value || 1
      }
      return state.read.fontSize
    },
    fontFamily: state => {
      if (!state.read.fontFamily) {
        var value = localStorage.getItem('readFontFamily')
        state.read.fontFamily = value || '思源宋体'
      }
      return state.read.fontFamily
    }
  },
  plugins: [myPlugin]
})
