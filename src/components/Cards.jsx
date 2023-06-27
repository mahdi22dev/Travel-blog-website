import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { cards } from "../data";

const Cards = () => {
  const [CardsList, SetCards] = useState(cards);
  return (
    <Wrapper className='destinations-container'>
      <h2 className='section-title'>best destinations</h2>
      <p className='section-subtitle'>
        Explore Best Destinations In Four Continents
      </p>
      <div className='destinations-cards'>
        {CardsList.map((card) => {
          return (
            <div
              key={card.id}
              className='card flex-center'
              style={{
                background: `linear-gradient(rgb(100, 222, 217, 0.2), rgba(0, 0, 0, 0.9)),url("${card.image}") center/cover no-repeat`,
              }}
            >
              <h4 className='card-title'>{card.name} </h4>
              <p className='card-text'>{card.card_text}</p>

              {/* btn */}

              <Link className='link-cards link-btn ' to={`./destinations/`}>
                {" "}
                Explore Now
              </Link>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  /* destinations section */
  --card-text-fz: 16px;
  background-color: var(--primary-100);
  width: 100%;
  padding: 50px;
  overflow: hidden;
  .destinations-cards {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    max-width: var(--max-width);
    margin: 0 auto;
  }
  .section-title {
    text-align: center;
    color: var(--grey-800);
  }
  .section-subtitle {
    text-align: center;
    margin-bottom: 50px;
    text-transform: capitalize;
    color: var(--grey-900);
  }
  .card {
    width: 90%;
    min-height: 400px;
    flex-direction: column;
    justify-content: flex-start;
    margin: 10px auto;
    border: 2px solid var(--primary-400);
    border-radius: 5px;
    box-shadow: 0px 0px 25px 0px #185653;
    margin-right: 10px;
    transition-property: box-shadow color;
    transition: 0.4s;
  }
  .card:hover {
    box-shadow: 0px 0px 44px -4px #64ded9;
  }

  .card:hover .card-title {
    color: var(--primary-400);
  }
  .card:hover .card-text {
    color: var(--primary-300);
  }
  .card-title {
    color: var(--grey-200);
    font-size: clamp(40px, 4vw, 50px);
    text-align: center;
    margin: 10px auto;
  }
  .card-text {
    color: var(--grey-300);
    max-width: 300px;
    text-align: center;
    font-size: var(--card-text-fz);
    max-height: 200px;
  }
  .link-cards {
    margin: 0 auto;
    margin-top: auto;
    margin-bottom: 20px;
    width: 150px;
  }
  .link-btn {
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
  .link-btn:hover {
    color: var(--btn-bg-color-primary);
    border-color: var(--btn-bg-color-primary);
    background-color: transparent;
  }
  @media (min-width: 800px) {
    --card-text-fz: 17px;
    .destinations-cards {
      grid-template-columns: repeat(2, 1fr);
    }
    .card {
      width: 400px;
    }
  }
  @media (min-width: 1300px) {
    --card-text-fz: 17px;
    .destinations-cards {
      grid-template-columns: repeat(4, 1fr);
    }
    .card {
      width: 350px;
    }
  }
  /* @media (max-width: 800px) {
    .card {
      width: 400px;
    }
  } */
`;

export default Cards;
