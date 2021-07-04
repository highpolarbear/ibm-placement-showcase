import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import cssValues from "../../../cssValues.json";
import logo from "../../../assets/logo.png";
import { LogoImg } from "../../atoms/image/image";
import { Link } from "react-router-dom";
import { LinkButtonNoArrow } from "../../atoms/button/button";

const Wrapper = styled.div`
  background-color: ${(props) =>
    props.theme ? props.theme : cssValues.colours.white};
`;

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

export const Header = (props) => {
  const { theme, textTheme } = props;
  const history = useHistory();
  const [path, setPath] = useState(null);
  useEffect(() => {
    const pathname = window.location.pathname.split("/")[1];
    setPath(pathname);
  }, []);

  return (
    <Wrapper theme={theme}>
      <ContentWrapper>
        <MenuWrapper>
          <Link to="/">
            <LogoImg src={logo} alt="logo" />
          </Link>
          <MenuGroup>
            <MenuItem>
              <LinkButtonNoArrow
                theme={textTheme ? textTheme : cssValues.colours.black}
                text="Projects"
                onClick={() => {
                  const elem = document.getElementById("projects");
                  elem
                    ? elem.scrollIntoView({
                        behavior: "smooth",
                      })
                    : history.push("/#projects");
                }}
                active={path === "projects"}
              />
            </MenuItem>
            <MenuItem>
              <LinkButtonNoArrow
                theme={textTheme ? textTheme : cssValues.colours.black}
                text="Outside Projects"
                onClick={() => {
                  const elem = document.getElementById("outside-projects");
                  elem
                    ? elem.scrollIntoView({
                        behavior: "smooth",
                      })
                    : history.push("/#projects");
                }}
                active={path === "outside-projects"}
              />
            </MenuItem>
            <MenuItem>
              <LinkButtonNoArrow
                theme={textTheme ? textTheme : cssValues.colours.black}
                text="Roundup"
                onClick={() => {
                  history.push("/roundup");
                }}
                active={path === "roundup"}
              />
            </MenuItem>
          </MenuGroup>
        </MenuWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};
