import React, { useEffect } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import cssValues from "../../../../cssValues.json";
import { Header } from "../../../organisms/header/header";
import { WrapperWithTitleBlockSide } from "../../../organisms/wrapper/contentWrapper";
import { DisplayImg } from "../../../atoms/image/image";
import pythonSc from "../../../../assets/python-recording.jpg";

const Wrapper = styled.div`
  background-color: ${cssValues.colours.grey};
  min-height: 100vh;
`;

export const Python = () => {
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
        title="Python Lunch and Learn"
        subtitle={<div>An introduction to Python programming language.</div>}
        body={
          <div>
            <Fade bottom>
              <DisplayImg src={pythonSc} />
            </Fade>
          </div>
        }
      />
    </Wrapper>
  );
};

export default Python;
