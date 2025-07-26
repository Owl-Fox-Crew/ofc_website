module.exports = {
  siteUrl: process.env.SITE_URL || 'https://staging.owlfoxcrew.com',
  generateRobotsTxt: true,
  exclude: ['/404', '/500'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', disallow: '/' }
    ]
  }
};
