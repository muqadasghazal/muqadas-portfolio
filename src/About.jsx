import React from 'react'
import Middlesection from './Components/Middlesection'

const About = () => {
  const data = {
    text : "As a Full Stack Developer, my professional journey has been enriched by engaging with a diverse array of technologies, such as Express.js, React.js,My SQL and TypeORM. I am currently seeking opportunities that will allow me to gain practical industry experience. My aim is to refine my technical skills further while contributing meaningfully to the company's goals",
    image : './images/about1.svg'
  }
  return (
    <Middlesection {...data} />
  )
}

export default About
