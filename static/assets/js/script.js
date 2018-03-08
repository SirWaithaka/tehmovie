/**
 * Components
 */
Vue.component('pt-form', {
  data () {
    return {
      csrf: document.querySelector('input[name="csrfmiddlewaretoken"]').value,
      form: {
        search: ''
      }
    }
  },
  methods: {
    onSubmit (event) {
      event.preventDefault()
      console.log(this.csrf)
      this.$http.post('/', {search: this.form.search}).then(response => {
        console.log(response)
      }, error => {
        console.log('POST wasnt successful')
      })
    },
  }
})

/**
 * Mixins
 */
let mixin = {
  data () {

  },
  methods: {}
}

/**
 * Vue Resource
 */
Vue.http.interceptors.push(function (request) {
  request.headers.set('X-CSRFToken', this.csrf)
})
/**
 * create root instance
 */
window.app = new Vue({
  el: '#app',
  delimiters: ['[[', ']]'],
  data () {
    return {
      title: 'Python TehMoviez'
    }
  },
  mixins: [],
  http: {
    root: '/'
  }
})
