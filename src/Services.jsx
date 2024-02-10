import React from 'react'
import styled from 'styled-components'
import {Button} from './Styles/Button'
import { useNavigate } from 'react-router-dom'



const Wrapper = styled.section`
padding: 4rem 0rem;

  .card {
/* Add shadows to create the "card" effect */
    
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    line-height: 30px;
    border-radius: 12px;
    img{
      border-top-right-radius: 12px;
      border-top-left-radius:12px;
    }
  }

  /* On mouse-over, add a deeper shadow */
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

  /* Add some padding inside the card container */
  .card-content {
    padding: 20px 20px;
  }
  Button{
    margin-top: 20px;
  }
  .container{
    padding-top: 3%;
  }
  h3{
    font-size: 2rem;
  }

  @media (max-width:768px) {
    .grid-three-column{
      grid-template-columns: 1fr;
    }
   
  }

`

const Services = () => {
    const navigate = useNavigate();
    const newsMonkey = [
      {
        url: '/images/news-app.png',
      },
      {
        url: '/images/news-bussiness.png'
      }
    ]
    const blog = [
      {
        url: '/images/blog-login.png',
      },
      {
        url: '/images/blog-SignUp.png'
      },
      {
        url: '/images/blog-createPost.png'
      },
      {
        url: '/images/blog-seePost.png'
      },
      {
        url: '/images/blog-deletePost.png'
      },
      {
        url: '/images/blog-updatePost.png'
      },
      {
        url: '/images/blog-Feed.png'
      }

    ]
    const quiz = [
      {
        url: '/images/quiz-welcome.png',
      },
      {
        url: '/images/quiz-login.png',
      },
      {
        url: '/images/quiz-create.png',
      },
      {
        url: '/images/quiz-seeQuiz.png',
      },
      {
        url: '/images/quiz-result.png',
      },
      {
        url: '/images/quiz-join.png',
      },
      {
        url: '/images/quiz-Joinbyname.png',
      },
      {
        url: '/images/quiz-givenquizes.png',
      },
      {
        url: '/images/quiz-faq.png',
      },
    ]
  return (
    <>
      <Wrapper>
        <h2>My Projects</h2>
        <div className='container grid grid-three-column'>
            
          <div className='card'>
            <img src="./images/news-app.png" alt="Avatar" style={{ width: '100%' }} />
            <div className="card-content">
              <h3><b>News Monkey App</b></h3>
              <p>This App is built in React.js. External API is used to render data (API INTEGRATION)</p>
             
              <Button onClick={()=> navigate('/appInfo/NewsMonkey',
              {state: {imagesArray: newsMonkey ,
                       name:'News Monkey',
                       technologies:'React,js , NewsAPI',
                       description : 'This app is made through React.js and NewsAPI. Functionalities include rendering latest news of different categories like bussiness,entertainment,health, sports, technology. '
                        }})}> 
                Learn More
                </Button>      
              
           </div>
          </div>

          <div className='card'>
            <img src="./images/blog-createPost.png" alt="Avatar" style={{ width: '100%', height: 'auto' }} />
            <div className="card-content">
              <h3><b>Blog App</b></h3>
              <p>Technologies that are used to build this app are React.js , Express.js , Type-ORM , My-SQL , Bootstrap </p>
              
              <Button onClick={()=> navigate('/appInfo/BlogApp',
              {state: {imagesArray: blog ,
                       name:'Blog App',
                       technologies:'React,js , Express.js , TYPE ORM , Bootstrap , MySQL',
                       description : 'The Blog App includes a secure authentication mechanism implemented through JSON Web Tokens (JWT). In order to create a blog post, users must first register and authenticate, ensuring that only registered members have the ability to contribute new content. However, the app allows all users to view the blogs posted by others. For users who are logged in, the app provides the functionality to create, read, update, and delete their own blog posts, often abbreviated as CRUD operations. Use of Context-API is made for state management'
                        }})}> 
                Learn More
                </Button>  
           </div>
          </div>
            {/* AI Quiz generator app */}
          <div className='card'>
            <img src="./images/quiz-create.png" alt="Avatar" style={{ width: '100%', height: 'auto' }} />
            <div className="card-content">
              <h3><b>AI Quiz Generator App</b></h3>
              <p>Technologies that are used to build this app are React.js , Express.js , Type-ORM , My-SQL , OPEN AI-API </p>
              <Button onClick={()=> navigate('/appInfo/AIquizApp',
              {state: {imagesArray: quiz ,
                       name:'AI QUIZ GEN',
                       technologies:'React,js , Express.js , TYPE ORM , Bootstrap , MySQL',
                       description : 'A user friendly welcome page contains all instruction for teacher and students about how to use this app. It consists of two users. One student and teacher. Teacher can login/Signup , create quiz and unique code will be given to teacher form which students can join , view generated quiz with answers , and view results of students who participated in quiz. Students can attempt quiz by quiz name teacher give to them , view result of attempted quizes. Basically , quiz is generated by AI, OPEN AI API has used. A secure authentication mecahnisn has used using Json web token and bcrypt hash and salt procedure. Input validation is used on input fields e.g; password should be this much letters long. input fields cant be empty.At backend , as soon as AI Generates a quiz on teacher given instruction ,  AI  generate questions with answers that are  parsed and then stored in database in question entity.When student submits answers , quiz evaluation is done at backend and the scores are stored in database. Relation are made within entities onetomany , one to one  to access data.'
                        }})}> 
                Learn More
                </Button> 
           </div>
          </div>
        </div>

      </Wrapper>


    </>
  )
}

export default Services
