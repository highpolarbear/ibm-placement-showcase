import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import cssValues from "../../../cssValues.json";
import logo from "../../../assets/logo.png";
import { LogoImg } from "../../atoms/image/image";
import { Link } from "react-router-dom";
import { LinkButtonNoArrow } from "../../atoms/button/button";

const Wrapper = styled.div``;

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
  padding-top: 3rem;
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

export const Header = () => {
  const history = useHistory();
  const [isProject, setIsProject] = useState(false);
  const [isOtherProj, setIsOtherProj] = useState(false);
  const [isReflection, setIsReflection] = useState(false);
  useEffect(() => {
    const path = window.location.pathname.split("/")[1];
    switch (path) {
      case "projects":
        setIsProject(true);
        setIsOtherProj(false);
        setIsReflection(false);
        break;
      case "other":
        setIsProject(false);
        setIsOtherProj(true);
        setIsReflection(false);
        break;
      case "reflection":
        setIsProject(false);
        setIsOtherProj(false);
        setIsReflection(true);
        break;
      default:
        setIsProject(false);
        setIsOtherProj(false);
        setIsReflection(false);
    }
  }, []);

  return (
    <Wrapper>
      <ContentWrapper>
        <MenuWrapper>
          <Link to="/">
            <LogoImg src={logo} alt="logo" />
          </Link>
          <MenuGroup>
            <MenuItem>
              <LinkButtonNoArrow
                theme={cssValues.colours.black}
                text="Projects"
                onClick={() => {
                  const elem = document.getElementById("projects");
                  elem
                    ? elem.scrollIntoView({
                        behavior: "smooth",
                      })
                    : history.push("/#projects");
                }}
                active={isProject}
              />
            </MenuItem>
            <MenuItem>
              <LinkButtonNoArrow
                theme={cssValues.colours.black}
                text="Outside Projects"
                onClick={() => {
                  const elem = document.getElementById("projects");
                  elem
                    ? elem.scrollIntoView({
                        behavior: "smooth",
                      })
                    : history.push("/#projects");
                }}
                active={isOtherProj}
              />
            </MenuItem>
            <MenuItem>
              <LinkButtonNoArrow
                theme={cssValues.colours.black}
                text="Reflection"
                onClick={() => {
                  const elem = document.getElementById("reflection");
                  elem
                    ? elem.scrollIntoView({
                        behavior: "smooth",
                      })
                    : history.push("/#reflection");
                }}
                active={isReflection}
              />
            </MenuItem>
          </MenuGroup>
        </MenuWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};
