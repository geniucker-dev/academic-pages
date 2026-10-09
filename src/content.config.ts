import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const text = z.string().trim().min(1);
const icon = z.enum(['mail', 'scholar', 'github', 'linkedin', 'file', 'pin', 'landmark', 'news', 'book', 'flask', 'presentation', 'award', 'link', 'image']);
const href = text.refine((value) => /^(https:\/\/|mailto:|\/(?!\/))/.test(value), 'Use an HTTPS URL, mailto address, or root-relative path');
const asset = text.refine((value) => /^\/(?!\/)/.test(value), 'Use a root-relative asset path');
const link = z.object({ label: text, href, icon });
const date = z.string().regex(/^\d{4}-\d{2}-\d{2}$/).refine((value) => {
  const parsed = new Date(value);
  return !Number.isNaN(parsed.valueOf()) && parsed.toISOString().slice(0, 10) === value;
}, 'Use a valid YYYY-MM-DD date');
const row = z.object({
  title: text,
  subtitle: text.optional(),
  dateLabel: text.optional(),
  order: z.number().int().nonnegative(),
});
const rows = (name: string) => defineCollection({
  loader: glob({ pattern: '*.yaml', base: `./src/content/${name}` }),
  schema: row,
});

export const collections = {
  profile: defineCollection({
    loader: glob({ pattern: '*.md', base: './src/content/profile' }),
    schema: z.object({
      name: text,
      nativeName: text,
      role: text,
      affiliation: text,
      location: text,
      description: text,
      avatar: asset,
      avatarWidth: z.number().int().positive(),
      avatarHeight: z.number().int().positive(),
      updated: date,
      links: z.array(link).min(1),
      additionalLinks: z.array(link).default([]),
      skills: z.array(text),
    }),
  }),
  publications: defineCollection({
    loader: glob({ pattern: '*.yaml', base: './src/content/publications' }),
    schema: z.object({
      title: text,
      date,
      url: z.url({ protocol: /^https$/ }),
      authors: z.array(text).min(1),
      tag: text,
      venue: text,
      image: asset,
      imageAlt: text,
      summary: text,
      links: z.array(link).min(1),
    }),
  }),
  news: defineCollection({
    loader: glob({ pattern: '*.md', base: './src/content/news' }),
    schema: z.object({ date }),
  }),
  education: rows('education'),
  experience: rows('experience'),
  teaching: rows('teaching'),
  honors: rows('honors'),
  courses: defineCollection({
    loader: glob({ pattern: '*.yaml', base: './src/content/courses' }),
    schema: z.object({ category: text, order: z.number().int(), items: z.array(z.object({ name: text, grade: text.optional(), completed: z.boolean() })) }),
  }),
};
