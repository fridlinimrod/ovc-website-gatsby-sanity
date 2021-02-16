import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
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
  .title.feature-title {
    color: var(--ovc-purple);
  }
`;

const WrapperStyles = styled.div`
  height: 50%;
  max-width: 90%;
  margin: auto;
  .carousel {
    position: relative;
  }
  .carousel-btn {
    position: absolute;
    height: 100%;
    background-color: transparent;
    border: none;
    color: white;
    font-size: 6rem;
    &:focus {
      outline: none;
    }
    &.right {
      right: -90px;
    }
    &.left {
      left: -90px;
    }
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
    <WrapperStyles>
      <CarouselProvider
        // TODO: see if in mobile and set different width and height.
        naturalSlideWidth={640}
        naturalSlideHeight={360}
        totalSlides={features.filter((f) => f.youtubeEmbedCode).length}
      >
        <ButtonBack className="carousel-btn left">
          <FaChevronLeft />
        </ButtonBack>
        <ButtonNext className="carousel-btn right">
          <FaChevronRight />
        </ButtonNext>
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
      </CarouselProvider>
    </WrapperStyles>
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
