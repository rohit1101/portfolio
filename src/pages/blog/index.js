import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import Layout from '../../components/Layout/Layout';


function Blog({ data }) {
  const {
    allMdx: { nodes }
  } = data;

  return (
    <Layout >
      <h3>My blogs</h3>
      <ul>
        {nodes.map((bName) => (
          <article key={bName.id}>
            <h3>
              <Link to={`/blog/${bName.slug}`}>{bName.frontmatter.title}</Link>
            </h3>
            <p>Published on: {bName.frontmatter.date}</p>
            <MDXRenderer>
              {bName.body}
            </MDXRenderer>
          </article>
        ))}
      </ul>
    </Layout>
  );
}

export const query = graphql`
  {
    allMdx(sort: {order: DESC, fields: frontmatter___date}) {
        nodes {
          id
          body
          slug
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            title
          }
        }
      }
  }
`;

export default Blog;
