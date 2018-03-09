const path = require('path')

const STATIC_DIR = path.resolve(__dirname, 'static')

const config = {
  entry: path.resolve(STATIC_DIR, 'src/app.js'),
  output: {
    path: path.resolve(STATIC_DIR, 'dist'),
    filename: 'main.js'
  },
  watch: true,
  mode: 'development'
}

module.exports = config