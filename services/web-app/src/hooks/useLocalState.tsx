import React, { useCallback, useEffect, useState } from 'react'

function useLocalState<T extends unknown>(key: string): ReturnType<typeof useState<T>> {
  const defaultV = window.localStorage.getItem(key)
  const [value, setter] = useState<T | undefined>(
    defaultV ? JSON.parse(defaultV) : undefined,
  )

  const dispatch = useCallback<React.Dispatch<React.SetStateAction<T | undefined>>>(
    action => setter(
      oldValue => {
        const newValue = action instanceof Function
          ? action(oldValue)
          : action

        if (newValue === undefined) {
          window.localStorage.removeItem(key)
        } else {
          window.localStorage.setItem(key, JSON.stringify(newValue))
        }
        return newValue
      },
    ),
    [setter, key],
  )

  useEffect(
    () => {
      const v = window.localStorage.getItem(key)
      if (v !== null) {
        setter(JSON.parse(v))
      }
    },
    [key],
  )

  return [value, dispatch]
}

export default useLocalState
