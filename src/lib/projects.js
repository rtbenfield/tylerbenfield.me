import * as fs from "fs";
import matter from "gray-matter";
import * as path from "path";
import { promisify } from "util";

const projectsDirectory = path.join(process.cwd(), "projects");
const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);

export async function getAllProjects() {
  const slugs = await getProjectSlugs();
  const posts = await Promise.all(slugs.map((slug) => getProjectBySlug(slug)));
  // sort projects by name
  return posts.sort((a, b) => (a.name > b.name ? 1 : -1));
}

export async function getProjectBySlug(slug) {
  const fullPath = path.join(projectsDirectory, `${slug}.md`);
  const fileContents = await readFile(fullPath, "utf8");
  const { content, data } = matter(fileContents);
  return { content, data, slug };
}

export async function getProjectSlugs() {
  const files = await readdir(projectsDirectory);
  return files.map((x) => x.replace(/\.md$/, ""));
}
