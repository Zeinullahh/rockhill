import type { NextConfig } from 'next';
const nextConfig: NextConfig = { experimental:{cpus:1}, async redirects() { return [
  {source:'/home',destination:'/en',permanent:true},{source:'/about-us',destination:'/en/about',permanent:true},
  {source:'/properties',destination:'/en/projects',permanent:true},{source:'/new-launches',destination:'/en/projects',permanent:true},
  {source:'/gallery',destination:'/en/projects/rockhill-tower',permanent:true},{source:'/contact-us',destination:'/en/contact',permanent:true},
  {source:'/rockhill-tower.php',destination:'/en/projects/rockhill-tower',permanent:true},
  {source:'/villa-jebel-ali.php',destination:'/en/projects/villa-jebel-ali',permanent:true},
  {source:'/villa-jebel-ali-hills.php',destination:'/en/projects/villa-jebel-ali-hills',permanent:true}
]; }};
export default nextConfig;
