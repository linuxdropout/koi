import React from 'react'
import type { ComponentStory, ComponentMeta } from '@storybook/react'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import backgroundUrl from '../assets/images/background.webp'
import koiUrl from '../assets/images/koi.webp'

import TextField from '../components/TextField'
import '../styles/index.scss'

export default {
  component: TextField,
} as ComponentMeta<typeof TextField>

export const LoginEmail: ComponentStory<typeof TextField> = () => (
  <div
    style={{
      width: '430px',
      height: '932px',
      position: 'relative',
      background: 'black',
    }}
  >
    <div
      style={{
        backgroundImage: `url(${backgroundUrl})`,
        backgroundSize: 'cover',
        opacity: 0.74,
        backgroundPosition: 'center',
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
      }}
    />
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        padding: '64px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
        justifyContent: 'space-between',
      }}
    >
      <div style={{
        backgroundImage: `url(${koiUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        aspectRatio: 190 / 117,
        height: '117px',
      }}
      />
      <TextField
        type="email"
        name="email"
        attachmentClickOnEnter
        onAttachmentClick={() => { }}
        iconRightAttachment={faArrowRight}
        placeholder="Email address..."
      />
    </div>
  </div>
)
