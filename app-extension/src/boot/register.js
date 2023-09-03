import { boot } from 'quasar/wrappers'
import VuePlugin from 'quasar-ui-night-components-quasar'

export default boot(({ app }) => {
  app.use(VuePlugin)
})
