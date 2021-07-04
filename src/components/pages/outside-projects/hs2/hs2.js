import React, { useEffect } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import cssValues from "../../../../cssValues.json";
import { Header } from "../../../organisms/header/header";
import {
  WrapperWithTitleBlock,
  WrapperWithTitleBlockCenter,
  WrapperBlockSide,
} from "../../../organisms/wrapper/contentWrapper";
import { SideImg } from "../../../atoms/image/image";
import MacBookWrapper from "../../../organisms/wrapper/macbookWrapper";
import bppulse from "../../../../assets/bppulse_page.mp4";
import { BannerImg } from "../../../atoms/image/image";
import { FlipCardGroupThree } from "../../../organisms/cardGroup/cardGroup";
import { ButtonBlkOnClick } from "../../../atoms/button/button";
import information from "../../../../assets/information.svg";
import stack from "../../../../assets/stack.svg";
import react from "../../../../assets/react.png";
import ga from "../../../../assets/ga.png";
import agile from "../../../../assets/agile.svg";

const Wrapper = styled.div`
  background-color: ${cssValues.colours.grey};
  min-height: 100vh;
`;

const background = [
  {
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

const techStack = [
  {
    front: {
      image: react,
      imgSm: true,
      title: "React.js",
    },
  },
  {
    height: 30,
    width: 3,
    front: {
      body: <WrapperBlockSide text="AWS Deployment" body={<SideImg />} />,
    },
  },
  {
    front: {
      image: agile,
      imgSm: true,
      title: "Agile Methodologies",
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
      <WrapperWithTitleBlockCenter
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
              <MacBookWrapper
                // video={<source src={bppulse} type="video/mp4" />}
                width="50%"
                centered
              />
            </Fade>
          </div>
        }
      />

      <div id="content">
        {/* Project Background */}
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

        {/* Tech Stack */}
        <WrapperWithTitleBlock
          theme={cssValues.colours.black}
          title={
            <div>
              <BannerImg src={stack} alt="Stack" />
              Our journey.
            </div>
          }
          body={<FlipCardGroupThree cards={techStack} />}
        />
      </div>
    </Wrapper>
  );
};

export default Hs2;
