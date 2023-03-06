import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link href="https://api.fontshare.com/v2/css?f[]=clash-display@200,400,700,500,600,300&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.cdnfonts.com/css/futura-pt" rel="stylesheet"></link>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
