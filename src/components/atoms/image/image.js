import styled from "styled-components";
import cssValues from "../../../cssValues.json";

export const InlineImg = styled.img`
  display: inline-block;
  height: 8rem;
  @media (max-width: ${cssValues.width.mobileLimit}) {
    height: 4rem;
  }
`;

export const SideImg = styled.img`
  height: calc(45vh);
`;

export const LogoImg = styled.img`
  display: inline-block;
  height: 4rem;
  @media (max-width: ${cssValues.width.mobileLimit}) {
    height: 2rem;
  }
`;

export const BannerImg = styled.img`
  max-width: 4rem;
  max-height: 4rem;
  margin-right: 2rem;
  position: relative;
  user-select: none;
`;

export const DisplayImg = styled.img`
  max-width: 50vw;
  max-height: 100%;
  margin: 1rem;
  position: relative;
  user-select: none;
`;
