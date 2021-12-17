import { socialLinksData } from "utils";

const Meta: React.FC = () => {
  return (
    <>
      <title>{process.env.NEXT_PUBLIC_META_NAME}</title>
      <meta
        name="description"
        content={process.env.NEXT_PUBLIC_META_DESCRIPTION}
      />
      <link rel="icon" href="/favicon.ico" />
      <meta name="robots" content="index, follow" />
      <meta name="twitter:title" content={process.env.NEXT_PUBLIC_META_TITLE} />
      <meta
        name="twitter:description"
        content={process.env.NEXT_PUBLIC_META_DESCRIPTION}
      />
      <meta name="twitter:image" content={process.env.NEXT_PUBLIC_META_IMAGE} />
      <meta name="twitter:site" content={`${socialLinksData.twitter}`} />
      <meta name="twitter:creator" content={`${socialLinksData.twitter}`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={process.env.NEXT_PUBLIC_META_TITLE} />
      <meta
        property="og:description"
        content={process.env.NEXT_PUBLIC_META_DESCRIPTION}
      />
      <meta property="og:image" content={process.env.NEXT_PUBLIC_META_IMAGE} />
      <meta property="og:url" content={process.env.NEXT_PUBLIC_URL} />
      <meta
        property="og:site_name"
        content={process.env.NEXT_PUBLIC_META_NAME}
      />
    </>
  );
};

export default Meta;
