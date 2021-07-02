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
import traderBonus from "../../../../assets/trader-bonus.jpg";
import { ButtonBlkOnClick } from "../../../atoms/button/button";
import { FlipCardGroupThree } from "../../../organisms/cardGroup/cardGroup";
import { BannerImg } from "../../../atoms/image/image";
import information from "../../../../assets/information.svg";
import human from "../../../../assets/human.svg";
import stack from "../../../../assets/stack.svg";
import feedbackIcon from "../../../../assets/feedback.svg";
import dataiku from "../../../../assets/dataiku.png";
import powerapps from "../../../../assets/powerapps.png";
import powerbi from "../../../../assets/powerbi.png";
import keyboard from "../../../../assets/keyboard.svg";
import flow from "../../../../assets/flow.svg";

const Wrapper = styled.div`
  background-color: ${cssValues.colours.grey};
  min-height: 100vh;
`;

const background = [
  {
    front: {
      title: "12+ areas",
      subtitle:
        "of figures are collected from bp trading teams across the globe.",
    },
  },
  {
    front: {
      title: "ZERO",
      subtitle:
        "spreadsheet stored - 100% replaced the inconsistently formatted spreadsheets. Human error eliminated.",
    },
  },
  {
    front: {
      title: "Traceable Log",
      subtitle: "knowing when and how the figures are updated.",
    },
  },
];

const techStack = [
  {
    front: {
      image: dataiku,
      title: "Dataiku",
    },
  },
  {
    front: {
      image: powerapps,
      imgSm: true,
      title: "Microsoft Power Apps",
    },
  },
  {
    front: {
      image: powerbi,
      imgSm: true,
      title: "Microsoft PowerBI",
    },
  },
];

const role = [
  {
    width: 2,
    front: {
      image: keyboard,
      imgSm: true,
      title: "PowerApps Developer.",
    },
    back: {
      body: "I designed and developed a centralised system to collect figures from bp global trading teams, where each team has their tailor-made pages. All done by myself!",
    },
  },
  {
    front: {
      image: flow,
      imgSm: true,
      title: "Automation Flow.",
    },
    back: {
      body: "Analyse the original inconsistently formatted spreadsheets, curate the data to produce useful datasets and reports.",
    },
  },
];

const feedback = [
  {
    width: 3,
    front: {
      title: <div>""</div>,
      subtitle: <div align="right">- Jakub Janowiak, Data Scientist</div>,
    },
  },
];

export const TraderBonus = () => {
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
        title="bp Trader Bonus"
        subtitle={
          <div>
            Automate the calculation of bp traders' annual bonuses.
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
              <MacBookWrapper image={traderBonus} width="50%" centered />
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
          subtitle="Whole new area to me!"
          body={<FlipCardGroupThree cards={background} />}
        />

        {/* Tech Stack */}
        <WrapperWithTitleBlock
          theme={cssValues.colours.black}
          title={
            <div>
              <BannerImg src={stack} alt="Stack" />
              Tech Stack / Ways to Work.
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

export default TraderBonus;
