/** @type {import("next-sitemap").IConfig} */
module.exports = {
    siteUrl: process.env.DEPLOY_URL || `http://localhost:3000`,
    generateRobotsTxt: true,
    generateIndexSitemap: false,
}
