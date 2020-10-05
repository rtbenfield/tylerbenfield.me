import Head from "next/head";
import PropTypes from "prop-types";
import React from "react";

function SEO({ description, title }) {
  return (
    <Head>
      <title>{title} | Tyler Benfield</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="Tyler Benfield" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Head>
  );
}

SEO.defaultProps = {
  description: "Personal blog of Tyler Benfield.",
};

SEO.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default SEO;
