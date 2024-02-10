import React from 'react'
import styled from 'styled-components'


  const Wrapper = styled.section`
     padding: 4rem 0;
    .container{
        padding: 2rem ;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 1.5rem;
      }
      .image-div{
        img{
          height: auto;
          max-width: 100%;
        }
      }
      .contact-form{
        display: flex;
        flex-direction:column;
        justify-content: center;
        gap: 4rem;
        form{
          display: flex;
          flex-direction: column;
          gap:3rem;
         
          input , textarea{
            padding: 10px 5px 10px 5px;
            border: 1px solid #80808052;

            &:hover , 
            &:active,
            &:visited{
              border-color: ${({ theme }) => theme.colors.btn};
            }
          }
        }
      }
    @media (max-width:746px) {
    img{
        display: none;
    }
}

  `
const Contact = () => {
  return (
    <>
      <Wrapper>
        <h2> <b>Feel Free to Contact</b></h2>
        <div className="container">
          <div className='contact-form'>
            <h3><b>Contact Form</b></h3>
            <form action="https://formspree.io/f/xjvnyloo" method='POST' className='form'>
              <input type="text" name='Name' autoComplete='off' placeholder='User Name' required />

              <input type="email" name='Name' autoComplete='off' placeholder='Email' required />

              <textarea name='Message' autoComplete='off' placeholder='Message' cols={30} rows={6} required />
              <input type="submit" value='Send' />
            </form>
          </div>
          <div className='image-div'>
            <img src="/images/Contact.png" alt="" />
          </div>
        </div>
      </Wrapper>
    </>
  )
}

export default Contact
