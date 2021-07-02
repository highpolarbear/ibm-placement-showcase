import React from "react";
import styled from "styled-components";
import cssValues from "../../../cssValues.json";
import iphone from "../../../assets/iphone.png";

const ScreenWrapper = styled.div`
  width: ${(props) => (props.width ? props.width : "50%")};
  height: 55vh;
  @media (max-width: ${cssValues.width.mobileLimit}) {
    height: 35vh;
    width: 100%;
  }

  @media (max-width: ${cssValues.width.regularLimit}) {
    height: 60vh;
    width: 100%;
  }

  margin: ${(props) => (props.centered ? "0 auto" : "unset")};
`;

const Screen = styled.img`
  position: relative;
  width: 100%;
  z-index: 2;
`;

// const ScreenContent = styled.img`
//   width: 77.5%;
//   position: relative;
//   transform: translate(14.5%, -116%);
// `;

const VideoWrapper = styled.video`
  width: 64%;
  position: relative;
  transform: translate(28%, -105%);
  z-index: 1;
`;

export const IPhoneWrapper = (props) => {
  const { video, image, width, height, centered } = props;
  return (
    <ScreenWrapper width={width} height={height} centered={centered}>
      <Screen src={iphone} alt="iPhone" />
      {video && (
        <VideoWrapper muted loop autoPlay>
          {video}
        </VideoWrapper>
      )}
      {image && image}
    </ScreenWrapper>
  );
};

export default IPhoneWrapper;
