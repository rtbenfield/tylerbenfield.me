import { MDXRemote } from "next-mdx-remote";
import ErrorPage from "next/error";
import { useRouter } from "next/router";
import Highlight, { Prism } from "prism-react-renderer";
import * as React from "react";
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import { getPostBySlug, getPostSlugs } from "../../lib/posts";

/** @type{import("prism-react-renderer").PrismTheme} */
const theme = {
  plain: {
    backgroundColor: "var(--code-background)",
    color: "var(--color-primary)",
  },
  styles: [
    {
      types: ["atrule"],
      style: { color: "var(--code-token-atrule)" },
    },
    {
      types: ["attr-name"],
      style: { color: "var(--code-token-attr-name)" },
    },
    {
      types: ["attr-value"],
      style: { color: "var(--code-token-attr-value)" },
    },
    {
      types: ["boolean"],
      style: { color: "var(--code-token-boolean)" },
    },
    {
      types: ["builtin"],
      style: { color: "var(--code-token-builtin)" },
    },
    {
      types: ["cdata"],
      style: { color: "var(--code-token-cdata)" },
    },
    {
      types: ["char"],
      style: { color: "var(--code-token-char)" },
    },
    {
      types: ["class-name"],
      style: { color: "var(--code-token-class-name)" },
    },
    {
      types: ["comment"],
      style: { color: "var(--code-token-comment)" },
    },
    {
      types: ["constant"],
      style: { color: "var(--code-token-constant)" },
    },
    {
      types: ["deleted"],
      style: { color: "var(--code-token-deleted)" },
    },
    {
      types: ["doctype"],
      style: { color: "var(--code-token-doctype)" },
    },
    {
      types: ["entity"],
      style: { color: "var(--code-token-entity)" },
    },
    {
      types: ["function"],
      style: { color: "var(--code-token-function)" },
    },
    {
      types: ["important"],
      style: { color: "var(--code-token-important)" },
    },
    {
      types: ["inserted"],
      style: { color: "var(--code-token-inserted)" },
    },
    {
      types: ["keyword"],
      style: { color: "var(--code-token-keyword)" },
    },
    {
      types: ["number"],
      style: { color: "var(--code-token-number)" },
    },
    {
      types: ["operator"],
      style: { color: "var(--code-token-operator)" },
    },
    {
      types: ["prolog"],
      style: { color: "var(--code-token-prolog)" },
    },
    {
      types: ["property"],
      style: { color: "var(--code-token-property)" },
    },
    {
      types: ["punctuation"],
      style: { color: "var(--code-token-punctuation)" },
    },
    {
      types: ["regex"],
      style: { color: "var(--code-token-regex)" },
    },
    {
      types: ["selector"],
      style: { color: "var(--code-token-selector)" },
    },
    {
      types: ["string"],
      style: { color: "var(--code-token-string)" },
    },
    {
      types: ["symbol"],
      style: { color: "var(--code-token-symbol)" },
    },
    {
      types: ["url"],
      style: { color: "var(--code-token-url)" },
    },
    {
      types: ["variable"],
      style: { color: "var(--code-token-variable)" },
    },
  ],
};

function Code({ children, className, live }) {
  const language = className.replace(/language-/, "");
  if (live) {
    return (
      <LiveProvider code={children} noInline>
        <LiveEditor theme={theme} />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    );
  } else {
    return (
      <Highlight code={children} language={language} Prism={Prism}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <code className={className} style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </code>
        )}
      </Highlight>
    );
  }
}

const components = {
  code: Code,
};

export default function Post({ mdxSource, post }) {
  const router = useRouter();
  if (router.isFallback) {
    return <ErrorPage statusCode={404} />;
  }
  const formatter = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    timeZone: "UTC",
    year: "numeric",
  });
  return (
    <Layout>
      <SEO description={post.spoiler} title={post.title} />
      <article>
        <header>
          <h1>{post.title}</h1>
          <small>{formatter.format(new Date(post.date))}</small>
        </header>
        <MDXRemote {...mdxSource} components={components} />
      </article>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const { mdxSource, post, slug } = await getPostBySlug(params.slug);
  return {
    props: {
      mdxSource,
      post,
      slug,
    },
  };
}

export async function getStaticPaths() {
  const slugs = await getPostSlugs();
  return {
    fallback: false,
    paths: slugs.map((slug) => {
      return { params: { slug } };
    }),
  };
}
