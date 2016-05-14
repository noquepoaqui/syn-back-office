import Config from './config'
var rootUrl = null

export default {
  getThumbnailPath (row) {
    if (!rootUrl) {
      let api = Config.getInstance().api
      rootUrl = api.url + api.images + '/'
    }
    return String(rootUrl + row.path).replace(/()(\.[^\.]+)/, '$1_xSmall$2')
  }
}
