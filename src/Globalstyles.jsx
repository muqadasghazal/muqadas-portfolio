import { createGlobalStyle } from "styled-components";

export const Globalstyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Work Sans', sans-serif;
      }
      html {
        font-size: 62.5%;
        /* scroll-behavior: smooth; */
        /* 1rem = 10px */
        overflow-x: hidden;
      }
      
      body{
        overflow-x:hidden;
      }
      h1{
        color:${({ theme }) => theme.colors.heading};
        font-size: 6rem;
        font-weight: 900;
      }    
      h2 {
        color: ${({ theme }) => theme.colors.heading};
        font-size: 4.4rem;
        font-weight: 500;
        white-space: normal;
        text-align: center;
       }
       h3 {
        font-size: 3.8rem;
        font-weight: 400;
      }
      p {
        color: ${({ theme }) => theme.colors.text};
        opacity: .7;
        font-size: 1.65rem;
        line-height: 1.5;
        margin-top: 1rem;
        font-weight:400;
      }
      a {
        text-decoration: none;
        
      }
      li {
        list-style: none;
      }
      .container {
        max-width: 120rem;
        margin: 0 auto;
        }

        .grid {
        display: grid;
        gap: 9rem;
        }

        .grid-two-column {
        grid-template-columns: repeat(2, 1fr);
        }

        .grid-three-column {
        grid-template-columns: repeat(3, 1fr);
        }

        .grid-four-column{
        grid-template-columns: 1fr 1.2fr .5fr .8fr ;
        }

        input[type='submit']{
          max-width: auto;
          background-color: rgb(98 84 243);
          color: rgb(255 255 255);
          padding: 1.4rem 2.4rem;
          border: none;
          text-transform: uppercase;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
          -webkit-transition: all 0.3s ease 0s;
          -moz-transition: all 0.3s ease 0s;
          -o-transition: all 0.3s ease 0s;

          &:hover,
          &:active {
            box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);
            box-shadow: ${({ theme }) => theme.colors.shadowSupport};
            transform: scale(0.96);
          }
        }
        @media (max-width:1000px) {
          html , body{
            font-size: 50%;
            overflow-x: hidden;
          }
          body{
            position: relative;
          }
          .container{
            padding:3rem;
          }
          .grid-three-column {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width:768px) {
          .grid-four-column {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
        

        }
      

`;
