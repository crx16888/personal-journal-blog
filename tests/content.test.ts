import { describe, expect, it } from "vitest";
import { estimateReadingMinutes, sortByDateDesc } from "../src/lib/content";

describe("content helpers", () => {
  it("sorts entries from newest to oldest without mutating input", () => {
    const entries = [
      { slug: "old", data: { date: new Date("2024-01-01") } },
      { slug: "new", data: { date: new Date("2026-07-08") } },
      { slug: "middle", data: { date: new Date("2025-04-15") } }
    ];

    const sorted = sortByDateDesc(entries);

    expect(sorted.map((entry) => entry.slug)).toEqual(["new", "middle", "old"]);
    expect(entries.map((entry) => entry.slug)).toEqual(["old", "new", "middle"]);
  });

  it("estimates reading time with a one minute floor", () => {
    expect(estimateReadingMinutes("短文")).toBe(1);
    expect(estimateReadingMinutes("word ".repeat(850))).toBe(4);
  });
});
