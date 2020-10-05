import * as fs from "fs";
import matter from "gray-matter";
import * as path from "path";
import { promisify } from "util";

const postsDirectory = path.join(process.cwd(), "blog");
const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);

export async function getAllPosts() {
  const slugs = await getPostSlugs();
  const posts = await Promise.all(slugs.map((slug) => getPostBySlug(slug)));
  // sort posts by date in descending order
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = await readFile(fullPath, "utf8");
  const { content, data } = matter(fileContents);
  return { content, data, slug };
}

export async function getPostSlugs() {
  const files = await readdir(postsDirectory);
  return files.map((x) => x.replace(/\.md$/, ""));
}
