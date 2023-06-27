import React, { useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/Context";
import Destination_Card from "../components/Destination_Card";

const Destinations = () => {
  const [highLitedBTN, setHighLitedBTN] = useState("");
  const {
    DesData,
    FilterAfrica,
    resetAll,
    FilterEurope,
    FilterAsia,
    FilterSouthhamerica,
    FilterNorthamerica,
    Australia,
  } = useGlobalContext();
  return (
    <Wrapper>
      <div className='filter-btns'>
        <button
          className={highLitedBTN == "btn1" ? "des-btn high" : "des-btn"}
          onClick={() => {
            resetAll();
            setHighLitedBTN("btn1");
          }}
        >
          All
        </button>
        <button
          className={highLitedBTN == "btn2" ? "des-btn high" : "des-btn"}
          onClick={() => {
            FilterAfrica();
            setHighLitedBTN("btn2");
          }}
        >
          Africa
        </button>
        <button
          className={highLitedBTN == "btn3" ? "des-btn high" : "des-btn"}
          onClick={() => {
            FilterEurope();
            setHighLitedBTN("btn3");
          }}
        >
          Europe
        </button>
        <button
          className={highLitedBTN == "btn4" ? "des-btn high" : "des-btn"}
          onClick={() => {
            FilterAsia();
            setHighLitedBTN("btn4");
          }}
        >
          Asia
        </button>
        <button
          className={highLitedBTN == "btn5" ? "des-btn high" : "des-btn"}
          onClick={() => {
            FilterNorthamerica();
            setHighLitedBTN("btn5");
          }}
        >
          North America
        </button>
        <button
          className={highLitedBTN == "btn6" ? "des-btn high" : "des-btn"}
          onClick={() => {
            FilterSouthhamerica();
            setHighLitedBTN("btn6");
          }}
        >
          South America
        </button>
        <button
          className={highLitedBTN == "btn7" ? "des-btn high" : "des-btn"}
          onClick={() => {
            Australia();
            setHighLitedBTN("btn7");
          }}
        >
          Australia
        </button>
      </div>

      <div className='destenations-cards'>
        {DesData.map((card, index) => {
          return <Destination_Card key={index} card={card} />;
        })}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: var(--white);
  min-height: 100vh;
  max-width: 100vw;
  padding: 50px;
  button {
    margin-right: 10px;
  }
  .filter-btns {
    margin: 0 auto;
  }
  .des-card {
  }
  .des-btn {
    margin-bottom: 20px;
    transition-property: color, border;
    transition: 0.3s;
  }
  .des-btn:hover {
    background-color: transparent;
    border: 1px solid var(--primary-400);
    color: var(--primary-400);
  }
  .high {
    background-color: transparent;
    border: 1px solid var(--primary-400);
    color: var(--primary-400);
  }
`;
export default Destinations;
