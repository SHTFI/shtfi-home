import Head from "next/head";
import { socialLinksData } from "utils";
import { MetaProps } from "../types";

const Meta: React.FC<MetaProps> = ({
  title,
  description,
  image,
  type,
  url,
  name,
  card,
  twitterCreator,
  twitterSite,
  robots,
  favicon,
}) => {
  return (
    <Head key={url}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots ?? "index, follow"} />
      <meta name="twitter:card" content={card ?? "summary"} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta
        name="twitter:site"
        content={twitterSite ?? `${socialLinksData.twitter}`}
      />
      <meta
        name="twitter:creator"
        content={twitterCreator ?? `${socialLinksData.twitter}`}
      />
      <meta property="og:type" content={type ?? "website"} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={name ?? "SHTFI"} />
      <link rel="icon" href={favicon ?? "/favicon.ico"} />
    </Head>
  );
};

export default Meta;
