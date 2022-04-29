import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../components/Layout/Layout';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

function BlogPost({ data }) {
  console.log(data);
  return (
    <Layout>
      <h2>{data.mdx.frontmatter.title}</h2>
      <p>{data.mdx.frontmatter.date}</p>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  );
}

BlogPost.propTypes = {};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
      }
      slug
      body
    }
  }
`;

export default BlogPost;
