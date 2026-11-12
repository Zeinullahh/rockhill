# Source notes and publication checklist

Research checked 11 November 2026. This file is for the site owner and implementation team. The material below includes internal editorial decisions.

## Source register

| ID | Source | Evidence and use |
|---|---|---|
| R1 | [Rockhill corporate site](https://rockhilldev.com/) and [About](https://rockhilldev.com/about-us) | Brand, development process, public founder attribution, corporate portfolio and event coverage. |
| R2 | [Corporate contact page](https://rockhilldev.com/contact-us) | Ajman office, property sales and general contacts. Confirm which mailbox handles investor enquiries. |
| R3 | [Rockhill Tower project page](https://rockhilldev.com/rockhill-tower.php) | Architectural visuals and floor plan assets. Confirm inventory and dated details before release. |
| R4 | [Properties](https://rockhilldev.com/properties), [Jebel Ali](https://rockhilldev.com/villa-jebel-ali.php), [Jebel Ali Hills](https://rockhilldev.com/villa-jebel-ali-hills.php), [New Launches](https://rockhilldev.com/new-launches) | Corporate portfolio listings. The two villa detail pages reuse copy mentioning Al Jaddaf and share the same gallery. Use the individually linked listing images and confirm villa identifiers. The Nad Al Sheba headline links to Jebel Ali Hills, so the initial site does not create a separate Nad Al Sheba page. |
| R5 | [Corporate profile PDF](https://rockhilldev.com/hs/uploads/company_profile_1760017834.pdf) | Corporate account of Rockhill Tower, approach and relationship to DMIU. Useful design context. |
| R6 | [Calculator](https://rockhillcalculator.com/) and [public campaign landing page](https://rockhillcalculator.com/promo/) | Marketing claims, concept assets and campaign context. The supplied parameterized endpoint returned HTTP 302 to the promo path. The public destination was fetched directly with identifiers omitted. |
| R7 | [Company-published document index](https://rockhillcalculator.com/documents/) | Document inventory and company account of Rockhill Residence. English subscription, shareholders’ agreement and adherence copies were examined from links on this index. |
| R8 | [Khaleej Times, 26 June 2026](https://www.khaleejtimes.com/business/property/rockhill-bets-dh250-million-on-affordable-premium-living-with-its-first-ajman-tower) | Dated press coverage of the Tower, 416 homes and Al Alia location. Timing and sales figures reflect the account published then. |
| R9 | [Ajman Open Data project API, Rockhill search](https://data.ajman.ae/api/explore/v2.1/catalog/datasets/real-estate-projects/records?limit=3&where=search%28%22Rockhill%22%29) and [Overit mirror](https://overit.ae/project/rockhill-tower) | Direct government API returned one Rockhill result, Tower registration 542, Al Alia (Aalia in API), 416 units, under construction, developer Rockhill Real Estate Development (S.P.S - L.L.C). Record dated 30 June 2026. Recheck status at release. |
| R10 | [DirectDXB](https://www.directdxb.com/developers/rockhill-development) and [GI Properties](https://giproperties.ae/en/developers/rockhill-development) | Brokerage sources. Useful for identifying disagreements about price, timing and company dates. |
| R11 | [RAK ICC document verification guidance](https://www.rakicc.com/faqs/rak-icc-ibcs/?lang=ru), [UAE Capital Markets legislation](https://uaelegislation.gov.ae/en/legislations/4001) and [Ajman project escrow decision](https://ajmanlegal.gov.ae/assets/download/a8f214eb/%D8%A7%D9%84%D8%AC%D8%B1%D9%8A%D8%AF%D8%A9%20%D8%A7%D9%84%D8%B1%D8%B3%D9%85%D9%8A%D8%A9%20%D8%B4%D9%87%D8%B1%20%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1%20%D8%AE%D8%A7%D8%B5%20%D8%B1%D9%82%D9%85%202%202025.pdf.aspx) | Verification and regulatory context. Obtain advice on the final site language and target markets. |
| R12 | [Property Finder developer profile](https://www.propertyfinder.ae/en/new-projects/dev/rockhill-development) | Contains materially different Dubai project names and a company history that could not be matched to R1/R9. Exclude the claimed Dubai tower portfolio. |
| R13 | [Gulf News, 27 July 2026](https://gulfnews.com/business/property/rockhill-bets-dh250-million-on-affordable-premium-living-with-its-first-ajman-tower-1.500617833) | Gulf News Reach partner-content feature on Rockhill Tower and the developer's Ajman portfolio. Clearly label as partner content when referenced. |
| R14 | [Emirates News Agency (WAM), 15 September 2026](https://www.wam.ae/en/article/3cmlhgug-ajman-real-estate-exhibition-records-310-deals) | WAM's report on the Ajman Real Estate Investment Exhibition notes a fully equipped apartment provided by Rockhill for a community draw in cooperation with Mashaghel Centre. |

## Project and corporate claims

| Claim | Research finding | Implementation |
|---|---|---|
| Rockhill Tower location and scope | Ajman government dataset and June press coverage agree on Al Alia and 416 units. The government record is dated. | Use location and unit count. Use dated evidence for status. |
| Handover and price | R8 reports Q2 2029 and AED 280,000 at launch. R10 sources show Q4 2027 and differing prices. | Leave dates and pricing fields empty until the sales team supplies a current schedule. |
| Dubai villas | R4 lists Jebel Ali and Jebel Ali Hills. No independently established delivery status in the checked sources. | Display as portfolio projects after confirmation. Hide completion and availability labels. |
| Rockhill Residence | R7 mentions a November start. R6 shows concepts. The government query returned Tower only. | Preview-only with concept captions. Confirm registered name, location, status and imagery before moving into the public portfolio. |
| Team and company dates | Sources use different corporate milestones and design partner names. | Use founder attribution and publicly listed office. Confirm legal entity details, roles, founding date and design credits. |

## Investor relations evidence

The English template linked by R7 identifies **Uruskhanov Investments Limited** as the prospective issuer of Class B non-voting economic shares, and identifies the Rockhill developer within the holding structure. Treat this as the template’s description pending current corporate records and legal sign-off. The subscription document describes individually addressed private placement, professional-investor eligibility, resale restrictions and risk of loss. Its pricing schedule lists successive issue prices of USD 1,000, 1,500, 2,500 and 4,500. Clause 6.1.10 describes those prices as the issue schedule. The schedule does not establish resale value. The same template labels copies confidential and describes selling restrictions in clause 6.4.

The public calculator uses a separate USD 1,000/2,000/3,000/4,000 construction-linked narrative, while the campaign promo uses the USD 1,000/1,500/2,500/4,500 ladder. The marketing material also cites projected distributions of about 15% annualized in examples, USD 4.74M paid, USD 14.63M previously raised, and an USD 87M valuation. The agreement’s risk schedule says independent verification was pending at the date of that document. The underlying valuation report, audited payments, applicable eligibility and current transaction terms were not independently established in this review. Record these as historical source claims and leave them outside the public build. The project escrow entry is project-level evidence and provides no basis to describe corporate equity as escrow-protected.

### Documents to request or verify

| Group | Records |
|---|---|
| Developer and project | Current developer licence, contractor licence, Tower registration and project escrow confirmation, brochure, sales terms and project update dates. |
| Issuer and governance | Incorporation certificate, current articles, relevant ownership and group-structure evidence, current subscription agreement, shareholders’ agreement and deed of adherence. |
| Financial and risk | Current financial statements, valuation report with scope and date, distribution policy, approved risk disclosures, share rights, restrictions and current eligibility process. |

Use the R7 index as research provenance. Obtain owner-approved public copies or an approved delivery process. Public copies should have a version, issue date, language and access policy. Keep sensitive or named-recipient material in a controlled channel.

## Before production

- Rockhill approves brand use, imagery and document permissions and confirms the live domain.
- Rockhill confirms the villa identities, Tower status and date, published contacts and approved project information.
- The investor relations owner and qualified counsel approve the public wording, eligible markets, document access and outreach workflow.
- Rockhill supplies the privacy and terms texts, working recipients and environment credentials. Confirm delivery for all three enquiry types.
- QA verifies the public build excludes preview data, source PDFs, unpublished imagery and personalized campaign links.
