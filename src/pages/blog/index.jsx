import Link from "next/link";
import * as React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Typography from "../../components/typography";
import { getAllPosts } from "../../lib/posts";

export default function Blog({ allPosts }) {
  return (
    <Layout>
      <SEO title="Blog" />
      <Typography variant="h1">Blog</Typography>
      {allPosts.map((post, i) => (
        <React.Fragment key={post.slug}>
          {i > 0 && <hr />}
          <article>
            <header>
              <Typography variant="h2">
                <Link as={`/blog/${post.slug}`} href="/blog/[slug]">
                  <a rel="bookmark">{post.data.title}</a>
                </Link>
              </Typography>
              <small>
                {/* {post.date} - {node.timeToRead} min read */}
                {post.data.date}
              </small>
            </header>
            <p dangerouslySetInnerHTML={{ __html: post.data.spoiler }} />
          </article>
        </React.Fragment>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const allPosts = await getAllPosts();
  return {
    props: { allPosts },
  };
}
