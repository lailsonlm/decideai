import Head from "next/head";

interface SEOProps {
  title: string;
  path: string;
}

export function SEO({ title, path }: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} key="title" />
      <meta property="og:url" content={`https://decideai.com.br${path}`}/>
    </Head>
  )
}