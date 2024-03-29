const path = require('path')

module.exports = function override(config) {
  return {
    ...config,
    output: {
      ...config.output,
      publicPath: './'
    },
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        containers: path.resolve(__dirname, 'src/containers'),
        data: path.resolve(__dirname, 'src/data'),
        common: path.resolve(__dirname, 'src/common'),
        store: path.resolve(__dirname, 'src/store'),
        resource: path.resolve(__dirname, 'src/resource')
      }
    }
  }
}
