import { useEffect, useState } from 'react'

export default function useScrollPosition() {
  const [scrollX, setScrollX] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    function scrollHandle() {
      setScrollX(window.scrollX)
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', scrollHandle)

    return () => {
      window.removeEventListener('scroll', scrollHandle)
    }
  })

  return {
    scrollX,
    scrollY,
  }
}
