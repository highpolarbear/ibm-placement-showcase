import styled from "styled-components";
import cssValues from "../../../cssValues.json";

export const SectionTitle = styled.div`
  font-size: 5rem;
  font-family: regular;
  letter-spacing: 0.1rem;
  color: ${(props) => (props.theme ? props.theme : "unset")};
  user-select: none;
`;

export const SectionTitleLg = styled(SectionTitle)`
  font-size: 7rem;
  line-height: 8rem;
  @media (max-width: ${cssValues.width.mobileLimit}) {
    font-size: 4rem;
    line-height: 3.5rem;
  }
`;

export const SectionTitleCenter = styled(SectionTitle)`
  text-align: center;
`;

export const SectionSubtitle = styled.div`
  font-size: 2rem;
  font-family: Helvetica Neue;
  color: ${(props) => (props.theme ? props.theme : "unset")};
  user-select: none;
`;

export const SectionSubtitleLg = styled(SectionSubtitle)`
  font-size: 4rem;
  font-family: light;
  @media (max-width: ${cssValues.width.mobileLimit}) {
    font-size: 2rem;
  }
`;

export const SectionSubtitleCenter = styled(SectionSubtitle)`
  text-align: center;
`;

export const PreTitleText = styled.div`
  font-family: sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.15rem;
  color: ${(props) => (props.theme ? props.theme : "unset")};
`;

export const TitleText = styled.div`
  font-size: 3rem;
  font-family: regular;
  letter-spacing: 0.1rem;
`;

export const SubtitleText = styled.div`
  font-size: 1.5rem;
`;

export const BodyText = styled.div`
  font-family: Helvetica Neue;
`;

export const CardBodyText = styled(BodyText)`
  font-family: Helvetica Neue;
  font-size: 1.5rem;
  line-height: 2rem;
`;

export const BannerText = styled.div`
  font-size: 10rem;
  font-family: regular;
  text-align: center;
  color: ${(props) => (props.theme ? props.theme : "unset")};
  @media (max-width: ${cssValues.width.mobileLimit}) {
    font-size: 5rem;
  }
`;

export const UnderlineText = styled.div`
  display: inline-block;
  text-decoration: underline;
`;
