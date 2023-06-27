import React, { useState } from "react";
import { BrowserRouter, Link, Routes, Route, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.png";
import styled from "styled-components";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useGlobalContext } from "../context/Context";

const Navbar = () => {
  const { resetAll } = useGlobalContext();
  const [NavToggle, setNavToggle] = useState(false);
  const toggle = () => {
    setNavToggle(!NavToggle);
  };
  return (
    <Wrapper className='navbar'>
      <div className='logo flex'>
        <Link to={"./"}>
          <img className='img' src={logo2} alt='logo' />
        </Link>
        {/* <div className='l'>logo</div> */}
        <button className='btn btn-toggle' onClick={toggle}>
          {NavToggle ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>
      <div className='links-center flex-center'>
        <div className={NavToggle ? "nav-links toggle-navbar" : "nav-links"}>
          <div className='links-container'>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? "link active" : "link")}
              onClick={() => {
                setNavToggle(false);
              }}
            >
              Home
            </NavLink>
            <NavLink
              to='/destinations'
              className={({ isActive }) => (isActive ? "link active" : "link")}
              onClick={() => {
                resetAll();
                setNavToggle(false);
              }}
            >
              Destinations
            </NavLink>
            <NavLink
              to='blog'
              className={({ isActive }) => (isActive ? "link active" : "link")}
              onClick={() => {
                setNavToggle(false);
              }}
            >
              Blog
            </NavLink>
            <NavLink
              to='newsletter'
              className={({ isActive }) => (isActive ? "link active" : "link")}
              onClick={() => {
                setNavToggle(false);
              }}
            >
              Newsletter
            </NavLink>
            <NavLink
              to='newsletter'
              className='btn btn-letter btn-letter-mobile '
              onClick={() => {
                setNavToggle(false);
              }}
            >
              subscribe to our Newsletter
            </NavLink>
          </div>
        </div>

        <NavLink
          to='newsletter'
          className='btn btn-letter btn-letter-desktop '
          onClick={() => {
            setNavToggle(false);
          }}
        >
          subscribe to our Newsletter
        </NavLink>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.nav`
  background-color: var(--BackGroundColor);
  padding: 10px;
  height: 100px;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  display: flex;
  flex-direction: row;

  .logo {
    z-index: 100;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
  }
  .img {
    width: 130px;
    max-height: 130px;
    margin: 20px;
    scale: 1.7;
  }
  .links-center {
    justify-content: space-around;
    background-color: var(--BackGroundColor);
    width: 0px;
  }
  .nav-links {
    background-color: var(--BackGroundColor);
    position: fixed;
    transform: translateX(100vw);
    transition-property: transform opacity;
    transition: transform 0.4s linear;
    height: 100%;
    padding: 20px;
  }
  .toggle-navbar {
    display: flex;
    flex-direction: column;
    align-items: first baseline;
    position: absolute;
    transform: translateX(0vw);
    top: 0;
    left: 50%;
    right: 0;
    bottom: 0;
  }
  .links-container {
    background-color: var(--BackGroundColor);
    margin-top: 110px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .link {
    width: 100%;
    background-color: transparent;
    transition-property: color background-color;
    transition: 0.3s ease;
  }
  .link:hover {
    background-color: var(--primary-200);
    color: var(--white);
  }

  .btn-letter {
    padding: 8px;
    min-width: 150px;
    background-color: var(--btn-bg-color-primary);
    margin-left: 0px;
    margin-top: 20px;
    width: 100%;
    text-align: center;
  }

  .btn-letter:hover {
    background-color: var(--btn-bg-color-primary);
    color: var(--white);
  }
  .btn-letter-mobile {
    display: block;
  }
  .btn-letter-desktop {
    display: none;
  }
  .btn-toggle {
    display: block;
    z-index: 100;
    background-color: var(--primary-400);
    color: #333;
    padding: 10px;
    width: 50px;
    height: 50px;
  }

  @media (min-width: 900px) {
    .navbar {
      /* position: sticky; */
    }
    .logo {
      width: auto;
    }
    .toggle-navbar {
      position: unset !important;
    }
    .links-center {
      width: 100%;
    }
    .nav-links {
      background-color: transparent;
      transform: unset !important;
      position: unset;
      transition: unset;
      display: flex !important;
      width: auto;
    }
    .links-container {
      flex-direction: row;
      margin-top: 0px;
    }
    .link {
      min-width: 100px;
      text-align: center;
      margin-left: 10px;
    }
    .btn-toggle {
      display: none;
    }

    .btn-letter-mobile {
      display: none;
    }
    .btn-letter-desktop {
      display: block;
    }
    .btn-letter {
      /* margin-right: 20px; */
      margin-left: 0px;
      margin-top: 0px;
      width: auto;
    }
  }
`;
export default Navbar;
