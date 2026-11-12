# Rockhill Development website build kit

## Local private preview

This folder is the Next.js App Router project root. Use Node 20 or newer and pnpm 9.

```sh
pnpm install
pnpm dev
```

Open http://localhost:3000/en or http://localhost:3000/ru. `/` redirects to English. The default `SITE_MODE=preview` (also used when unset) shows owner-review records and simulates enquiry delivery without credentials. Set `PREVIEW_USER` and `PREVIEW_PASSWORD` in `.env.local` to require HTTP Basic authentication. A preview deployed on Vercel requires both variables; it returns 503 without them. Preview responses use `noindex`, and the sitemap is empty.

Use `pnpm lint`, `pnpm typecheck`, and `pnpm build` for checks. Run `pnpm start` after a build. On PowerShell installations that block `.ps1` shims, use `pnpm.cmd` in place of `pnpm`.

## Vercel deployment and publication

Import this folder as a Git repository in Vercel and select the standard Next.js framework preset. Use pnpm install and the default `next build`; no custom server or storage service is needed. Set `SITE_URL` to the deployed origin. Start with `SITE_MODE=preview` and the two preview credentials. To prepare a public build, set `SITE_MODE=production`, fill the explicit `approvals` lists in `content/site-data.json`, and redeploy. The media preparation script copies only approved project media into `public/media` in production. Original kit materials stay in `content/`, `assets/`, and `research/` and are not served as public files. Never place confidential source documents in `public/`.

For live email delivery, configure a verified Resend sender with `EMAIL_API_KEY`, `ENQUIRY_FROM`, `PROPERTY_INBOX`, `INVESTOR_INBOX`, and `GENERAL_INBOX`. The server route sends directly to Resend. Production without all five settings disables the form and displays the published business phone and email links. Copy `.env.example` to `.env.local` for local configuration; do not commit real secrets. No database, CMS, Redis, or persistent server storage is used.

Before public launch, Rockhill must approve imagery, project and villa identities, current Tower status, legal text, investor wording and document access, contact recipients, and the live domain. The legal routes currently show pending-copy states. See [publication notes](research/SOURCES-AND-PUBLISHING.md) for the full checklist.

Prepared 11 November 2026. Unpack this ZIP, open the extracted folder in VS Code, and give your coding agent this prompt:

> Build the Rockhill Development website in this folder. Read TECHNICAL-TASK.md first, then content/PAGE-COPY.md, content/site-data.json, assets/manifest.csv and research/SOURCES-AND-PUBLISHING.md. Use the local images, implement the full English and Russian MVP, run the checks in the technical task and report the launch dependencies. Start in private preview mode. Follow each record’s publication status.

- [Technical task](TECHNICAL-TASK.md) — product scope, design, implementation, acceptance criteria.
- [Page copy](content/PAGE-COPY.md) and [structured data](content/site-data.json) — bilingual draft and typed-content seed.
- [Image inventory](assets/manifest.csv) — local files, provenance, dimensions and reuse status.
- [Research and publication notes](research/SOURCES-AND-PUBLISHING.md) — primary and secondary evidence, conflicts, investment document index and launch approvals.

Design choices for this brief: English and Russian at launch, an editorial architecture style, Next.js, and an enquiry-first investor relations page. The brief assumes Rockhill authorizes the final publication. A private preview can be built immediately with the supplied material.
# rockhill
