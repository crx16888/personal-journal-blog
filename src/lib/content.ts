type EntryLike = {
  slug: string;
  data: {
    date: Date;
    draft?: boolean;
    tags?: string[];
  };
  body?: string;
};

export function sortByDateDesc<T extends EntryLike>(entries: T[]): T[] {
  return [...entries].sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function onlyPublished<T extends EntryLike>(entries: T[]): T[] {
  return entries.filter((entry) => !entry.data.draft);
}

export function estimateReadingMinutes(text: string): number {
  const englishWords = text.trim().match(/[A-Za-z0-9]+(?:[-'][A-Za-z0-9]+)?/g)?.length ?? 0;
  const cjkChars = text.match(/[\u3400-\u9fff]/g)?.length ?? 0;
  const mixedUnits = englishWords + Math.ceil(cjkChars / 2);
  return Math.max(1, Math.ceil(mixedUnits / 220));
}

export function formatDate(date: Date, locale = "zh-CN"): string {
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(date);
}

export function collectTags(entries: EntryLike[]): { tag: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const entry of entries) {
    for (const tag of entry.data.tags ?? []) counts.set(tag, (counts.get(tag) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}

export function getExcerpt(body = "", fallback = ""): string {
  const cleaned = body
    .replace(/^---[\s\S]*?---/, "")
    .replace(/[#>*_`[\]()!-]/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return cleaned.slice(0, 120) || fallback;
}
