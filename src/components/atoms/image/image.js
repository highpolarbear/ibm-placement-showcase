import styled from "styled-components";
import cssValues from "../../../cssValues.json";

export const InlineImg = styled.img`
  display: inline-block;
  height: 8rem;
  @media (max-width: ${cssValues.width.mobileLimit}) {
    height: 4rem;
  }
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
