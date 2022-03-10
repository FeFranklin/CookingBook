import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className='html'>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body className='body'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}