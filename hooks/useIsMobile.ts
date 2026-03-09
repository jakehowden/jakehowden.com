import { useEffect, useState } from 'react'

export const useIsMobile = (breakpoint: number = 768) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const query = window.matchMedia(`(max-width: ${breakpoint}px)`) as MediaQueryList
    const update = () => setIsMobile(query.matches)
    update()
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    query.addEventListener('change', handler)
    return () => query.removeEventListener('change', handler)
  }, [breakpoint])

  return isMobile
}

export default useIsMobile
