import React, { useState } from "react";
import styled from "styled-components";
import newsletter from "../assets/newsletter.jpg";

const NewsletterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <NewsLetter className='flex-center newletter-container'>
      <div className='newletter-image img'>
        <img src={newsletter} alt='' />
      </div>
      <div className='newsletter-form'>
        <div className='newsletter-text'>
          <p>
            Welcome to our travel newsletter blog! Discover the latest travel
            news, trends, and tips from around the world. Get destination
            spotlights, itineraries, budgeting advice, packing hacks, and more.
            Subscribe for updates and join our vibrant community of fellow
            globetrotters. Let's embark on a thrilling travel experience
            together!
          </p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className='form '
        >
          <h4 className='form-title flex-center'>
            subscribe to our Newsletter
          </h4>
          <div className='form-inputs flex-center'>
            <input
              type='text'
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className='name'
              placeholder='Name'
            />
            <input
              type='email'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className='email'
              placeholder='Email'
            />

            <button className='form-btn'>subscribe</button>
          </div>
        </form>
      </div>
    </NewsLetter>
  );
};
const NewsLetter = styled.main`
  min-height: 80vh;
  padding: 20px;
  background-color: var(--white);
  flex-direction: column;
  .newsletter-form {
    padding: 30px;
  }
  .link:hover {
    color: red;
  }
  img {
    width: 80%;
    margin: 0 auto;
    height: 700px;
  }
  p {
    width: 80%;
    max-width: 600px;
    margin: 20px auto;
    text-align: center;
  }
  form {
    width: 80%;
    margin: 0 auto;
    flex-direction: column;
    h4 {
      color: var(--primary-400);
    }
    div {
      flex-direction: column;
      input {
        border: 2px solid var(--primary-400);
        margin-bottom: 10px;
        width: 100%;
        ::placeholder {
          color: var(--primary-400);
        }
      }
      button {
        width: 100%;
        color: var(--white);
      }
    }
  }

  @media (min-width: 1200px) {
    padding: 200px;
    padding-top: 50px;
    flex-direction: row;

    img {
      width: auto;
      margin: 0 auto;
      height: 700px;
      margin: 20px;
    }
    p {
      width: auto;
      max-width: unset;
      margin: 0 auto;
      margin-left: 50px;
      text-align: center;
    }
    form {
      width: auto;
      margin: 0 auto;
      margin-left: 50px;
      flex-direction: row;
      div {
        flex-direction: row;
        input {
          margin-bottom: 0px;
          width: auto;
          margin-left: 10px;
        }
        button {
          width: auto;
          margin-left: 10px;
        }
      }
    }
  }
`;
export default NewsletterPage;
