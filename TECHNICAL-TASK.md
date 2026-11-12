# Rockhill Development — website technical task

## 1. Objective

Build an architecture-led corporate site for a UAE residential developer. Give property buyers a clear route from projects to plans and sales contact. Give investors a separate route to corporate disclosures, project updates, document requests and investor relations. A visitor should be able to identify the property, emirate, current evidence and appropriate enquiry route in under a minute.

## 2. Delivery

Use Next.js App Router, TypeScript strict mode, Tailwind and pnpm. Choose a maintained Next.js release compatible with the deployment runtime, pin dependencies and commit the lockfile. Deploy-ready for Vercel. Use local structured content validated at build time with Zod or equivalent. Put assets approved for the chosen build under `public/media` and preserve the manifest mapping. Keep private research out of public and client bundles. Deliver README with commands, environment variables and deployment instructions. Use native controls or accessible headless components for interactive elements.

Use `/en` and `/ru`, redirect `/` to `/en`, and preserve the current page on language switch. Route IDs and project slugs are shared between locales. Structure localization so Arabic and RTL can be added later. Use draft copy and structured content supplied in this kit. Translate any remaining UI labels naturally and give EN and RU feature parity.

| Path under locale | Page and module order | Main action |
|---|---|---|
| `/` | Tower hero, featured project, selected properties, development approach, latest update if present, investor relations split, footer | Explore projects |
| `/projects` | Intro, filter chips, responsive project grid, empty state with reset | View project |
| `/projects/[slug]` | Hero, facts, description, architecture gallery, floor plans, area, dated progress if available, enquiry panel | Request project details |
| `/investor-relations` | Overview, property versus equity paths, document categories, investor process, risks, FAQ, contact panel | Request investor information |
| `/investor-relations/documents` | Corporate, investment and project document sections, with title, date, version, language and access status | Request current documents |
| `/updates` | Dated project and company items from approved records. When empty show an update-request link | Request project updates |
| `/updates/[slug]` | Headline, date, source/credit, update body, gallery where available | Explore related project |
| `/about` | Business overview, development approach, founder, Ajman office | Contact Rockhill |
| `/contact` | Intent picker, form, office and business contacts | Send enquiry |
| `/privacy`, `/terms` | Owner-approved legal copy. Private preview shows a clearly labeled pending-content state | Contact |

Primary navigation: Projects, Investor Relations, Updates, About, Contact. Desktop right side: EN/RU and an enquiry action. Mobile menu uses focus management and closes on Escape and route changes. Footer includes business contact, locale and legal pages. Gallery lives within project pages.

## 3. Visual system

Aim for a premium architecture editorial site. Use `#F5F2EB` limestone as the main background, `#191A17` ink, `#DDD7CB` dividers, and `#59624D` olive for functional accents. Use dark olive with white for filled buttons and verify contrast. Use Cormorant Garamond for display and Manrope or Inter for UI and body, with Latin and Cyrillic subsets. Use self-hosted fonts or next/font. Suggested scale: hero 48–100px, section title 36–64px, body 16–18px, metadata 14px. 12-column desktop grid, six tablet, four mobile, maximum content width 1440px, gutters 24–72px. Desktop section rhythm 96–144px; mobile 56–80px.

- **Home.** Use the supplied Tower hero as a full-bleed frame with a restrained ink overlay and a left-aligned headline near the bottom. Keep the building legible. Use stacked text and image on small screens if the crop hides the building. Feature one substantial Tower spread, followed by two quiet villa tiles. Add a dark investor relations band with a document link.
- **Projects.** Use a three-column desktop grid and one column on mobile. Give each card project name, location and evidence-based status. Use query-backed filters for project type and status with valid defaults, a reset action and browser back support.
- **Tower.** Give the Tower a wide lead image and a compact facts strip. Show render categories in accessible tabs and use a keyboard-friendly modal lightbox. Render the three supplied floor plan images at readable size with zoom and an optional download of the approved image. Hide empty tabs and sections. Offer project details near the plans.
- **Investor relations.** Use warm white surfaces and strong typographic hierarchy. Make the document index and the two entry paths easy to scan. Document rows display labels and versions in plain text. Risk information and help remain visible before the final enquiry action.
- **Motion.** Use brief 180–280ms fades and small position shifts. Respect prefers-reduced-motion. Avoid autoplay video, scroll hijacking, animated performance figures and decorative countdowns.
- **Assets.** Use the two supplied logo files after testing visibility on light and dark backgrounds. Use exact artwork with proper clear space. Mark architectural imagery as rendering or concept as applicable. Treat groundbreaking photos as historical media. Use actual dated photo evidence for construction updates.

