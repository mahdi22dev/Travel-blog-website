import React from "react";
import styled from "styled-components";
const Footer = () => {
  const year = new Date();
  return (
    <FooterWrapper className='flex-center'>
      <p> &copy; {year.getFullYear()}</p>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  margin-top: auto;
  padding: 20px;
  height: auto;
  width: 100%;
  /* background-color: #fff; */
  p {
    margin-top: 10px;
    font-size: 20px;
  }
`;
export default Footer;
