import { h } from 'vue'
import { QBadge } from 'quasar'

export default {
  name: 'NightButton',

  setup () {
    return () => h(QBadge, {
      class: 'NightButton',
      label: 'NightButton'
    })
  }
}
