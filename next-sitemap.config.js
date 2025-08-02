/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://cv-henqo-bunga-abadi.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  sitemapSize: 7000,
  changefreq: 'monthly',
  priority: 0.7,
  exclude: [],
  outDir: './public',
};
