import React, { useEffect } from "react";
import styled from "styled-components";
import cssValues from "../../../cssValues.json";
import { Header } from "../../organisms/header/header";
import {
  WrapperWithTitleBlockCenter,
  RoundWrapper,
  Grid,
} from "../../organisms/wrapper/contentWrapper";
import { FullWidthBannerDark } from "../../organisms/wrapper/banner";
import { BannerText } from "../../atoms/text/text";
import { InlineImg } from "../../atoms/image/image";
import { Bullet } from "../../molecules/bullet/bullet";
import human from "../../../assets/human.svg";
import responsibility from "../../../assets/responsibility.svg";
import value from "../../../assets/value.svg";
import rocket from "../../../assets/rocket.svg";
import skills from "../../../assets/skills.svg";
import growth from "../../../assets/growth.svg";
import network from "../../../assets/network.svg";
import remote from "../../../assets/remote.svg";
import ibmLogo from "../../../assets/ibmlogo.png";

const Wrapper = styled.div`
  background-color: ${cssValues.colours.grey};
  min-height: 100vh;
`;

const Link = styled.div`
  color: blue;
  display: inline-block;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const RoundUp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Wrapper>
      <Header
        theme={cssValues.colours.teal}
        textTheme={cssValues.colours.white}
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
            {/* <LinkButton text="Explore" theme={cssValues.colours.white} /> */}
          </div>
        }
        body={
          <RoundWrapper
            body={
              <Grid
                content={[
                  <Bullet
                    img={human}
                    title="T-Shaped Consultant"
                    subtitle="Completed the T-Shape by building skills in all 3 dimensions - Technical, Business & Design."
                  />,
                  <Bullet
                    img={responsibility}
                    title="Real Responsibility"
                    subtitle="Full support and trust from colleagues."
                  />,
                  <Bullet
                    img={value}
                    title="Deliver values for clients"
                    subtitle="I made contributions for clients in 4 major projects."
                  />,
                  <Bullet
                    img={rocket}
                    title="Support Innovation"
                    subtitle="Improved and automated workflow for client."
                  />,
                  <Bullet
                    img={skills}
                    title="Develop New Skills"
                    subtitle="Great platforms to build up skills and earn badges."
                  />,
                  <Bullet
                    img={growth}
                    title="Personal Growth"
                    subtitle={
                      <div>
                        Leverage what I learned from projects in{" "}
                        <Link
                          onClick={() => {
                            window.open("https://mahjong.gavvv.com");
                          }}
                        >
                          personal growth
                        </Link>
                        .
                      </div>
                    }
                  />,
                  <Bullet
                    img={network}
                    title="Network"
                    subtitle="I met lots of great mentors."
                  />,
                  <Bullet
                    img={remote}
                    title="Working in Remote"
                    subtitle="Things are more difficult in this way. :("
                  />,
                ]}
              />
            }
          />
        }
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

export default RoundUp;
