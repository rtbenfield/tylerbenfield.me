import ErrorPage from "next/error";
import { useRouter } from "next/router";
import * as React from "react";
import Layout from "../../components/layout";
import LinkList from "../../components/linkList";
import SEO from "../../components/seo";
import markdownToHtml from "../../lib/markdownToHtml";
import { getProjectBySlug, getProjectSlugs } from "../../lib/projects";

export default function Project({ content, project }) {
  const router = useRouter();
  if (!router.isFallback && !project?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      <SEO description={project.data.spoiler} title={project.data.title} />
      <article>
        <header>
          <h1>{project.data.title}</h1>
        </header>
        <LinkList
          github={project.data.github}
          link={project.data.link}
          title={project.data.title}
          vscodeMarketplace={project.data.vscodeMarketplace}
        />
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </article>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const project = await getProjectBySlug(params.slug);
  const content = await markdownToHtml(project.content ?? "");

  return {
    props: {
      content,
      project,
    },
  };
}

export async function getStaticPaths() {
  const slugs = await getProjectSlugs();
  return {
    fallback: false,
    paths: slugs.map((slug) => {
      return { params: { slug } };
    }),
  };
}
