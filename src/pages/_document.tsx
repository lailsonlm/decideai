import { Html, Head, Main, NextScript } from 'next/document'
// import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="pt">
      <title>Decide Aí - O que você procura está aqui</title>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Suez+One&display=swap" rel="stylesheet" />

        <meta name="theme-color" content="#161925" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#161925" />

        <meta property="og:description" content="Decide Aí - O que você procura está aqui, quem decide é você! Somos seu guia para estabelecimentos e lugares separados por categorias para facilitar sua vida e encontrar o que você procura." />
        <meta name="description" content="Decide Aí - O que você procura está aqui, quem decide é você! Somos seu guia para estabelecimentos e lugares separados por categorias para facilitar sua vida e encontrar o que você procura." />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:image" content="/logo-seo.jpg" />

        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="keywords" content="guia, paulista, olinda, recife, bares, restaurantes, docerias, entretenimento, cafeterias, culinária, encontrar, onde comer, onde ir, decide ai, decide aí, barzinho"/>

        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* <Script
          id="Adsense-id"
          data-ad-client="ca-pub-3875179153458483"
          async
          strategy="beforeInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          crossOrigin="anonymous"
        /> */}

      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3875179153458483"
          crossOrigin="anonymous"></script>

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
