import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

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
    <div style={{ height: '50%' }}>
      <CarouselProvider
        // TODO: see if in mobile and set different width and height.
        naturalSlideWidth={960}
        naturalSlideHeight={540}
        totalSlides={features.filter((f) => f.youtubeEmbedCode).length}
      >
        <Slider>
          {features
            .filter((f) => f.youtubeEmbedCode)
            .map(({ description, featureTitle, youtubeEmbedCode }, index) => (
              <Slide index={index} className="ovc-slide" key={youtubeEmbedCode}>
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
              </Slide>
            ))}
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
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
