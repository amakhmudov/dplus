// svgo.config.js
module.exports = {
  multipass: true,
  js2svg: {
    indent: 2,
    pretty: true,
  },
  plugins: [
  {
    name: 'preset-default',
    params: {
      overrides: {
        inlineStyles: {
          onlyMatchedOnce: false,
        },
        removeDoctype: false,
        removeViewBox: false,
      },
      removeDimensions: true,
    }
  },
  {
    name: 'removeAttrs',
    params: {
      attrs: ['data-name', 'svg:width', 'svg:height', 'stroke-width']
    }
  },
  {
    name: 'sortAttrs',
    params: {
      xmlnsOrder: 'alphabetical',
    },
  },
  {
    name: 'convertColors',
    params: {
      currentColor: true,
    },
  },
  ],
};
