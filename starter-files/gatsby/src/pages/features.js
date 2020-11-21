import React from 'react';
import { graphql } from 'gatsby';

export default function featuresPage({
  data: {
    features: { nodes: features },
    versions: { nodes: versions },
  },
}) {
  console.log({ features, versions });
  return (
    <div>
      {versions.map(({ versionNumber }) => (
        <>
          <div className="version-wrapper">{versionNumber}</div>
          <div className="version-features">
            {features.map(({ description, featureTitle }) => (
              <div className="feature-wrapper">
                <span className="title feature-title">{featureTitle}</span>
                <span className="description feature-description">
                  {description}
                </span>
              </div>
            ))}
          </div>
        </>
      ))}
    </div>
  );
}

export const query = graphql`
  query featuresQuery {
    features: allSanityFeature {
      nodes {
        description
        featureTitle
        Version
      }
    }
    versions: allSanityVersion {
      nodes {
        versionNumber
      }
    }
  }
`;
