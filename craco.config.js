const path = require('path')
const CracoLessPlugin = require('craco-less')

const resolve = (patname) => path.resolve(__dirname, patname)

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {}
        }
      }
    }
  ],
  webpack: {
    alias: {
      '@': resolve('src'),
      components: resolve('src/components')
    }
  }
}
