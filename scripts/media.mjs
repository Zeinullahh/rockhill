import { readFileSync, mkdirSync, copyFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
const data = JSON.parse(readFileSync('content/site-data.json','utf8'));
const production = process.env.SITE_MODE === 'production';
const approved = (kind, id) => !production || data.approvals[kind].includes(id);
const files = new Set(['assets/brand/rockhill-logo.png','assets/brand/rockhill-footer-logo.png']);
for (const p of data.projects) if (approved('projects',p.slug)) for (const f of [p.hero,...p.media,...(p.plans||[])]) if (approved('assets',f)) files.add(f);
if (!production) for (const f of ['assets/company/founder.webp','assets/company/team.webp']) files.add(f);
rmSync('public/media',{recursive:true,force:true});
for (const f of files) { const dest=join('public','media',f.replace(/^assets\//,'')); mkdirSync(join(dest,'..'),{recursive:true}); copyFileSync(f,dest); }
console.log(`Prepared ${files.size} local media files for ${production?'production':'preview'}.`);
