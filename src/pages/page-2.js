import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({ data }) => (
  <Layout>
    {console.log(data)}
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    {data.wpgraphql.posts.nodes.map(post => (
      <div className="container">
        <h1>{post.title}</h1>
        <p>{post.slug}</p>
        <div>{post.content}</div>
      </div>
    ))}
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const query = graphql`
  query MyQuery {
    wpgraphql {
      posts {
        nodes {
          id
          title(format: RENDERED)
          excerpt(format: RENDERED)
          slug
          content(format: RENDERED)
        }
      }
      themes {
        nodes {
          author
        }
      }
    }
  }
`

export default SecondPage
