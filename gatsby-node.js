exports.createPages = async ({ actions, graphql }) => {
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
  `)
  data.allNotion.edges.forEach(({ node }) => {
    const { id, title } = node
    actions.createPage({
      path: title,
      component: require.resolve(`./src/pages/post.tsx`),
      context: { id, slug: title },
    })
  })
}

const FilterWarningsPlugin = require('webpack-filter-warnings-plugin')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    plugins: [
      new FilterWarningsPlugin({
        exclude: /mini-css-extract-plugin[^]*Conflicting order. Following module has been added:/,
      }),
    ],
  })
}
