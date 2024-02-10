import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import Middlesection from './Components/Middlesection'
import Services from './Services'

const Home = () => {
  const data = {
    text : "Full-Stack Developer",
    image : './images/middleImg.svg'
  }
  return (
    <>
    <Middlesection {...data}/>
    <div className="container" style={{maxWidth:'100%'}}>
      <div className="services" style={{backgroundColor:'#80808017',padding:'1.5rem'}}>
      <Services/>
      </div>
    </div>
    </>

  )
}

export default Home
