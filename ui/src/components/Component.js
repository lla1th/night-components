import { h } from 'vue'
import {QBtn} from 'quasar'

export default {
  name: 'NightButton',

  setup () {
    return () => h(QBtn, {
      class: 'NightButton',
      label: 'BUTTON'
    })
  }
}
