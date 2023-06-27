import React from "react";
import styled from "styled-components";
import image from "../assets/page_not_found.svg";

const Error = () => {
  return (
    <ErrorWrapper>
      <div className='img'>
        <img src={image} alt='' />
      </div>
      <h2 className='error-title'>Page Not Found</h2>
    </ErrorWrapper>
  );
};

const ErrorWrapper = styled.main`
  min-height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--white);
  color: #3dd6d0;
`;
export default Error;
