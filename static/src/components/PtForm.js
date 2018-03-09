module.exports = {
  data () {
    return {
      form: {
        search: '',
        csrf: document.querySelector('input[name="csrfmiddlewaretoken"]').value,
      }
    }
  },
  methods: {
    onSubmit (event) {
      event.preventDefault()
      console.log(this.form.csrf)
      this.$http.post('/', {search: this.form.search}).then(response => {
        console.log(response)
      }, error => {
        console.log('POST wasnt successful')
      })
    },
  }
}