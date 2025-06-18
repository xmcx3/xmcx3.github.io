import { Html, Head, Main, NextScript } from 'next/document'
import Nav from './nav'

export default function Document() {
  return (
    <Html lang="en" className='w-screen h-screen'>
      <Head />
      <body className='flex flex-col w-full h-full'>
        <Nav />
        <div className='flex-1'>
          <Main />
        </div>
        <div className='text-xs self-center mb-1'>
          © 2024-2025 duckduckbiubiu.site 版权所有 ICP证：闽ICP备2025101016号-1
        </div>
        <NextScript />
      </body>
    </Html>
  )
}
