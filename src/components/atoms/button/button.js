import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import arrowRight from "../../../assets/arrow_right.svg";
import arrowRightBlack from "../../../assets/arrow_right_black.svg";
import plus from "../../../assets/plus.svg";
import cross from "../../../assets/cross.svg";
import cssValues from "../../../cssValues.json";

const Arrow = styled.img`
  width: 1rem;
  margin-left: 0.25rem;
  vertical-align: middle;
  transform: translate(0, -10%);
  transition: all 0.5s ease 0s;
`;

const Plus = styled.img`
  width: 1rem;
  padding: 0.5rem;
  vertical-align: middle;
  border-radius: 100%;
  transform: translate(0, -10%);
  transition: visibility 0s 0.5s;
  background-color: ${cssValues.colours.black};
  cursor: pointer;
  opacity: ${(props) => (props.index === props.activeIndex ? "0" : "1")};
`;

const Cross = styled(Plus)`
  position: absolute;
  right: 2rem;
  bottom: 1rem;
  opacity: ${(props) => (props.index === props.activeIndex ? "1" : "0")};
`;

const Btn = styled(Link)`
  display: inline-block;
  padding: 1rem 1.75rem;
  background-color: ${(props) =>
    props.theme ? props.theme : cssValues.colours.white};
  border-radius: 0.25rem;
  text-decoration: none;
  letter-spacing: 0.075rem;
  color: ${cssValues.colours.white};
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 20px 0px #cacaca;
    transform: scale(1.05) perspective(1px);
    transition: all 0.3s ease-in-out;
  }

  &:hover ${Arrow} {
    transform: translate(100%, -10%);
    transition: all 0.3s ease 0s;
  }
`;

const BtnNoRadius = styled.button`
  display: inline-block;
  padding: 1rem 1.75rem;
  text-decoration: none;
  font-size: 1.1rem;
  letter-spacing: 0.075rem;
  border-radius: 0;
  border: none;
  background-color: ${cssValues.colours.white};
  color: ${cssValues.colours.black};
  &:hover {
    cursor: pointer;
  }
  &:hover ${Arrow} {
    transform: translate(100%, -10%);
    transition: all 0.3s ease 0s;
  }
`;

const LinkStyledBtn = styled(Link)`
  border-radius: 0.25rem;
  letter-spacing: 0.075rem;
  color: ${(props) => (props.theme ? props.theme : cssValues.colours.white)};
  font-size: 1.25rem;
  &:hover ${Arrow} {
    transform: translate(100%, -10%);
    transition: all 0.3s ease 0s;
  }
`;

const LinkNoStyleBtn = styled.div`
  border-radius: 0.25rem;
  letter-spacing: 0.075rem;
  color: ${(props) => (props.theme ? props.theme : cssValues.colours.white)};
  font-size: 1.25rem;
  text-decoration: ${(props) => (props.active ? "underline" : "none")};
  user-select: none;
  &:hover {
    cursor: pointer;
  }
`;

export const Button = (props) => {
  const { theme, text, link } = props;
  return (
    <Btn theme={theme && theme} to={link ? link : "/"}>
      {text ? text : "Default button text"} <Arrow src={arrowRight} />
    </Btn>
  );
};

export const PlusBtn = (props) => {
  const { theme, onClick, index, activeIndex } = props;
  return (
    <Plus
      src={plus}
      theme={theme && theme}
      onClick={onClick}
      index={index}
      activeIndex={activeIndex}
    />
  );
};

export const CrossBtn = (props) => {
  const { theme, onClick, index, activeIndex } = props;
  return (
    <Cross
      src={cross}
      theme={theme && theme}
      onClick={onClick}
      index={index}
      activeIndex={activeIndex}
    />
  );
};

export const ButtonNoRadius = (props) => {
  const { theme, text, link, onClick } = props;
  return (
    <BtnNoRadius
      theme={theme && theme}
      to={link ? link : "/"}
      onClick={onClick}
    >
      {text ? text : "Default button text"} <Arrow src={arrowRightBlack} />
    </BtnNoRadius>
  );
};

export const LinkButton = (props) => {
  const { theme, text, link } = props;
  return (
    <LinkStyledBtn theme={theme && theme} to={link ? link : "/"}>
      {text ? text : "Default button text"} <Arrow src={arrowRight} />
    </LinkStyledBtn>
  );
};

export const LinkButtonBlk = (props) => {
  const { theme, text, link } = props;
  return (
    <LinkStyledBtn theme={theme && theme} to={link ? link : ""}>
      {text ? text : "Default button text"} <Arrow src={arrowRightBlack} />
    </LinkStyledBtn>
  );
};

export const ButtonBlkOnClick = (props) => {
  const { theme, text, onClick } = props;
  return (
    <LinkStyledBtn theme={theme && theme} onClick={onClick && onClick}>
      {text ? text : "Default button text"} <Arrow src={arrowRightBlack} />
    </LinkStyledBtn>
  );
};

export const LinkButtonNoArrow = (props) => {
  const { theme, text, onClick, active } = props;
  return (
    <LinkNoStyleBtn theme={theme && theme} onClick={onClick} active={active}>
      {text ? text : "Default button text"}
    </LinkNoStyleBtn>
  );
};
