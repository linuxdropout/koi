import React from 'react'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import TextField from '../components/TextField'
import '../styles/index.scss'

export default {
  component: TextField,
} as ComponentMeta<typeof TextField>

export const LoginEmail: ComponentStory<typeof TextField> = () => (
  <div style={{
    background: 'black',
    width: '430px',
    height: '600px',
    padding: '64px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }}
  >
    <TextField
      attachmentClickOnEnter
      onAttachmentClick={() => { }}
      iconRightAttachment={faArrowRight}
      placeholder="Email address..."
    />
  </div>
)
