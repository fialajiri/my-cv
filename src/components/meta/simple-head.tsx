import Head from "next/head";
import { MetaData } from "../../models/meta-data";

const SimpleHead: React.FC<MetaData> = ({ title, description, keywords, locale, url }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={locale} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={`${process.env.HOST_URL}/${url}`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${process.env.HOST_URL}/images/me-optimized.jpg`} />
    </Head>
  );
};

export default SimpleHead;
