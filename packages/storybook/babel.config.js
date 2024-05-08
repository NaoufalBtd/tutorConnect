const path = require('path');
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@custom-ui/themed': path.join(
              __dirname,
              '../../packages/ui/src'
            ),
            '@custom-ui/config': path.join(
              __dirname,
              '../../packages/ui/src/config/gluestack-ui.config'
            ),
          },
        },
      ],
      '@babel/plugin-transform-modules-commonjs',
    ],
  };
};
