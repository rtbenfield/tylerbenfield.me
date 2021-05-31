import * as fs from "fs/promises";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import * as path from "path";

const postsDirectory = path.join(process.cwd(), "blog");

export async function getAllPosts() {
  const slugs = await getPostSlugs();
  const posts = await Promise.all(slugs.map((slug) => getPostBySlug(slug)));
  return (
    posts
      // limit result to post without mdxSource
      .map(({ post }) => post)
      // sort posts by date in descending order
      .sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1))
  );
}

/**
 *
 * @param {string} slug
 * @returns {Promise<{ mdxSource: import("next-mdx-remote").MDXRemoteSerializeResult, post: any, slug: string }>}
 */
export async function getPostBySlug(slug) {
  const postPath = path.join(postsDirectory, `${slug}.mdx`);
  const source = await fs.readFile(postPath, "utf8");
  const { content, data } = matter(source);
  const mdxSource = await serialize(content, { scope: data });
  return { mdxSource, post: { ...data, slug }, slug };
}

export async function getPostSlugs() {
  const files = await fs.readdir(postsDirectory);
  return files.map((x) => x.replace(/\.mdx$/, ""));
}
