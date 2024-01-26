const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');

const redirects = require('./redirects.json');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage, createRedirect } = actions;

  const { data } = await graphql(`
    query {
      allNotion {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  `);
  data.allNotion.edges.forEach(({ node }) => {
    const { id, title } = node;
    if (title && title.toUpperCase().startsWith('/POST')) {
      createPage({
        path: title,
        component: require.resolve(`./src/pages/post.tsx`),
        context: { id, slug: `${title}` },
      });
    }
  });

  redirects.forEach(r => {
    createRedirect({
      fromPath: r.from,
      toPath: r.to,
    });
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    plugins: [
      new FilterWarningsPlugin({
        exclude: /mini-css-extract-plugin[^]*Conflicting order. Following module has been added:/,
      }),
    ],
  });
};
