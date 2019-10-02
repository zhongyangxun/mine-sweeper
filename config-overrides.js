const path = require('path')

module.exports = function override(config) {
  return {
    ...config,
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        containers: path.resolve(__dirname, 'src/containers'),
        data: path.resolve(__dirname, 'src/data'),
        common: path.resolve(__dirname, 'src/common')
      }
    }
  }
}
