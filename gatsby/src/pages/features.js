import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

const FeatureStyles = styled.div`
  display: flex;
  flex-direction: column;
  .feature-description {
    margin-bottom: 10px;
  }
`;
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
          <div className="version-features">
            {features.map(({ description, featureTitle, youtubeEmbedCode }) => (
              <FeatureStyles>
                <span className="title feature-title">{featureTitle}</span>
                <span className="feature-description">{description}</span>
                <iframe
                  title={description}
                  src={youtubeEmbedCode}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </FeatureStyles>
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
