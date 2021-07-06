import React, { useEffect } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import cssValues from "../../../../cssValues.json";
import { Header } from "../../../organisms/header/header";
import {
  WrapperWithTitleBlock,
  WrapperWithTitleBlockCenter,
} from "../../../organisms/wrapper/contentWrapper";
import MacBookWrapper from "../../../organisms/wrapper/macbookWrapper";
import bppulse from "../../../../assets/bppulse_page.mp4";
import { ButtonBlkOnClick } from "../../../atoms/button/button";
import { FlipCardGroupThree } from "../../../organisms/cardGroup/cardGroup";
import { BannerImg } from "../../../atoms/image/image";
import information from "../../../../assets/information.svg";
import human from "../../../../assets/human.svg";
import stack from "../../../../assets/stack.svg";
import feedbackIcon from "../../../../assets/feedback.svg";
import react from "../../../../assets/react.png";
import ga from "../../../../assets/ga.png";
import agile from "../../../../assets/agile.svg";
import keyboard from "../../../../assets/keyboard.svg";
import analytics from "../../../../assets/analytics.svg";

const Wrapper = styled.div`
  background-color: ${cssValues.colours.grey};
  min-height: 100vh;
`;

const background = [
  {
    front: {
      title: `bp's Carbon Neutral Aspiration.`,
    },
  },
  {
    front: {
      title: "£750k",
      subtitle:
        "brand launch consisting new websites and mobile apps for the UK and Germany market.",
    },
  },
  {
    front: {
      title: "27k+",
      subtitle: "monthly user visits achieved.",
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
    front: {
      image: ga,
      title: "Google Analytics",
    },
    back: {
      body: "From the Google Analytics training course, I designed user analytics plans and collected user behavioural data, helping bp to make data-driven decisions around customer acquisition.",
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

const role = [
  {
    front: {
      image: keyboard,
      imgSm: true,
      title: "Front-end Developer.",
    },
    back: {
      body: "Only basic HTML, CSS and JavaScript training was given at university, I learnt React.js from scratch!",
    },
  },
  {
    width: 2,
    front: {
      image: analytics,
      imgSm: true,
      title: "Analytics.",
    },
    back: {
      body: "From the Google Analytics training course, I designed user analytics plans and collected user behavioural data, helping bp to make data-driven decisions around customer acquisition.",
    },
  },
];

const feedback = [
  {
    width: 3,
    front: {
      title: (
        <div>
          "From the first day, he quickly caught up with the project's goals and
          deliverables - coding high-quality solutions we would expect from
          experienced developers, reviewing PRs and providing code reviews to
          fellow colleagues."
        </div>
      ),
      subtitle: (
        <div align="right">- Petras Slekys, Tech Lead of bp pulse Website</div>
      ),
    },
  },
  {
    width: 3,
    front: {
      title: (
        <div>
          "You aren't afraid to step up and take ownership of work, most notably
          in upskilling in Google Analytics to take ownership of all GA [Google
          Analytics] work across a multi-million £ project."
        </div>
      ),
      subtitle: (
        <div align="right">
          - Hannah Watson, BA and Scrum Master of bp pulse Website
        </div>
      ),
    },
  },
];

export const BpPulse = () => {
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
        title="bp pulse"
        subtitle={
          <div>
            Rebrand bp's latest electric charging service.
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
                  window.open("https://bppulse.co.uk");
                }}
              />
            </div>
          </div>
        }
        body={
          <div>
            <Fade bottom>
              <MacBookWrapper
                video={<source src={bppulse} type="video/mp4" />}
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
          subtitle="My first project since I joined IBM!"
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

export default BpPulse;
