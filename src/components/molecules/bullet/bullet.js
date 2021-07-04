import styled from "styled-components";
import { TitleText2Rem, SubtitleText125Rem } from "../../atoms/text/text";
import { Padding1Rem } from "../../atoms/padding/padding";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const IconWrapper = styled.div`
  width: 10%;
  margin-right: 1.5rem;
`;

const Icon = styled.img`
  max-width: 3rem;
  transform: translate(0, 0.25rem);
`;

const TextWrapper = styled.div`
  max-width: 80%;
`;

export const Bullet = (props) => {
  const { img, title = "Title", subtitle = "Subtitle" } = props;
  return (
    <Wrapper>
      <IconWrapper>
        <Icon src={img && img} alt={title} />
      </IconWrapper>

      <TextWrapper>
        <TitleText2Rem>{title}</TitleText2Rem>
        <Padding1Rem />
        <SubtitleText125Rem>{subtitle}</SubtitleText125Rem>
      </TextWrapper>
    </Wrapper>
  );
};
