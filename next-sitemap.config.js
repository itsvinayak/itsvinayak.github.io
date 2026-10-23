/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:
    process.env.NEXT_PUBLIC_BASE_URL ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    'https://itsvinayak.github.io',
  autoLastmod: false,
  exclude: ['/blog/articles/Getting_Started_Clojure'],
  generateRobotsTxt: true,
};
