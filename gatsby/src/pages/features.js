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
            {features.map(({ description, featureTitle, youtubeEmbedCode }) => (
              <div className="feature-wrapper">
                <span className="title feature-title">{featureTitle}</span>
                <span className="description feature-description">
                  {description}
                </span>
                <iframe
                  title={description}
                  width="640"
                  height="360"
                  src={youtubeEmbedCode}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
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
        youtubeEmbedCode
      }
    }
    versions: allSanityVersion {
      nodes {
        versionNumber
      }
    }
  }
`;
