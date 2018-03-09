import PtForm from './components/PtForm'

/**
 * Vue Resource
 */
Vue.http.interceptors.push(function (request) {
  request.headers.set('X-CSRFToken', this.form.csrf)
})

new Vue({
  el: '#app',
  delimiters: ['[[', ']]'],
  data () {
    return {
      title: 'Python TehMoviez'
    }
  },
  components: {
    'pt-form': PtForm
  },
  http: {
    root: '/'
  },
  mixins: []
})