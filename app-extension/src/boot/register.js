import { boot } from 'quasar/wrappers'
import VuePlugin from 'night-components-quasar'

export default boot(({ app }) => {
  app.use(VuePlugin)
})
