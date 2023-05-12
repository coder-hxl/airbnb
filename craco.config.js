const path = require('path')
const CracoLessPlugin = require('craco-less')

const resolve = (patname) => path.resolve(__dirname, patname)

module.exports = {
  devServer: {
    port: 3001
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {},
            javascriptEnabled: true
          }
        }
      }
    }
  ],
  webpack: {
    alias: {
      '@': resolve('src'),
      components: resolve('src/components'),
      '@mui/styled-engine': '@mui/styled-engine-sc'
    }
  }
}

