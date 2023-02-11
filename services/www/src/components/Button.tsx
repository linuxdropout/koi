import React, { useEffect, useRef, useState } from 'react'
import clsx from '../utils/clsx'

declare type ButtonProps = React.PropsWithChildren<{

} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>>
function Button({
  children, onClick, className, ...props
}: ButtonProps) {
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

  return (
    <button
      className={clsx(
        'button',
        active && 'button--active',
        className,
      )}
      {...props}
      onClick={e => {
        setActive(true)
        if (onClick) {
          onClick(e)
        }
      }}
    >
      {children}
    </button>
  )
}

export default Button
