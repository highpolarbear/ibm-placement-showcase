import React, { useState } from "react";
import styled from "styled-components";
import { Card, FlipCard } from "../../molecules/card/card";
import cssValues from "../../../cssValues.json";

const Wrapper = styled.div`
  max-width: ${cssValues.width.maxWidthDesktop};
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  @media (max-width: ${cssValues.width.mobileLimit}) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (max-width: ${cssValues.width.maxWidthDesktop}) {
    padding: 2vw;
  }
`;

const WrapperThree = styled.div`
  max-width: ${cssValues.width.maxWidthDesktop};
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  @media (max-width: ${cssValues.width.mobileLimit}) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (max-width: ${cssValues.width.maxWidthDesktop}) {
    padding: 2vw;
  }
`;

export const CardGroup = (props) => {
  const { theme, cards } = props;
  return (
    <Wrapper>
      {cards.map((card) => {
        return (
          <Card
            theme={theme && theme}
            image={card.image && card.image}
            preTitle={card.preTitle && card.preTitle}
            title={card.title && card.title}
            subtitle={card.subtitle && card.subtitle}
            body={card.body && card.body}
            link={card.link && card.link}
            key={card.title && card.title}
          />
        );
      })}
    </Wrapper>
  );
};

export const FlipCardGroupThree = (props) => {
  const { theme, cards } = props;
  const [activeIndex, setActiveIndex] = useState(-1);
  return (
    <WrapperThree>
      {cards.map((card, index) => {
        return (
          <FlipCard
            width={card.width}
            height={card.height}
            theme={theme && theme}
            front={card.front && card.front}
            back={card.back && card.back}
            key={card.front.title && card.front.title}
            index={index}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        );
      })}
    </WrapperThree>
  );
};
