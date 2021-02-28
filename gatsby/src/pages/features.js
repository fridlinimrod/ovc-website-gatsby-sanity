import React, { useEffect, useState } from 'react';
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
import isMobile from '../utils/isMobile';

const FeatureStyles = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  .feature-description {
    margin-bottom: 10px;
    font-size: ${({ mobile }) => (mobile ? '1.5rem' : '2rem')};
    align-self: ${({ mobile }) => (mobile ? 'flex-start' : 'unset')};
  }
  .title.feature-title {
    color: var(--ovc-purple);
    font-size: ${({ mobile }) => (mobile ? '2rem' : '4rem')};
    align-self: ${({ mobile }) => (mobile ? 'flex-start' : 'unset')};
  }
`;

const WrapperStyles = styled.div`
  height: ${({ mobile }) => (mobile ? '80vh' : '50%')};
  max-width: 90%;
  margin: auto;
  display: ${({ mobile }) => (mobile ? 'flex' : 'block')};
  flex-direction: ${({ mobile }) => (mobile ? 'column' : 'row')};
  justify-content: ${({ mobile }) => (mobile ? 'center' : 'unset')};
  h1 {
    text-align: center;
    text-decoration: underline;
  }
  .carousel {
    position: ${({ mobile }) => (mobile ? 'unset' : 'relative')};
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
      right: -5rem;
    }
    &.left {
      left: -5rem;
    }
  }
  .mobile .carousel-btn {
    position: absolute;
    width: 100%;
    height: auto;
    background-color: transparent;
    border: none;
    color: white;
    font-size: 4rem;
    right: unset;
    left: unset;
    z-index: 5;
    svg {
      transform: rotate(90deg);
    }
    &.left {
      top: 0;
    }
    &.right {
      bottom: 0;
    }
  }
`;

export default function FeaturesPage({
  data: {
    features: { nodes: features } = {},
    versions: { nodes: versions } = {},
  } = {},
}) {
  console.log({ features, versions });
  const [, setIsClient] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setMobile(() => isMobile());
  }, []);
  return (
    <WrapperStyles mobile={mobile}>
      <h1>Features</h1>
      <CarouselProvider
        naturalSlideWidth={mobile ? 360 : 640}
        naturalSlideHeight={mobile ? 540 : 360}
        orientation={mobile ? 'vertical' : 'horizontal'}
        totalSlides={features.filter((f) => f.youtubeEmbedCode).length}
        className={mobile ? 'mobile' : ''}
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
                <FeatureStyles mobile={mobile}>
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
