import React from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";
import cssValues from "../../../cssValues.json";

const Wrapper = styled.div`
  width: 100%;
  padding: 5rem 0;
  margin: 0 auto;
  background: ${cssValues.colours.black};
`;

const TextWrapper = styled.div``;

export const FullWidthBannerDark = (props) => {
  const { body } = props;
  return (
    <Wrapper>
      <Fade bottom>
        <TextWrapper>{body && body}</TextWrapper>
      </Fade>
    </Wrapper>
  );
};
