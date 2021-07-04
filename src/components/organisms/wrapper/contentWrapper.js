import React from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";
import cssValues from "../../../cssValues.json";
import {
  SectionTitle,
  SectionSubtitle,
  SectionTitleCenter,
  SectionSubtitleCenter,
} from "../../atoms/text/text";
import { Padding1Rem, Padding3Rem } from "../../atoms/padding/padding";

const Wrapper = styled.div`
  max-width: ${cssValues.width.maxWidthDesktop};
  margin: 0 auto;
  padding: 5rem 0;
`;

const FullWidthWrapper = styled.div`
  background-color: ${(props) =>
    props.theme ? props.theme : cssValues.colours.grey};
`;

const FullWidthInnerWrapper = styled.div`
  max-width: ${cssValues.width.maxWidthDesktop};
  margin: 0 auto;
  padding: 5rem 0;
`;

const FullWidthInnerSideWrapper = styled(FullWidthInnerWrapper)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: ${cssValues.width.mobileLimit}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const RoundCornerWrapper = styled(Wrapper)`
  background-color: ${cssValues.colours.white};
  border-radius: 1.5rem;
  padding: 3rem;
`;

const TitleWrapper = styled.div`
  animation-name: fadeInLeft;
  animation-duration: 0.75s;
  animation-fill-mode: both;

  @keyframes fadeInLeft {
    0% {
      opacity: 0;
      transform: translateX(-10vw);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @media (max-width: ${cssValues.width.mobileLimit}) {
    margin: 0 5vw;
  }

  @media (max-width: ${cssValues.width.maxWidthDesktop}) {
    padding: 2vw;
  }
`;

const TitleSideWrapper = styled(TitleWrapper)`
  @media (min-width: ${cssValues.width.mobileLimit}) {
    position: relative;
    top: 25%;
  }
`;

export const WrapperWithTitleBlock = (props) => {
  const { id, theme, title, subtitle, body, backdropTheme } = props;
  return (
    <FullWidthWrapper theme={backdropTheme}>
      <Wrapper id={id}>
        <Fade effect="fadeInLeft">
          <TitleWrapper>
            <SectionTitle theme={theme}>{title && title}</SectionTitle>
            {subtitle && (
              <div>
                <Padding1Rem />
                <SectionSubtitle>{subtitle}</SectionSubtitle>
              </div>
            )}
            <Padding3Rem />
          </TitleWrapper>
        </Fade>
        {body}
      </Wrapper>
    </FullWidthWrapper>
  );
};

export const WrapperWithTitleBlockCenter = (props) => {
  const { id, theme, title, subtitle, body, backdropTheme } = props;
  return (
    <FullWidthWrapper id={id} theme={backdropTheme}>
      <FullWidthInnerWrapper>
        <Fade effect="fadeInLeft">
          <TitleWrapper>
            <SectionTitleCenter theme={theme}>
              {title && title}
            </SectionTitleCenter>
            {subtitle && (
              <div>
                <Padding1Rem />
                <SectionSubtitleCenter theme={theme}>
                  {subtitle}
                </SectionSubtitleCenter>
              </div>
            )}
            <Padding3Rem />
          </TitleWrapper>
        </Fade>
        {body}
      </FullWidthInnerWrapper>
    </FullWidthWrapper>
  );
};

export const WrapperWithTitleBlockSide = (props) => {
  const { id, theme, title, subtitle, body, backdropTheme } = props;
  return (
    <FullWidthWrapper id={id} theme={backdropTheme}>
      <FullWidthInnerSideWrapper>
        <Fade effect="fadeInLeft">
          <TitleSideWrapper>
            <SectionTitleCenter theme={theme}>
              {title && title}
            </SectionTitleCenter>
            {subtitle && (
              <div>
                <Padding1Rem />
                <SectionSubtitleCenter theme={theme}>
                  {subtitle}
                </SectionSubtitleCenter>
              </div>
            )}
            <Padding3Rem />
          </TitleSideWrapper>
        </Fade>
        {body}
      </FullWidthInnerSideWrapper>
    </FullWidthWrapper>
  );
};

export const WrapperBlockSide = (props) => {
  const { id, text, body, backdropTheme } = props;

  return (
    <FullWidthWrapper id={id} theme={backdropTheme}>
      <FullWidthInnerSideWrapper>
        <Fade effect="fadeInLeft">
          <SectionTitleCenter>{text}</SectionTitleCenter>
        </Fade>
        {body}
      </FullWidthInnerSideWrapper>
    </FullWidthWrapper>
  );
};

export const RoundWrapper = (props) => {
  const { id, body } = props;
  console.log(body);
  return (
    <Fade bottom>
      <RoundCornerWrapper id={id}>{body}</RoundCornerWrapper>
    </Fade>
  );
};
