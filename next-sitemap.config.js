// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://cv-henqo-bunga-abadi.vercel.app', // Ganti ke domain produksi Anda
  generateRobotsTxt: true, // Auto-generate robots.txt
  changefreq: 'monthly',
  priority: 0.7,
  sitemapSize: 5000,
}
