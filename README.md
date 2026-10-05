# Haoyu Zhu's academic homepage

Astro static site for <https://academic.geniucker.com>. Use Bun 1.4.2 for installation and all scripts.

```sh
bun install --frozen-lockfile
bun run dev
bun run build
bun run preview
```

`build` runs Astro's type checks, validates content collection schemas, and generates `dist/`. No browser JavaScript is required for the homepage.

## Editing content

Content lives in `src/content/`; presentation lives in `src/components/`, `src/layouts/`, and `src/styles/home.css`. The homepage and HTML CV share the same collections.

| Content | File or directory |
| --- | --- |
| Name, biography, portrait, contact links, skills, update date | `src/content/profile/haoyu.md` |
| Publications | `src/content/publications/*.yaml` |
| News | `src/content/news/*.md` |
| Education | `src/content/education/*.yaml` |
| Research experience | `src/content/experience/*.yaml` |
| Teaching | `src/content/teaching/*.yaml` |
| Honors | `src/content/honors/*.yaml` |
| Courses retained from the old site, shown on the CV | `src/content/courses/*.yaml` |

To add a paper, create **one YAML file** in `src/content/publications/`, following `t-skm-net.yaml`. Publications sort by `date`, newest first; the author matching the profile's `name` is highlighted automatically. Thumbnail assets go in `public/images/publications/`.

To add news, create **one Markdown file** in `src/content/news/`:

```md
---
date: '2026-10-06'
---
Your announcement with optional [links](https://example.com).
```

News sorts newest first and displays month/year. Dates use quoted `YYYY-MM-DD`; an event known only to the month uses the first day for sorting. Timeline collections use `order` (lower first), `title`, optional `subtitle`, and optional `dateLabel`. Schemas are in `src/content.config.ts` and are checked during every build.

## Deployment

`.github/workflows/deploy.yml` installs from `bun.lock`, builds, uploads `dist/`, and deploys using the official GitHub Pages actions. It runs on pushes to `main` or manual dispatch. `public/CNAME` and Astro's `site` preserve `academic.geniucker.com` with no repository subpath.

**One repository setting is still required:** in **Settings → Pages → Build and deployment → Source**, select **GitHub Actions**. The repository currently uses legacy branch deployment; the available integration returned HTTP 403 when attempting to switch this setting. Keep the existing custom domain. After this setting is changed, pushing the local `main` commit will run the deployment workflow.

The new `main` is committed locally only. The old main is preserved and pushed as `backup/academicpages-2026-10-06` at `fa5031b816226dd477eba365195ac84e79b368ad`.

## Content sources and remaining details

- Personal content: the backup branch and the live old site, including the real `images/avatar.jpg`, dual degree, CAD summer research, teaching, scholarships, skills, and courses. Old example/template entries were excluded.
- T-SKM-Net: the shared publication record and thumbnail from [Jiashen Ren's site](https://gaas9000.github.io/), with **Haoyu Zhu** highlighted as first author. The publisher lists March 14, 2026 as publication date; arXiv lists December 11, 2025 for the preprint.
- Education keeps the original **Sep 2022 – Present**. A graduation date or current position was not inferred from the coauthor's biography.
- The CAD summer research entry lacks dates, institution, and advisor in the old source; these remain absent.
- There is no standalone CV PDF in the old source. The CV link opens `/cv/`, built from the same real content, with print styles. A downloadable PDF can be added later.
- Course completion and grades are retained as recorded in the backup. The original incomplete ECE 313 record appears only on the CV.

## Design and licenses

The layout, self-hosted Inter font, CSS values, and decorative SVG icons follow [GaAs9000/GaAs9000.github.io](https://github.com/GaAs9000/GaAs9000.github.io) at `f6fb8342354692e0c1ef7f474a21793ee5c0ff41`. Its MIT license is retained in `LICENSE`; Inter's SIL Open Font License is in `public/fonts/inter-LICENSE.txt`. Only the shared T-SKM-Net record/image is reused as academic content. The coauthor's portrait, biography, other publications, education, and experience are not part of this site.

Verification includes `bun run build`, browser checks at 1440px and 390px, and full-page screenshots compared alongside the live reference. No unit tests were added.
