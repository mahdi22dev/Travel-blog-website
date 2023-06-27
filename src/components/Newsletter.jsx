import React, { useState } from "react";
import styled from "styled-components";
const Newsletter = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <Wrapper className='newslatter' id='newsletter'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className='form flex-center'
      >
        <h4 className='form-title flex-center'>subscribe to our Newsletter</h4>
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
      </form>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 50px;
  background-color: var(--primary-400);
  max-height: 350px;
  width: 100%;
  .form-title {
    color: var(--white);
    margin: 0;
    margin-left: 50px;
    margin: 0 auto;
    min-width: max-content;
  }
  .form {
    min-width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
    padding: 30px;
  }
  .form-btn {
    width: 50%;
    background-color: #fff;
    color: #64ded9;
    margin: 0 auto;
    transition: box-shadow 0.3s;
  }
  .form-btn:hover {
    box-shadow: var(--box-shadow);
  }
  input {
    width: 50%;
    margin: 0 auto;
  }

  @media (min-width: 1669px) {
    .form {
      grid-template-columns: repeat(4, 1fr);
      padding: 0;
    }
    input {
      /* width: 100%; */
      min-width: 400px;
    }
    .form-btn {
      min-width: 400px;
    }
    .form-title {
      margin-right: 5rem;
    }
  }
  @media (max-width: 750px) {
    .form-btn {
      min-width: 80%;
    }
    .form-btn {
      min-width: 80%;
    }
    input {
      min-width: 80%;
    }
  }
`;
export default Newsletter;
