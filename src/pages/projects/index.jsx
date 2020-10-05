import Link from "next/link";
import * as React from "react";
import Layout from "../../components/layout";
import LinkList from "../../components/linkList";
import SEO from "../../components/seo";
import Typography from "../../components/typography";
import { getAllProjects } from "../../lib/projects";

export default function Projects({ allProjects }) {
  return (
    <Layout>
      <SEO title="Projects" />
      <Typography variant="h1">Projects</Typography>
      {allProjects.map((project, i) => (
        <React.Fragment key={project.slug}>
          {i > 0 && <hr />}
          <article>
            <header>
              <Typography variant="h2">
                <Link as={`/projects/${project.slug}`} href="/projects/[slug]">
                  <a rel="bookmark">{project.data.title}</a>
                </Link>
              </Typography>
              <LinkList
                github={project.data.github}
                link={project.data.link}
                title={project.data.title}
                vscodeMarketplace={project.data.vscodeMarketplace}
              />
            </header>
            <p dangerouslySetInnerHTML={{ __html: project.data.spoiler }} />
          </article>
        </React.Fragment>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const allProjects = await getAllProjects();
  return {
    props: { allProjects },
  };
}
