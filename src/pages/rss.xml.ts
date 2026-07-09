import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIRoute } from "astro";
import { onlyPublished, sortByDateDesc } from "../lib/content";
import { site } from "../data/site";

export const GET: APIRoute = async (context) => {
  const posts = sortByDateDesc(onlyPublished(await getCollection("blog")));
  return rss({
    title: site.name,
    description: site.description,
    site: context.site ?? site.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/posts/${post.slug}/`
    }))
  });
};
