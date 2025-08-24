import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const root = process.cwd();
const byDateDesc = (a, b) => new Date(b.date) - new Date(a.date);

export async function getSettings() {
  const fp = path.join(root, "content/settings/site.json");
  const raw = await fs.promises.readFile(fp, "utf-8");
  return JSON.parse(raw);
}

async function mdToHtml(markdown) {
  const processed = await remark().use(html).process(markdown);
  return processed.toString();
}

export async function getCollection(collection) {
  const dir = path.join(root, `content/${collection}`);
  const files = await fs.promises.readdir(dir);
  const items = [];
  for (const file of files) {
    if (!file.endsWith(".md")) continue;
    const slug = file.replace(/\.md$/, "");
    const raw = await fs.promises.readFile(path.join(dir, file), "utf-8");
    const { data, content } = matter(raw);
    const body = await mdToHtml(content || "");
    items.push({ slug, ...data, body });
  }
  return items;
}

export async function getOne(collection, slug) {
  const fp = path.join(root, `content/${collection}/${slug}.md`);
  const raw = await fs.promises.readFile(fp, "utf-8");
  const { data, content } = matter(raw);
  return { slug, ...data, body: await mdToHtml(content || "") };
}
