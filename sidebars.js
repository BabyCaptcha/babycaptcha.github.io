/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro', // Make sure the id matches the markdown file name without the extension
    'installation',
    'getting-started',
    "text-base captcha configuration",
    {
      type: 'category',
      label: 'tutorial-basic',
      items: [
        'tutorial-basic/Redis',
        'tutorial-basic/In Memory',
      ],
    }
  ],
};

export default sidebars;
