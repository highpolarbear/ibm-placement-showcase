import React from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";
import {
  PreTitleText,
  TitleText,
  SubtitleText,
  BodyText,
  CardBodyText,
} from "../../atoms/text/text";
import { Button, PlusBtn, CrossBtn } from "../../atoms/button/button";
import {
  Padding1Rem,
  Padding3Rem,
  Padding5Rem,
} from "../../atoms/padding/padding";
import cssValues from "../../../cssValues.json";

const CardWrapper = styled.div`
  height: calc(100% - 6rem);
  width: calc(100% - 6rem);
  background-color: ${cssValues.colours.white};
  padding: 3rem;
  border-radius: 1.5rem;
  display: inline-block;
  position: relative;
  animation-name: fadeInBottom;
  animation-duration: 1s;
  animation-delay: 0.5s;
  &:nth-child(n + 3) {
    animation-delay: 0.75s;
  }
  animation-fill-mode: both;
  @keyframes fadeInBottom {
    0% {
      opacity: 0;
      transform: translateY(10vw);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @media (max-width: ${cssValues.width.mobileLimit}) {
    width: calc(100% - 6rem - 10vw);
    margin: 0 5vw;
  }
`;

const Image = styled.img`
  max-height: ${(props) => (props.imgSm ? "20vh" : "15vh")};
  max-width: ${(props) => (props.imgSm ? "5vw" : "10rem")};
  position: relative;
  user-select: none;
  backface-visibility: hidden;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 3rem;
  backface-visibility: hidden;
`;

const LowerRightButtonWrapper = styled.div`
  position: absolute;
  bottom: 3rem;
  right: 3rem;
  backface-visibility: hidden;
`;

const TextWrapper = styled.div`
  max-width: ${(props) => (props.width > 1 ? "" : "75%")};
  @media (max-width: ${cssValues.width.mobileLimit}) {
    max-width: 100%;
  }
`;

const FlipCardOuterWrapper = styled.div`
  grid-column: span ${(props) => (props.width ? props.width : "1")};
`;

const FlipCardWrapper = styled.div`
  height: calc(
    40vh ${(props) => (props.height ? "+ " + props.height + "vh" : "")}
  );
  width: calc(100% - 6rem);
  background-color: ${cssValues.colours.white};
  padding: 3rem;
  border-radius: 1.5rem;
  display: inline-block;
  position: relative;
  @media (max-width: ${cssValues.width.mobileLimit}) {
    width: calc(100% - 6rem - 10vw);
    margin: 0 5vw;
  }
  transform-style: preserve-3d;
  transition: transform 0.8s ease-in-out;
  ${(props) =>
    props.index === props.activeIndex
      ? `
      transform: rotateY(180deg);
    `
      : "transform: none"};
`;

const FrontWrapper = styled.div`
  backface-visibility: hidden;
`;

const BackWrapper = styled.div`
  position: absolute;
  width: calc(100% - 4rem);
  height: calc(100% - 5rem);
  top: 3rem;
  right: 3rem;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  background-color: ${cssValues.colours.white};
  z-index: 100;
`;

export const Card = (props) => {
  const { theme, preTitle, title, subtitle, body, image, link, height } = props;
  return (
    <Fade effect="">
      <CardWrapper height={height}>
        {image && <Image src={image} alt={title} />}
        <Padding3Rem />
        <TextWrapper>
          {preTitle && (
            <PreTitleText theme={theme && theme}>{preTitle}</PreTitleText>
          )}
          {title && <TitleText>{title}</TitleText>}
          <Padding1Rem />
          {subtitle && <SubtitleText>{subtitle}</SubtitleText>}
          <Padding1Rem />
          {body && <BodyText>{body}</BodyText>}
          <Padding5Rem />
        </TextWrapper>
        <ButtonWrapper>
          <Button
            theme={theme && theme}
            text="Learn more"
            link={link && link}
          />
        </ButtonWrapper>
      </CardWrapper>
    </Fade>
  );
};

export const FlipCard = (props) => {
  const {
    width,
    front,
    back,
    theme,
    height,
    index,
    activeIndex,
    setActiveIndex,
  } = props;
  return (
    <FlipCardOuterWrapper width={width}>
      <Fade>
        <FlipCardWrapper
          height={height}
          index={index}
          activeIndex={activeIndex}
        >
          <FrontWrapper>
            {front.image && (
              <Image
                src={front.image}
                imgSm={front.imgSm}
                alt={front.title && front.title}
              />
            )}
            <Padding3Rem />
            <TextWrapper width={width}>
              {front.preTitle && (
                <PreTitleText theme={theme && theme}>
                  {front.preTitle}
                </PreTitleText>
              )}
              {front.title && <TitleText>{front.title}</TitleText>}
              <Padding1Rem />
              {front.subtitle && <SubtitleText>{front.subtitle}</SubtitleText>}
              <Padding1Rem />
              {front.body && <BodyText>{front.body}</BodyText>}
              <Padding5Rem />
            </TextWrapper>
            {back && (
              <LowerRightButtonWrapper>
                <PlusBtn
                  onClick={() => {
                    setActiveIndex(index);
                  }}
                  theme={cssValues.colours.black}
                  index={index}
                  activeIndex={activeIndex}
                />
              </LowerRightButtonWrapper>
            )}
          </FrontWrapper>

          {back && (
            <BackWrapper>
              <TextWrapper>
                {back.preTitle && (
                  <PreTitleText theme={theme && theme}>
                    {back.preTitle}
                  </PreTitleText>
                )}
                {back.title && <TitleText>{back.title}</TitleText>}
                <Padding1Rem />
                {back.subtitle && <SubtitleText>{back.subtitle}</SubtitleText>}
                <Padding1Rem />
                {back.body && <CardBodyText>{back.body}</CardBodyText>}
                <Padding5Rem />
              </TextWrapper>
              <CrossBtn
                onClick={() => {
                  setActiveIndex(-1);
                }}
                theme={cssValues.colours.black}
              />
            </BackWrapper>
          )}
        </FlipCardWrapper>
      </Fade>
    </FlipCardOuterWrapper>
  );
};
