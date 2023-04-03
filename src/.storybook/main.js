
module.exports = {
  stories: ['../src/app/components/**/*.stories.ts'],
  addons: [
    '@storybook/preset-scss',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/angular',
    test: /\.css$/,
    use: ['style-loader', {
      loader: 'css-loader',
      options: {
        modules: true,
      }
    }],
    include: path.resolve(__dirname, '../src'),
  core: {
    builder: '@storybook/builder-webpack5',
  },
  features: {
    interactionsDebugger: true,
  },
};
