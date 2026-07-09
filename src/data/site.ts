export const site = {
  name: "Rongxian's Blog",
  author: "Rongxian",
  title: "Rongxian — Builder & Blogger",
  description: "一个用于记录项目、文章、笔记、照片和朋友链接的个人博客。",
  url: "https://personal-journal-blog.zeabur.app",
  location: "Shanghai / Remote",
  role: "AI Builder · Operator · Writer",
  since: "2026-07-08",
  github: "crx16888",
  email: "hello@example.com"
};

export const navItems = [
  { label: "Blog", href: "/blog/" },
  { label: "Moment", href: "/moments/" },
  { label: "Notes", href: "/notes/" },
  { label: "Photos", href: "/photos/" },
  { label: "Friends", href: "/friends/" }
];

export const socials = [
  { label: "GitHub", href: "https://github.com/crx16888" },
  { label: "RSS", href: "/rss.xml" },
  { label: "Archive", href: "/archive/" }
];

export const projects = [
  {
    name: "Personal Operating System",
    description: "把日常工作流、客户案例、活动方案和内容生产沉淀成可复用系统。",
    tags: ["AI", "Workflow", "Knowledge"]
  },
  {
    name: "Blog Stack",
    description: "Astro 静态站点，Markdown 写作，RSS 与 sitemap 自动生成。",
    tags: ["Astro", "Markdown", "GitHub"]
  }
];

export const moments = [
  {
    date: "2026-07-08",
    text: "重新搭了一个个人博客。先把写作入口跑通，再慢慢补齐评论、相册和自动发布。",
    source: "site launch"
  },
  {
    date: "2026-07-03",
    text: "最近的判断：AI 工具真正改变的不是单点效率，而是谁能更快把想法变成可验证的东西。",
    source: "note"
  },
  {
    date: "2026-06-24",
    text: "把一份混乱的业务材料重写成客户问题、服务路径、交付物和验证价值，表达立刻变清楚。",
    source: "work"
  }
];

export const photos = [
  {
    title: "Desk Light",
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    color: "#d8c8a8"
  },
  {
    title: "City Walk",
    src: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=80",
    color: "#203848"
  },
  {
    title: "Notebook",
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    color: "#c8d8e8"
  },
  {
    title: "Evening Code",
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    color: "#182028"
  },
  {
    title: "Quiet Room",
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    color: "#9aa878"
  },
  {
    title: "Paper Trail",
    src: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
    color: "#f0ece2"
  }
];

export const friends = [
  { name: "DIYGod", domain: "diygod.me", href: "https://diygod.me/", status: "ok" },
  { name: "阮一峰", domain: "ruanyifeng.com", href: "https://www.ruanyifeng.com/blog/", status: "ok" },
  { name: "Livid", domain: "livid.v2ex.com", href: "https://livid.v2ex.com/", status: "ok" },
  { name: "Matrix", domain: "sspai.com", href: "https://sspai.com/matrix", status: "ok" },
  { name: "Astro", domain: "astro.build", href: "https://astro.build", status: "ok" }
];
