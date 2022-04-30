import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout/Layout';

const BlogWrapper = styled.div`
  padding: 80px 0;
`;

const BlogItem = styled.article`
  padding: 16px 0;
`;

function Blog({ data }) {
  const {
    allMdx: { nodes }
  } = data;

  return (
    <Layout>
      <BlogWrapper>
        {nodes.map((bName) => (
          <BlogItem key={bName.id}>
            <h3>
              <Link to={`/blog/${bName.slug}`}>{bName.frontmatter.title}</Link>
            </h3>
            <p>Published on: {bName.frontmatter.date}</p>
            <MDXRenderer>{bName.body}</MDXRenderer>
          </BlogItem>
        ))}
      </BlogWrapper>
    </Layout>
  );
}

export const query = graphql`
  {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
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
