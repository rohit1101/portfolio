import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout/Layout';

function Blog({ data }) {
  const {
    allFile: { nodes }
  } = data;

  return (
    <Layout>
      <h3>My blogs</h3>
      <ul>
        {nodes.map((bName) => (
          <li key={bName.id}>{bName.name}</li>
        ))}
      </ul>
    </Layout>
  );
}

export const query = graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      nodes {
        id
        name
      }
    }
  }
`;

export default Blog;
