import React, { useEffect } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import cssValues from "../../../../cssValues.json";
import { Header } from "../../../organisms/header/header";
import {
  WrapperWithTitleBlock,
  WrapperWithTitleBlockCenter,
  WrapperBlockSideLeft,
} from "../../../organisms/wrapper/contentWrapper";
import { SideImg } from "../../../atoms/image/image";
import MacBookWrapper from "../../../organisms/wrapper/macbookWrapper";
import reVid from "../../../../assets/remote-engagement_page.mp4";
import { BannerImg } from "../../../atoms/image/image";
import { FlipCardGroupThree } from "../../../organisms/cardGroup/cardGroup";
import { ButtonBlkOnClick } from "../../../atoms/button/button";
import information from "../../../../assets/information.svg";
import stack from "../../../../assets/stack.svg";
import feedbackIcon from "../../../../assets/feedback.svg";
import ga from "../../../../assets/ga.png";
import ec2 from "../../../../assets/aws-ec2.png";
import mern from "../../../../assets/mern.png";

const Wrapper = styled.div`
  background-color: ${cssValues.colours.grey};
  min-height: 100vh;
`;

const background = [
  {
    front: {
      title: `Meeting Starter`,
    },
  },
  {
    width: 2,
    front: {
      title: "Small Squad",
      subtitle: "Just 2 Service Designers and me.",
    },
    back: {
      body: "I am the only technical consultant in this project, responsible to analysis the technical feasibility and taking care of the front-end, back-end development, as well as deployment!",
    },
  },
];

const techStack = [
  {
    width: 2,
    front: {
      image: mern,
      title: "MERN Stack",
    },
  },
  {
    front: {
      image: ga,
      title: "Google Analytics",
    },
  },
  {
    height: 30,
    width: 3,
    front: {
      body: (
        <WrapperBlockSideLeft
          text="AWS Deployment"
          body={<SideImg src={ec2} />}
        />
      ),
    },
  },
];

const feedback = [
  {
    height: 10,
    width: 3,
    front: {
      title: (
        <div>
          "He has been quick in responding to change, adopted a pro-active
          approach to work and brought new ideas to the table. We relied on Gav
          as the front + back-end SME for the remote engagement project and he
          has far exceeded our expectations."
        </div>
      ),
      subtitle: <div align="right">- Sophie Blank, Service Designer</div>,
    },
  },
];

export const RemoteEngagement = () => {
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
        title="Remote Team Engagement"
        subtitle={
          <div>
            Great way to start virtual meetings during the pandemic.
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
              <ButtonBlkOnClick
                text="Visit"
                theme={cssValues.colours.black}
                onClick={() => {
                  window.open("https://remoteengagement.co.uk");
                }}
              />
            </div>
          </div>
        }
        body={
          <div>
            <Fade bottom>
              <MacBookWrapper
                video={<source src={reVid} type="video/mp4" />}
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
              Project Details.
            </div>
          }
          subtitle="My giveback project."
          body={<FlipCardGroupThree cards={background} />}
        />

        {/* Tech Stack */}
        <WrapperWithTitleBlock
          theme={cssValues.colours.black}
          title={
            <div>
              <BannerImg src={stack} alt="Stack" />
              Tech Stack
            </div>
          }
          body={<FlipCardGroupThree cards={techStack} />}
        />

        {/* Feedback */}
        <WrapperWithTitleBlock
          theme={cssValues.colours.black}
          title={
            <div>
              <BannerImg src={feedbackIcon} alt="Feedback" />
              Feedback.
            </div>
          }
          subtitle="See what my team thought."
          body={<FlipCardGroupThree cards={feedback} />}
        />
      </div>
    </Wrapper>
  );
};

export default RemoteEngagement;
