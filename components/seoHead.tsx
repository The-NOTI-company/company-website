import Head from "next/head";

const DOMAIN = "https://thenoticompany.com/";
const DEFAULT_OG_IMAGE =
  "https://res.cloudinary.com/noticompany/image/upload/v1677216133/NOTI%20media/website/Thumbnail_jyv1ci.png";

interface SeoHeadProps {
    title: string,
    description: string,
    siteName?: string,
    canonical?: string,
    ogImage?: string,
    ogType?: string,
    twitterHandle?: string
}

export default function SeoHead({
  title = "Welcome",
  description = "Creative studio",
  siteName = "NOTI",
  canonical = DOMAIN,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  twitterHandle = "thenoticompany",
}: SeoHeadProps) {
  return (
    <Head>
      <title key="title">{`${title} | ${siteName}`}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="noti, not out to impress, creative, company" />
      <meta key="og_type" property="og:type" content={ogType} />
      <meta key="og_title" property="og:title" content={title} />
      <meta key="og_description" property="og:description" content={description} />
      <meta key="og_locale" property="og:locale" content="en_IE" />
      <meta key="og_site_name" property="og:site_name" content={siteName} />
      <meta key="og_url" property="og:url" content={canonical ?? DOMAIN} />
      <meta key="og_site_name" property="og:site_name" content={siteName} />
      <meta
        key="og_image"
        property="og:image"
        content={ogImage ?? DEFAULT_OG_IMAGE}
      />
      <meta
        key="og_image:alt"
        property="og:image:alt"
        content={`${title} | ${siteName}`}
      />
      <meta key="og_image:width" property="og:image:width" content="1200" />
      <meta key="og_image:height" property="og:image:height" content="630" />

      <meta name="robots" content="index,follow" />

      <meta
        key="twitter:card"
        name="twitter:card"
        content="summary_large_image"
      />
      <meta 
        key="twitter:site" 
        name="twitter:site" 
        content={twitterHandle} 
      />
      <meta
        key="twitter:creator"
        name="twitter:creator"
        content={twitterHandle}
      />
      <meta 
        key="twitter:title" 
        property="twitter:title" 
        content={title} 
      />
      <meta
        key="twitter:description"
        property="twitter:description"
        content={description}
      />

      <link rel="canonical" href={canonical ?? DOMAIN} />

      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
  );
}