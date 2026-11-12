# Rockhill Development media refresh

Use this workflow for owner-requested media refreshes. Add verified coverage from established independent media outlets and verified public social posts.

## Source policy

- Do not use Rockhill's own website, blog, newsroom, or press release as a published news reference. It may be consulted only as background or to find the company's social profile links.
- For news, use an established independent publisher. Open the original publisher page and verify outlet, headline, date, company or project identity, canonical URL, and whether the piece is editorial or sponsored/partner content. Label sponsored content clearly.
- For Instagram or other social updates, use a direct public permalink to the original post or reel. Verify the account, subject, date where available, and public access on the platform. A profile link or a search snippet alone is not a post citation.
- Search snippets and third-party mirrors can help discover candidates, but do not use them as the published source. If the original post cannot be opened or verified, skip it.
- Do not include unsupported investment claims. Do not reuse publisher images unless reuse is authorized; prefer approved local assets with accurate captions.

## 1. Inspect the repo

- Confirm this is the Rockhill website repository. Check `git status --short --branch` and identify the configured deployment branch using repository docs and workflows. Preserve unrelated work and keep the current Next.js architecture.
- Inspect the data powering Updates, In the Press, and On Instagram. The initial kit used `content/site-data.json` for press and proposed `content/social-posts.json` for Instagram. Follow the actual repository schema. Record current URLs, Instagram shortcodes, and latest verified dates. The Khaleej Times launch article from June 26, 2026 may already be present.
- Keep independent publisher articles and social posts as separate content types.

## 2. Find independent media coverage

Search the past 30 days and extend back to the last refresh. If results are thin, also search the past 90 days. Example queries:

| Search | Coverage |
|---|---|
| `"Rockhill Development" Ajman` | Company news |
| `"Rockhill Tower" "Al Alia"` | Flagship project |
| `"Rockhill Residence" Ajman` | Planned development |
| `"Dzhabrail Uruskhanov" Rockhill` | Founder interviews |
| Russian-language spellings of Rockhill and Ajman | Russian-language coverage |
| `site:khaleejtimes.com Rockhill` and `site:gulfnews.com Rockhill` | Publisher follow-up |

Verify each candidate on the independent publisher's page. Deduplicate by canonical URL and story, including syndicated copies and AMP variants. Prefer the original outlet. Write short original English and Russian summaries, following the repository's localization conventions.

## 3. Find Instagram and other social posts

- Search Instagram and other public social platforms directly for Rockhill Development, Rockhill Tower, Ajman, and the founder's name. A known Instagram candidate is [@rockhilldevelopmentllc](https://www.instagram.com/rockhilldevelopmentllc/); another candidate founder profile is [@dzhabrailuruskhanov](https://www.instagram.com/dzhabrailuruskhanov/).
- Review posts and reels and check their dates; pinned posts may appear first. Look for founder updates, Tower walkthroughs, construction milestones, site visits, and events.
- Open each original Instagram `/p/` or `/reel/` permalink while signed out when possible. Verify author, subject, date where available, and public access. Remove tracking parameters and deduplicate by shortcode, including collaboration posts.
- Use the existing click-to-preview embed and keep an **Open on Instagram** fallback. If the verified public post cannot be embedded, use a clearly labeled link-only card if supported. Skip posts that cannot be verified from the original platform.

## 4. Update and verify the site

- Add only verified records to version-controlled media content. Include the original permalink, publisher or handle, verified publication/post date, and localized display copy. Keep pending or unverified records out of production.
- Keep the homepage selection compact and the full list in Updates. Avoid database, CMS, or Instagram API credential dependencies.
- If no candidates qualify, report what was checked and finish without a commit or push.
- Run lint, typecheck, and build. Check English and Russian media sections on desktop and mobile. Open every new original article and social permalink; check the preview dialog, its fallback, and image loading.

## 5. Push and check deployment

1. Review the diff and stage only files from this refresh. Commit with a message such as `Update Rockhill press and Instagram coverage`.
2. Confirm the deployment remote and branch, then push normally. If the branch advanced, reconcile and rerun affected checks. Use the existing PR workflow if branch protection requires it. Never force-push or bypass branch protection.
3. Confirm the commit reached GitHub and check deployment status if available. Open the live media page and confirm the entries. If deployment status is inaccessible, report the push and deployment status separately. Fix recoverable failures introduced by this update.
4. Report added headlines/posts with their independent publisher or original social links, commit or PR, deployment status, and anything that could not be verified.
