module.exports = {
    stories: ['../src/stories/**/*.stories.(jsx|ts|tsx|mdx|)'],
    addons: [
        '@storybook/addon-actions',
        '@storybook/addon-links',
        '@storybook/addon-knobs',
        '@storybook/addon-viewport'
    ],
    presets: ['@storybook/addon-docs/react/preset']
};
