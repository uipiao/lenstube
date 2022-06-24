import { STATIC_ASSETS } from '@utils/constants'
import Document, { Head, Html, Main, NextScript } from 'next/document'

class LenstubeDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link
            href="https://assets.lenstube.xyz/fonts/font.css"
            rel="stylesheet"
          />
          <link
            rel="shortcut icon"
            href={`${STATIC_ASSETS}/images/favicons/favicon.ico`}
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={`${STATIC_ASSETS}/images/favicons/apple-touch-icon.png`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={`${STATIC_ASSETS}/images/favicons/favicon-32x32.png`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={`${STATIC_ASSETS}/images/favicons/favicon-16x16.png`}
          />
          <link
            rel="manifest"
            href={`${STATIC_ASSETS}/images/favicons/site.webmanifest`}
          />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#000000" />
          <script
            async
            defer
            data-website-id="2ecff432-293c-4211-8639-f4a4bf65551d"
            src="https://analytics.lenstube.xyz/umami.js"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default LenstubeDocument
