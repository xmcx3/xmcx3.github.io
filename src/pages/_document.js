import { Html, Head, Main, NextScript } from 'next/document'
import Nav from './nav'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Nav />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
