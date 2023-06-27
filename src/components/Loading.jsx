import React from "react";
import styled from "styled-components";
import image from "../assets/loading.svg";

const Loading = () => {
  return (
    <Wrapper>
      <div className='image'>
        <img src={image} alt='' />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
  .image img {
    background-color: transparent;
  }
`;
export default Loading;
