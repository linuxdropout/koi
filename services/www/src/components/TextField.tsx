import React, {
  useCallback, useEffect, useRef, useState,
} from 'react'
import {
  FontAwesomeIcon,
} from '@fortawesome/react-fontawesome'
import {
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons'
import clsx from '../utils/clsx'

declare type TextFieldProps = React.PropsWithoutRef<{
  iconRightAttachment?: IconDefinition
  attachmentClickOnEnter?: boolean
  onAttachmentClick?: () => void
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>>
function TextField({
  iconRightAttachment,
  attachmentClickOnEnter,
  onAttachmentClick,
  ...props
}: TextFieldProps) {
  const [active, setActive] = useState(false)
  const activeTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  useEffect(
    () => {
      if (!active) return () => { }

      clearTimeout(activeTimeout.current)
      activeTimeout.current = setTimeout(
        () => {
          setActive(false)
        },
        150,
      )

      return () => {
        clearTimeout(activeTimeout.current)
      }
    },
    [active],
  )

  const handleKeyUp = useCallback<React.KeyboardEventHandler<HTMLInputElement>>(
    e => {
      switch (e.key) {
        case 'Enter':
          if (attachmentClickOnEnter && onAttachmentClick) {
            setActive(true)
            onAttachmentClick()
          }
          break
        default:
      }
    },
    [onAttachmentClick, attachmentClickOnEnter],
  )

  return (
    <div className="text-field">
      <input type="text" {...props} onKeyUp={handleKeyUp} />
      {iconRightAttachment && (
        <div
          className={clsx(
            'text-field__icon-ra',
            active && 'text-field__icon-ra--active',
            onAttachmentClick && 'text-field__icon-ra--button',
          )}
          onClick={() => {
            if (onAttachmentClick) {
              setActive(true)
              onAttachmentClick()
            }
          }}
        >
          <FontAwesomeIcon icon={iconRightAttachment} />
        </div>
      )}
    </div>
  )
}

export default TextField