## 4. Content and publication behavior

Use the seed JSON plus the provided page copy. Build clear records for projects, media, updates and documents. Validate known status, slug uniqueness, valid dates, relative asset paths, translations and required IDs. Fields with unknown values are null or absent. Omit empty labels and sections. Preview-only entries may display a status banner in authenticated preview. Build production from a positive allowlist of reviewed records and media. Missing approval excludes the affected item. Never render an unsupported progress bar, live inventory, launch countdown or guessed map pin.

On Investor Relations, make the property purchase path lead to Projects/Contact and the corporate enquiry path lead to Investor Relations Documents/Contact. Explain who can request information and what happens after a request. Render the risk and FAQ sections using the supplied neutral draft for review. Add a future configuration for approved documents and an optional scenario calculator. Leave the calculator inactive in MVP. A later calculator must use owner-approved versioned inputs with effective date, scenarios including zero distribution and loss, test vectors, and written approval for assumptions and markets. Distinguish modeled distributions, offer prices, resale proceeds and valuations.

Keep campaign personalization URLs and query identifiers outside the website. The documents page supports two access types: `request` opens the appropriate enquiry form, and `public` opens an owner-approved HTTPS resource with displayed format, file size when known, version and effective date. Draft agreements and verification materials may be listed by category. A data room, shareholder registry, purchase checkout and payment collection are outside MVP.

## 5. Enquiries

Contact form accepts intent (property, investor information, general), name, email, optional phone, optional message and privacy acknowledgement. Pass selected project and locale from CTAs. Use server-side Zod validation, length limits, an allowlist for intents/project IDs, origin validation, a honeypot and a durable rate limit in production. Cap request size. Send to configured business recipients via a server-side mail integration. Suggested env names: `SITE_MODE`, `SITE_URL`, `EMAIL_API_KEY`, `ENQUIRY_FROM`, `PROPERTY_INBOX`, `INVESTOR_INBOX`, `GENERAL_INBOX` and provider-specific rate-limit keys. Supply `.env.example` with blank credentials. Escape untrusted content. Use generic errors and log request IDs without message bodies, investor amounts or contact details. Handle idle, pending, field errors, provider failure and success with accessible status announcements. In preview, show an explicit demo result and skip delivery. On public builds with missing form configuration, show verified contact links and disable submission.

## 6. SEO, accessibility and privacy

Use per-locale title and description, self-canonical, hreflang and x-default, social image, sitemap, robots and branded 404. Use Organization and BreadcrumbList schema where facts support them. Create redirects for legacy corporate routes `/home`, `/about-us`, `/properties`, `/new-launches`, `/gallery`, `/contact-us` and the three project PHP URLs if Rockhill controls the deployment domain. Verify each destination and avoid redirect loops. In preview use access control, noindex and exclude the sitemap. Keep analytics off by default and avoid third-party embeds at initial load. Use outbound links for maps or user-activated embeds.

Target WCAG 2.2 AA, visible focus, semantic headings, labeled fields, useful alt text, skip link, keyboard interactions, focus restore, and responsive text zoom. Render responsive images with explicit dimensions, priority on the primary image only, and lazy loading elsewhere. Verify at 360, 390, 768, 1024 and 1440px with no horizontal overflow. Target LCP ≤2.5s, CLS ≤0.1 and INP ≤200ms at the 75th percentile in production monitoring. Use mobile Lighthouse as the prelaunch regression check.

## 7. Implementation order and acceptance

1. Scaffold, routing, locale dictionary, typed content and asset mapping.
2. Build shared shell and home, then project list/detail, media lightbox and floor plans.
3. Build investor relations, document routing, updates, about and enquiries.
4. Implement metadata, redirects, access and publication rules. Run lint, typecheck and production build.
5. Verify both languages, project filters, unknown slug 404, gallery focus, form success/error, missing-env fallback, preview protection and production exclusion of unpublished data. Check archive asset paths and confirm that each visible document action works.
6. Give the owner a preview and complete the publication checklist in the research notes before launch. Record outstanding decisions in the handoff.
