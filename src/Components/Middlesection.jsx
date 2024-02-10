import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Button } from '../Styles/Button'



const Wrapper = styled.section`
padding: 9rem 0;
.section-data{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.btn{
    max-width: 16rem;
    color: ${({ theme }) => theme.colors.btn};
}
.md-data{
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
}
.md-heading{
    text-transform: uppercase;
    font-size: 6.4rem;
}
.md-para{
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
}
.section-image{
    display: flex;
    justify-content: center;
    align-items: center;
}
picture{
    text-align: center;
}
.middleImg{
    max-width: 80%;
}
@media (max-width:746px) {
    padding: 0;
    img{
        display: none;
    }
}
 @media (max-width:998px) {
        .container{
            padding:3rem;
          }
         
 }


`

const Middlesection = (props) => {
    return (

        <>
            <Wrapper>
                <div className='container grid grid-two-column'>
                    <div className='section-data'>
                        <p className='md-data'>THIS IS ME</p>
                        <h1 className='md-heading'>MUQADAS GHAZAL</h1>
                        <p className='md-para'>{props.text}</p>
                          <Button className="btn hireme-btn">
                            <NavLink to="/contact"> hire me </NavLink>
                        </Button>
                    </div>
                    {/* FOR IMAGE */}
                    <div className='section-image'>
                        <picture>
                            <img src={props.image} className='middleImg' alt="" />
                        </picture>
                    </div>
                </div>

            </Wrapper>

        </>
    )
}

export default Middlesection
