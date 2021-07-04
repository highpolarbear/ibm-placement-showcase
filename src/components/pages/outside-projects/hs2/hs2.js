import React, { useEffect } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import cssValues from "../../../../cssValues.json";
import { Header } from "../../../organisms/header/header";
import {
  WrapperWithTitleBlock,
  WrapperWithTitleBlockSide,
  WrapperBlockSideLeft,
} from "../../../organisms/wrapper/contentWrapper";
import { SideImg, BannerImg, DisplayImg } from "../../../atoms/image/image";
import { FlipCardGroupThree } from "../../../organisms/cardGroup/cardGroup";
import { ButtonBlkOnClick } from "../../../atoms/button/button";
import information from "../../../../assets/information.svg";
import journeyIcon from "../../../../assets/journey.svg";
import team from "../../../../assets/hs2-team.png";
import cv from "../../../../assets/cv.png";
import file from "../../../../assets/file.png";
import call from "../../../../assets/call.png";
import edt from "../../../../assets/hs2-edt.png";
import site from "../../../../assets/hs2-site-visit.png";

const Wrapper = styled.div`
  background-color: ${cssValues.colours.grey};
  min-height: 100vh;
`;

const background = [
  {
    width: 2,
    front: {
      title: `Innovative Solution.`,
      subtitle: `Design an innovative way to improve the diversity & equality of HS2’s recruitment process.`,
    },
  },
  {
    front: {
      title: "3 Days",
      subtitle: "We only had 3 days to make this happen.",
    },
  },
];

const journey = [
  {
    height: 30,
    width: 3,
    front: {
      body: (
        <WrapperBlockSideLeft
          text="Enterprise Design Thinking"
          body={<SideImg src={edt} />}
        />
      ),
    },
  },
  {
    front: {
      image: file,
      imgSm: true,
      title: "Job ads",
    },
  },
  {
    front: {
      image: cv,
      imgSm: true,
      title: "CV Screening",
    },
  },
  {
    front: {
      image: call,
      imgSm: true,
      title: "Interviews",
    },
  },
  {
    height: 30,
    width: 3,
    front: {
      body: (
        <WrapperBlockSideLeft
          text="Winner's Prize: Tunnel Boring Machine Site Visit"
          body={<SideImg src={site} />}
        />
      ),
    },
  },
];

export const Hs2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Wrapper>
      <Header />

      {/* Header Block */}
      <WrapperWithTitleBlockSide
        theme={cssValues.colours.black}
        backdropTheme={cssValues.colours.grey}
        title="IBM x HS2 Unite Challenge"
        subtitle={
          <div>
            Improves how HS2 recruits professionals.
            <div align="center">
              <ButtonBlkOnClick
                text="Explore"
                theme={cssValues.colours.black}
                onClick={() => {
                  const elem = document.getElementById("content");
                  elem.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              />
            </div>
          </div>
        }
        body={
          <div>
            <Fade bottom>
              <DisplayImg src={team} />
            </Fade>
          </div>
        }
      />

      <div id="content">
        {/* Event Details */}
        <WrapperWithTitleBlock
          theme={cssValues.colours.black}
          title={
            <div>
              <BannerImg src={information} alt="Information" />
              Event Details.
            </div>
          }
          body={<FlipCardGroupThree cards={background} />}
        />

        {/* Journey */}
        <WrapperWithTitleBlock
          theme={cssValues.colours.black}
          title={
            <div>
              <BannerImg src={journeyIcon} alt="Stack" />
              Our journey.
            </div>
          }
          body={<FlipCardGroupThree cards={journey} />}
        />
      </div>
    </Wrapper>
  );
};

export default Hs2;
