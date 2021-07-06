import React, { useEffect } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import cssValues from "../../../../cssValues.json";
import { Header } from "../../../organisms/header/header";
import {
  WrapperWithTitleBlock,
  WrapperWithTitleBlockSide,
} from "../../../organisms/wrapper/contentWrapper";
import IPhoneWrapper from "../../../organisms/wrapper/iphoneWrapper";
import serviceReminderVid from "../../../../assets/service-reminder.mp4";
import { ButtonBlkOnClick } from "../../../atoms/button/button";
import { FlipCardGroupThree } from "../../../organisms/cardGroup/cardGroup";
import { BannerImg } from "../../../atoms/image/image";
import information from "../../../../assets/information.svg";
import human from "../../../../assets/human.svg";
import stack from "../../../../assets/stack.svg";
import feedbackIcon from "../../../../assets/feedback.svg";
import react from "../../../../assets/react.png";
import mongodb from "../../../../assets/mongodb.png";
import nodejs from "../../../../assets/nodejs.png";
import twilio from "../../../../assets/twilio.png";
import amplify from "../../../../assets/aws-amplify.png";
import agile from "../../../../assets/agile.svg";
import analysis from "../../../../assets/analysis.svg";
import keyboard from "../../../../assets/keyboard.svg";
import version from "../../../../assets/version.png";

const Wrapper = styled.div`
  background-color: ${cssValues.colours.grey};
  min-height: 100vh;
`;

const background = [
  {
    front: {
      title: "Only Basic Information",
      subtitle: "collected from customers.",
    },
  },
  {
    front: {
      title: "Reminders",
      subtitle: "sent to customers' chosen social media platform.",
    },
  },
];

const techStack = [
  {
    front: {
      image: mongodb,
      title: "MongoDB",
    },
  },
  {
    front: {
      image: react,
      imgSm: true,
      title: "React.js",
    },
  },
  {
    front: {
      image: nodejs,
      title: "Node.js",
    },
  },
  {
    front: {
      image: twilio,
      title: "Twilio",
    },
  },
  {
    front: {
      image: amplify,
      title: "AWS Amplify",
    },
  },
  {
    front: {
      image: agile,
      imgSm: true,
      title: "Agile",
    },
  },
];

const role = [
  {
    front: {
      image: analysis,
      imgSm: true,
      title: "Requirement Analysis.",
    },
    back: {
      body: "Participate in both business and technical requirements and feasibility analysis, design plans of using external frameworks and packages.",
    },
  },
  {
    front: {
      image: keyboard,
      imgSm: true,
      title: "Full-stack Development.",
    },
    back: {
      body: "On top of the front-end developing skills I mastered from bp pulse, I set foot in back-end developing - building APIs and integrating with third party services.",
    },
  },
  {
    front: {
      image: version,
      imgSm: true,
      title: "Version Control.",
    },
    back: {
      body: "Regularly inspect versioning in repository, review pull requests and solve merge conflicts.",
    },
  },
];

const feedback = [
  {
    width: 3,
    front: {
      title: (
        <div>
          "I liked your attitude of fitting in to any kind of framework. Problem
          solving ability & team work are your strengths. You have delivered all
          work on time by learning new technologies so quickly."
        </div>
      ),
      subtitle: (
        <div align="right">
          - Manohar Ganti, Tech Lead of Castrol Service Reminder
        </div>
      ),
    },
  },
];

export const ServiceReminder = () => {
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
        title="Castrol Service Reminder"
        subtitle={
          <div>
            Reminds user to get their vehicles serviced.
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
              <IPhoneWrapper
                video={<source src={serviceReminderVid} type="video/mp4" />}
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
          subtitle="Another exciting web app project within the bp Garage."
          body={<FlipCardGroupThree cards={background} />}
        />

        {/* Tech Stack */}
        <WrapperWithTitleBlock
          theme={cssValues.colours.black}
          title={
            <div>
              <BannerImg src={stack} alt="Stack" />
              Tech Stack / Ways of Working.
            </div>
          }
          subtitle="Using the latest technology available in the industry."
          body={<FlipCardGroupThree cards={techStack} />}
        />

        {/* My Role */}
        <WrapperWithTitleBlock
          theme={cssValues.colours.black}
          title={
            <div>
              <BannerImg src={human} alt="Role" />
              My Role.
            </div>
          }
          subtitle="Lots of developing work here!"
          body={<FlipCardGroupThree cards={role} />}
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

export default ServiceReminder;
