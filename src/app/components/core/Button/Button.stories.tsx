import React from 'react'
import { action } from '@storybook/addon-actions'

import Button from './index'

export default {
  title: '@core/Button',
  parameters: {
    info: { inline: true },
  },
}

export const Text = () => (
  <Button onClick={action('clicked')}>Hello Button</Button>
)
