/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.dragonoir.my.id',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    changefreq: 'daily',
    priority: 0.7,
    robotsTxtOptions: {
      policies: [
        { userAgent: '*', allow: '/' },
        { userAgent: 'Googlebot', allow: '/' },
      ],
      additionalSitemaps: [
        'https://www.dragonoir.my.id/sitemap.xml',
        'https://www.dragonoir.my.id/sitemap-0.xml',
      ],
    },
  };
  