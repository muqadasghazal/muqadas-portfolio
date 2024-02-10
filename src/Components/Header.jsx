import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import styled from 'styled-components'

const Header = () => {
  const Header = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  img{
    height:auto;
    width: 50%;
  }
  @media (min-width:900px) {
    img{
      height: auto;
      width: 75%;
    }
  }
  
  `
  return (
    <>
      <Header>
        <NavLink to='/'>
          <img src="./images/logo1.png" alt="" />
        </NavLink>
        <Navbar />
      </Header>
    </>
  )
}

export default Header
