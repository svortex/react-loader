import { configure } from '@storybook/react'

function loadStories () {
  require('../stories/index.js/index.js.js')
}

configure(loadStories, module)
