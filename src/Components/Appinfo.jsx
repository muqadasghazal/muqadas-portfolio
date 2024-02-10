import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styled from "styled-components";
import { Button } from "../Styles/Button";




  // styling for slide container
  const Section1 = styled.section`
    margin-top: 4%;
    margin-bottom: 4%;
    display: flex; // Make this a flex container
    justify-content: center; // Center children horizontally
    align-items: center;
    flex-direction: column; // Center children vertically
    /* height: 100vh; */
    padding-left:5%;
    padding-right: 5%;

    .slide-container {
      width: 50%; // Set a width for the slider
      margin: auto; // Center the slider container
    }
    .image-div {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 400px; // You can adjust this as needed
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center center; // Center the background image
    }
    .slide-right {
      margin: 26px 0 26px 0;
      animation: 3s slide-right;
    }
    @keyframes slide-right {
      from {
        margin-left: -100%;
      }
      to {
        margin-left: 0%;
      }
    }
    .slide-left {
      animation: 3s slide-left;
      p{
        text-align: center;
      }
    }
    @keyframes slide-left {
      from {
        margin-left: 100%;
      }
      to {
        margin-left: 0%;
      }
    }
    Button{
        margin-top:30px;
    }

    @media (max-width:1000px) {
      margin: 4rem 1rem 0 1rem;
      padding: 0;
      justify-content: start;
      .slide-container{
        margin: 0;
      }
    }
    /* @media (max-width:500px) {
      margin: 0;
      padding: 0;
      justify-content: start;
    
      .slide-container{
        margin: 0;
      }
    } */

  `;

const Appinfo = (props) => {
  const { state } = useLocation();
  const { imagesArray } = state;
  const { appName } = useParams();
  console.log(state);
  return (
    <>
      <Section1>
        <div className="slide-container">
          <h2>
            <b>{state.name}</b>
          </h2>
          <Slide>
            {imagesArray &&
              imagesArray.map((item, index) => (
                <div
                  className="image-div"
                  key={index}
                  style={{ backgroundImage: `url(${item.url})` }}
                />
              ))}
          </Slide>
        </div>
        <div className="slide-right">
          <h2>
            <b>Technologies Used</b>
          </h2>
          <p>
            Technologies that are used to build this project are{" "}
            {state.technologies}
          </p>
        </div>
        <div className="slide-left">
          <h2>
            <b>Description</b>
          </h2>
          <p>{state.description}</p>
        </div>
        <Button>
          <a
            href={
              appName === 'NewsMonkey'
                ? "https://github.com/muqadasghazal/News-Monkey.git"
                : appName === 'BlogApp'
                  ? "https://github.com/muqadasghazal/blogApp.git"
                  : appName === 'AIquizApp'
                    ? "https://github.com/muqadasghazal/QuizApp.git"
                  : "#"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            GET CODE
          </a>
        </Button>
      </Section1>
    </>
  );
};

export default Appinfo;
