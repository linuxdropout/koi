import React from 'react'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from '../components/Button'
import '../styles/index.scss'

export default {
  component: Button,
} as ComponentMeta<typeof Button>

export const Primary: ComponentStory<typeof Button> = () => (
  <Button>Button</Button>
)
