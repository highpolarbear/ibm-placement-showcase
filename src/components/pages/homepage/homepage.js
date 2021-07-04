import React from "react";
import styled from "styled-components";
import {
  WrapperWithTitleBlock,
  WrapperWithTitleBlockCenter,
  RoundWrapper,
} from "../../organisms/wrapper/contentWrapper";
import { VideoHeader } from "../../organisms/header/videoHeader";
import { CardGroup } from "../../organisms/cardGroup/cardGroup";
import { BannerText } from "../../atoms/text/text";
import { InlineImg } from "../../atoms/image/image";
import cssValues from "../../../cssValues.json";
import bpPulseLogo from "../../../assets/bppulse.png";
import castrolLogo from "../../../assets/castrol.png";
import bpLogo from "../../../assets/bplogo.png";
import hs2Logo from "../../../assets/hs2.png";
import reLogo from "../../../assets/remote-engagement.png";
import ibmLogo from "../../../assets/ibmlogo.png";
import { FullWidthBannerDark } from "../../organisms/wrapper/banner";
import { LinkButton } from "../../atoms/button/button";

const projectCards = [
  {
    image: bpPulseLogo,
    preTitle: "Web App",
    title: "bp pulse",
    subtitle: "Aug 2020 - Nov 2020",
    body: "Rebrand bp's latest electric charging service.",
    link: "/projects/bp-pulse",
  },
  {
    image: castrolLogo,
    preTitle: "Web App",
    title: "Castrol Service Reminder",
    subtitle: "Dec 2020 - Mar 2021",
    body: "A web app to remind customers to get their vehicles serviced.",
    link: "/projects/castrol-service-reminder",
  },
  {
    image: bpLogo,
    preTitle: "Data & Process Automation",
    title: "bp Trader Bonus Calculation",
    subtitle: "Mar, May 2021",
    body: "Automate the calculation of bp traders' annual bonuses.",
    link: "/projects/trader-bonus",
  },
  {
    image: bpLogo,
    preTitle: "Data & Artificial Intelligence",
    title: "bp Energy on Water",
    subtitle: "Apr 2021, May 2021 - Jul 2021",
    body: "Provide a timely view of current vessels on water with bp cargo.",
    link: "/projects/eow",
  },
];

const outsideProjectCards = [
  {
    image: hs2Logo,
    preTitle: "Hackathon",
    title: "IBM x HS2 Unite Challenge",
    subtitle: "Mar 2021",
    body: "Improves how HS2 recruits professionals.",
    link: "/outside-projects/hs2-hackathon",
  },
  {
    image: reLogo,
    imgSm: true,
    preTitle: "Web App",
    title: "Remote Team Engagement",
    subtitle: "Jan - Jun 2021",
    body: "Great way to start virtual meetings during the pandemic.",
    link: "/outside-projects/remote-engagement",
  },
];

const Wrapper = styled.div`
  background-color: ${cssValues.colours.grey};
  min-height: 100vh;
`;

export const Homepage = () => {
  return (
    <Wrapper>
      <VideoHeader />
      <WrapperWithTitleBlock
        theme={cssValues.colours.azure}
        title="My Project Summary."
        body={
          <CardGroup theme={cssValues.colours.azure} cards={projectCards} />
        }
        id="projects"
      />

      <WrapperWithTitleBlock
        theme={cssValues.colours.purple}
        // backdropTheme={cssValues.colours.white}
        title="Outside Projects."
        body={
          <CardGroup
            theme={cssValues.colours.purple}
            cards={outsideProjectCards}
          />
        }
        id="outside-projects"
      />

      <WrapperWithTitleBlockCenter
        theme={cssValues.colours.white}
        backdropTheme={cssValues.colours.teal}
        title="End of Placement Round-up."
        subtitle={
          <div>
            <div>
              Reflection is scary, yet the most powerful tool for success.
            </div>
            <LinkButton text="Explore" theme={cssValues.colours.white} />
          </div>
        }
        body={<RoundWrapper body={<div>123</div>} />}
        id="reflection"
      />

      <FullWidthBannerDark
        body={
          <BannerText theme={cssValues.colours.white}>
            Thank you, <InlineImg src={ibmLogo} alt="IBM Logo" />.
          </BannerText>
        }
      />
    </Wrapper>
  );
};

export default Homepage;
