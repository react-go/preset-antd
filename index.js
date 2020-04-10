module.exports = (options) => {
  const theme = options && options.theme || {};
  return {
    webpack(config, { applyStyleLoaders, mode, sourcemap }) {
      const compileRule = config.module.rule('compile');
      applyStyleLoaders(
        compileRule.oneOf('compile:less:antd')
          .test(/\.less$/)
          .include.add(/node_modules\/antd/).end(),
        {
          isDevMode: mode === 'development',
          sourcemap,
          modules: false,
          usePostCSS: false,
        },
        [
          require.resolve('less-loader'),
          {
            modifyVars: theme, 
            javascriptEnabled: true,
            sourceMap: sourcemap,
          },
        ],
      );
    },
    babel: {
      plugins: [
        [
          require.resolve('babel-plugin-import'),
          {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: true,
          },
        ]
      ],
    },
  };
};
