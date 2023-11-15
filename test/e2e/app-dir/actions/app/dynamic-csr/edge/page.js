'use client'

import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(
  async () => {
    if (typeof window === 'undefined') {
      require.resolveWeak('../csr')
      return () => null
    } else {
      return import('../csr').then((mod) => mod.CSR)
    }
  },
  {
    ssr: false,
  }
)

export default function Client() {
  return (
    <div>
      <DynamicComponent />
    </div>
  )
}

export const runtime = 'edge'
