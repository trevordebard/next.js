import dynamic from 'next/dynamic'

const DynamicSSRFalse = dynamic(
  async () => {
    if (typeof window === 'undefined') {
      require.resolveWeak('./ssr-false-module')
      return () => null
    } else {
      return import('./ssr-false-module')
    }
  },
  {
    ssr: false,
  }
)

export default function page() {
  return (
    <div>
      <DynamicSSRFalse />
      <p id="content">dynamic-mixed-ssr-false</p>
    </div>
  )
}
