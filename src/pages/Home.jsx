import React, { useEffect, useState } from "react";
import backgroundImg from "../assets/background-hero.jpg";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import Cards from "../components/Cards";
import Blog from "../components/Blog";
import Newsletter from "../components/Newsletter";
import { useGlobalContext } from "../context/Context";

const Home = () => {
  return (
    <Wrapper className='home'>
      <div
        className='background-container'
        style={{
          background: `linear-gradient(rgb(100, 222, 217, 0.3), rgba(0, 0, 0, 0.1)),url("${backgroundImg}") center/cover no-repeat`,
        }}
      >
        <h1 className='title'>Wander and Explore</h1>
        <p className='sub-title'>
          explore the best destinations for your next adventure
        </p>

        <Link
          onClick={() => {
            resetAll();
          }}
          className='link main-btn  home-btn'
          to={"./destinations"}
        >
          Explore Now
        </Link>
      </div>
      <Cards />
      <Blog />
      <Newsletter />
    </Wrapper>
  );
};
const Wrapper = styled.main`
  max-width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .background-container {
    min-height: 90vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .title {
    color: var(--primary-400);
  }
  .sub-title {
    font-size: clamp(12px, 2vw, 20px);
    text-align: center;
    text-transform: capitalize;
    font-weight: 700;
    color: #fff;
  }
  .home-btn {
    margin-top: 10px;
    width: 200px;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--btn-bg-color-primary);
    border: 2px solid transparent;
    font-weight: 700;
    color: #fff;
  }
  .home-btn:hover {
    color: var(--btn-bg-color-primary);
    border-color: var(--btn-bg-color-primary);
    background-color: transparent;
  }
  /* blog */
`;
export default Home;
