import React from "react";
import styled from "styled-components";
import cssValues from "../../../cssValues.json";
import MacBookWrapper from "../../organisms/wrapper/macbookWrapper";
import bppulse from "../../../assets/bppulse_page.mp4";

const Wrapper = styled.div`
  background-color: ${cssValues.colours.grey};
  min-height: 100vh;
`;

export const Test = () => {
  return (
    <Wrapper>
      <MacBookWrapper
        video={<source src={bppulse} type="video/mp4" />}
        width="40%"
      />
    </Wrapper>
  );
};

export default Test;
