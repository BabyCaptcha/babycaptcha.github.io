/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro', // Make sure the id matches the markdown file name without the extension
    'installation',
    'getting-started',
    "text-base captcha configuration",
    {
      type: 'category',
      label: 'tutorial-basics',
      items: [
        'tutorial-basics/congratulations',
        'tutorial-basics/create-a-blog-post',
      ],
    }
  ],
};

export default sidebars;
