import React, { useEffect } from "react";
import styled from "styled-components";
import cssValues from "../../../../cssValues.json";
import { Header } from "../../../organisms/header/header";
import {
  WrapperWithTitleBlock,
  WrapperWithTitleBlockCenter,
} from "../../../organisms/wrapper/contentWrapper";
import { ButtonBlkOnClick } from "../../../atoms/button/button";
import { FlipCardGroupThree } from "../../../organisms/cardGroup/cardGroup";
import { BannerImg } from "../../../atoms/image/image";
import information from "../../../../assets/information.svg";
import human from "../../../../assets/human.svg";
import stack from "../../../../assets/stack.svg";
import feedbackIcon from "../../../../assets/feedback.svg";
import adf from "../../../../assets/adf.png";
import powerbi from "../../../../assets/powerbi.png";
import analysis from "../../../../assets/analysis.svg";
import flow from "../../../../assets/flow.svg";

const Wrapper = styled.div`
  background-color: ${cssValues.colours.grey};
  min-height: 100vh;
`;

const background = [
  {
    front: {
      title: "View of bp Vessels",
      subtitle:
        "Provide a timely view of current vessels on water with bp cargo.",
    },
  },
  {
    front: {
      title: "Clearance Compliance",
      subtitle:
        "Make sure the vessels with bp cargos is cleared from port or vessel risks.",
    },
  },
  {
    front: {
      title: "Cargo Information",
      subtitle: "Provide cargo and vessel details.",
    },
  },
  {
    front: {
      title: "1000+",
      subtitle: "tables from 6 main live systems are linked together.",
    },
  },
];

const techStack = [
  {
    front: {
      image: adf,
      imgSm: true,
      title: "Azure Data Factory",
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
      image: analysis,
      imgSm: true,
      title: "Data Analysis and Modelling.",
    },
    back: {
      body: "Our technical team held discussions with other teams to analysis the live data, fetching useful data and draw the relationship between systems.",
    },
  },
  {
    front: {
      image: flow,
      imgSm: true,
      title: "Data Curation (Ongoing)",
    },
    back: {
      body: "With the useful data fetched from analysis, we will curate the data with ETL (Extract, Transform, Load) technique on Azure Data Factory and develop a PowerBI dashboard.",
    },
  },
];

const feedback = [
  {
    width: 3,
    front: {
      title: (
        <div>
          "You've shown outstanding motivation and efficiency in all tasks
          assigned to you."
        </div>
      ),
      subtitle: <div align="right">- Medhi Tantaoui, Data Scientist</div>,
    },
  },
];

export const EoW = () => {
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
        title="bp Energy on Water"
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
        // body={
        //   <div>
        //     <Fade bottom>
        //       <MacBookWrapper image={traderBonus} width="50%" centered />
        //     </Fade>
        //   </div>
        // }
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
          subtitle="My current project!"
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
          subtitle=""
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

export default EoW;
