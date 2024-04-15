import { useMemo } from "react"

const usePrepareSolana = () => {
  const solana = useMemo(() => {
    const { solana } = window as any
    return solana?.isPhantom ? solana : null
  }, [window])

  return { solana }
}

export default usePrepareSolana
