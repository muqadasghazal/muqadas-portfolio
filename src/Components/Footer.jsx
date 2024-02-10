import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Button } from '../Styles/Button'


const Wrapper = styled.section`
.contact{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.bg };
  max-width: 60vw;
  margin: auto;
  padding: 3rem 5rem;
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.colors.shadowSupport};
  transform: translateY(50%);

}

h3{
  font-size: 1.8rem;
}
footer{
  background-color: ${({ theme }) => theme.colors.footer_bg} ;
  padding: 14rem 10rem 6rem 10rem;
  h3,p{
    color: ${({ theme }) => theme.colors.hr};
  }
}
.pages{
    h3{
      padding: 0.5rem;
      transition: all 0.3s ease;
      &:hover{
        transform: scale(0.96);
      }
    
    }
}
.contact-me{
  .icon{
      height: 2rem;
      color: white;
  }
}
@media (max-width:999px) {
  footer{
    padding: 9rem 3rem 5rem 3rem;
  }
}
@media (max-width: 650px) {
  padding: 0;
  footer{
    /* position: absolute;
    bottom: 0%; */
    padding: 13rem 3rem 5rem 3rem;
  }

  .contact{
    flex-direction: column;
   align-items: center;
    Button{
      margin-top: 1rem;
    }
  }
}
/* @media (max-width: 450px) {
  footer , .contact{
    display: none;
  }
} */
`
const Footer = () => {

  return (
    <>
    <Wrapper>

    <section className='contact'>
      {/* left */}
      <div>
        <h3> <b>Ready to get started?</b></h3>
        <p>Talk to us Today</p>
      </div>
      {/* right */}
      <div>
        <Button>
          Get Started
        </Button>
      </div>
    </section>


    {/* Footer */}
    <footer className='grid grid-four-column'>

      {/* 1st */}
      <div className='intro'>
        <h3>Muqadas Ghazal</h3>
        <p>Dedicated and methodical BS Software Engineering student with a keen interest in developing scalable web applications</p>
      </div>

      {/* 2nd */}
      <div className='pages'>
        <NavLink to='/'>
          <h3>Home</h3>
        </NavLink>
        <NavLink to='/about'>
          <h3>About me</h3>
        </NavLink>
        <NavLink to='/contact'>
          <h3>Contact me</h3>
        </NavLink>
        <NavLink to='/services'>
          <h3>My Projects</h3>
        </NavLink>
      </div>


      {/* 3rd */}
      <div className='contact-me'>
        <h3><b>Contact me</b></h3>
        <p>ghazalmuqadas@gmail.com</p> <br />
        <NavLink to='/contact'>
        <Button>
          Contact me
        </Button>
        </NavLink>
      </div>

      {/* 4th */}
      <div className='linkedIn-link'>
        <h3><b>Link to Linked in Profile</b></h3> <br />
        <a href="https://www.linkedin.com/in/muqadas-ghazal-221907287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ">
          <Button>
            Click Here
          </Button>
        </a>
       
      </div>
    </footer>

    </Wrapper>
    </>
  )
}


export default Footer
