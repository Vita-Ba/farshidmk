import fs from "fs";
import path from "path";
import matter from "gray-matter";
import slugify from "slugify";

export default function getPosts(sectionName) {
  const files = fs.readdirSync(path.join(`posts/${sectionName}`));
  const posts = files.map((fileName) => {
    const slug = slugify(fileName.replace(".md", ""));
    const mdWithMeta = fs.readFileSync(
      path.join(`posts/${sectionName}`, fileName)
    );
    const { data: frontMatter } = matter(mdWithMeta);
    return { slug, frontMatter };
  });
  return posts;
}

export function getPathsByFileName(section) {
  const files = fs.readdirSync(path.join(`posts/${section}`));
  const paths = files.map((fileName) => ({
    params: { slug: fileName.replace(".md", "") },
  }));

  return paths;
}

export function getContentByFileName(section, slug) {
  const mdWithMeta = fs.readFileSync(
    path.join(`posts/${section}`, slug + ".md")
  );
  const { data: frontMatter, content } = matter(mdWithMeta);
  return { frontMatter, content };
}
