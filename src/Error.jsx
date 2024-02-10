import React from 'react'
import styled from 'styled-components'
import { Button } from './Styles/Button'
import { NavLink } from 'react-router-dom'

const Error = () => {
    const Wrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img{
        max-width: 40%;
        height: auto;
    }
    `
  return (
    <>
        <Wrapper>

            <img src="/public/images/error.jpg" alt="" />
            <NavLink to='/'>
            <Button>
                Go Back
            </Button>
            </NavLink>

        </Wrapper>
    </>
  )
}

export default Error
