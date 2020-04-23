/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)


const mediaFields=`
  altText
  uri
`

const seoFields= `
  seo{
    title
    focuskw
    metaDesc
    metaKeywords
    opengraphImage
    opengraphTitle
  }
`





const query = `
  query {
    wpgraphql {
      pages(where:{status:PUBLISH}){
        nodes{
          title
          content
        }
      }

        posts(where:{status:PUBLISH}) {
            nodes {
              categories {
                nodes {
                  name
                  slug
                  termTaxonomyId
                }
              }
              content
              date
              status
              uri
              title
            }
          }
    }
  }
`

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(
    `
      ${query}
    `
  )

  if (!data.wpgraphql) return null

  data.wpgraphql.pages.nodes.forEach(page => {
    actions.createPage({
      path: `/${page.uri}`,
      component: path.resolve(`./src/components/templates/post.jsx`),
      context: {
        ...page,
        title: page.title,
      },
    })
  })
  data.wpgraphql.posts.nodes.forEach(post => {
    actions.createPage({
        path:  `/post/${post.uri}`,
        component: path.resolve(`./src/components/templates/post.jsx`),
        context:{
            ...post,
            id: post.id,
            slug: post.uri,
            title:post.title
        }
    })
  })
}


