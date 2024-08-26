/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro', // Make sure the id matches the markdown file name without the extension
    'installation',
    'getting-started',
    "text-base captcha configuration",
    {
      type: 'category',
      label: 'redis cache configuration',
      items: [
        'redis cache configuration/Redis',
        'redis cache configuration/In Memory-a-blog-post',
      ],
    }
  ],
};

export default sidebars;
