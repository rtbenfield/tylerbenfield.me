import ErrorPage from "next/error";
import { useRouter } from "next/router";
import * as React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import markdownToHtml from "../../lib/markdownToHtml";
import { getPostBySlug, getPostSlugs } from "../../lib/posts";

export default function Post({ content, post }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      <SEO description={post.data.spoiler} title={post.data.title} />
      <article>
        <header>
          <h1>{post.data.title}</h1>
          <p>{post.data.date}</p>
        </header>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </article>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);
  const content = await markdownToHtml(post.content ?? "");

  return {
    props: {
      content,
      post,
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
