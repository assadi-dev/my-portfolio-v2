import React from "react";
import styled from "styled-components";

export default styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.35s;
  ::before {
    content: "";
    position: absolute;
    height: 2px;
    width: 80%;
    background: #fff;
    transition: all 0.35s;
    transform: ${(props) =>
      props.isActive ? "translateY(0px) rotate(45deg)" : "translateY(-10px)"};
    box-shadow: ${(props) =>
      props.isActive === true ? "0 0 0 #fff" : " 0 10px 0 #fff"};
  }
  ::after {
    content: "";
    position: absolute;
    height: 2px;
    width: 80%;
    background: #fff;
    transition: all 0.35s;
    transform: ${(props) =>
      props.isActive ? "translateY(0px)  rotate(-45deg)" : "translateY(10px)"};
  }
`;
