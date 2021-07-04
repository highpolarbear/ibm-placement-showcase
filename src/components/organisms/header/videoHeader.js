import React from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";
import cssValues from "../../../cssValues.json";
import backgroundVid from "../../../assets/timelapse3.mp4";
import {
  SectionTitleLg,
  SectionSubtitleLg,
  UnderlineText,
} from "../../atoms/text/text";
import logo from "../../../assets/logo.png";
import { LogoImg } from "../../atoms/image/image";
import { Link } from "react-router-dom";
import { Padding3Rem } from "../../atoms/padding/padding";
import { ButtonNoRadius, LinkButtonNoArrow } from "../../atoms/button/button";

const Wrapper = styled.div`
  min-height: 110vh;
`;

const VideoWrapper = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
  filter: blur(0.5rem);
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000000;
  mix-blend-mode: normal;
  opacity: 0.6;
  z-index: 1;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  max-width: ${cssValues.width.maxWidthDesktop};
  margin: 0 auto;
  @media (max-width: ${cssValues.width.mobileLimit}) {
    margin: 0 5vw;
  }
`;

const MenuWrapper = styled.div`
  padding: 3rem 0;
`;

const TextWrapper = styled.div`
  max-width: 75%;
  color: ${cssValues.colours.white};
  @media (max-width: ${cssValues.width.mobileLimit}) {
    max-width: 100%;
  }
`;

const SubtitleWrapper = styled.div`
  animation-name: fadeInBottom;
  animation-duration: 1s;
  animation-delay: 0.5s;
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
`;

const BtnWrapper = styled.div`
  animation-name: fadeInBottom;
  animation-duration: 1s;
  animation-delay: 1s;
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
`;

const MenuGroup = styled.div`
  display: none;
  float: right;
  @media (min-width: ${cssValues.width.mobileLimit}) {
    display: flex;
    margin: 0 1rem;
  }
`;

const MenuItem = styled.div`
  display: inline-block;
  position: relative;
  margin: auto;
  padding: 0 2rem;
  transform: translate(0, 50%);
`;

export const VideoHeader = () => {
  return (
    <Wrapper>
      <Overlay />
      <VideoWrapper muted loop autoPlay>
        <source src={backgroundVid} type="video/mp4" />
      </VideoWrapper>
      <ContentWrapper>
        <MenuWrapper>
          <Link to="/">
            <LogoImg src={logo} alt="logo" />
          </Link>
          <MenuGroup>
            <MenuItem>
              <LinkButtonNoArrow
                theme={cssValues.colours.white}
                text="Projects"
                onClick={() => {
                  document.getElementById("projects").scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              />
            </MenuItem>
            <MenuItem>
              <LinkButtonNoArrow
                theme={cssValues.colours.white}
                text="Outside Projects"
                onClick={() => {
                  document.getElementById("outside-projects").scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              />
            </MenuItem>
            <MenuItem>
              <Link to="/roundup" style={{ textDecoration: "none" }}>
                <LinkButtonNoArrow
                  theme={cssValues.colours.white}
                  text="Round-up"
                />
              </Link>
            </MenuItem>
          </MenuGroup>
        </MenuWrapper>
        <TextWrapper>
          <Fade bottom>
            <SectionTitleLg>My 12-month adventure at IBM.</SectionTitleLg>
          </Fade>
          <Padding3Rem />
          <fade effect="fadeInBottom">
            <SubtitleWrapper>
              <SectionSubtitleLg>
                It is <UnderlineText>way beyond</UnderlineText> what I have
                expected.
              </SectionSubtitleLg>
            </SubtitleWrapper>
          </fade>
          <Padding3Rem />
          <fade effect="fadeInBottom">
            <BtnWrapper>
              <ButtonNoRadius
                text="Start Journey"
                onClick={() => {
                  document.getElementById("projects").scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              />
            </BtnWrapper>
          </fade>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};
