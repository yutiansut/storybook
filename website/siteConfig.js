const users = [
  {
    caption: 'User1',
    image: '/img/docusaurus.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];
const year = new Date().getFullYear();
const organizationName = 'Storybook Team';

const siteConfig = {
  title: 'Storybook',
  tagline: 'TODO: add a tagline',
  url: 'https://storybook.js.org',
  baseUrl: '/',
  projectName: 'Storybook',
  headerLinks: [
    { page: 'guides', label: 'Guides' },
    { page: 'docs', label: 'Docs' },
    { page: 'demo', label: 'Demo' },
  ],
  users,
  headerIcon: 'img/docusaurus.svg',
  footerIcon: 'img/docusaurus.svg',
  favicon: 'img/favicon.png',
  colors: {
    primaryColor: '#2E8555',
    secondaryColor: '#205C3B',
  },
  copyright: `Copyright © ${year} ${organizationName}`,
  organizationName,
  highlight: {
    theme: 'default',
  },
  scripts: [],
  repoUrl: 'https://github.com/storybooks/storybook',
};

module.exports = siteConfig;
