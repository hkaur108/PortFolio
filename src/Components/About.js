import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Button from 'react-bootstrap/Button';
import '../App.css';




export default function About() {
  return (
    <>
    <div className="display-6 text-center m-3 p-2 text-primary"><strong ><span className="text-decoration-underline">Who</span> am I?</strong></div>
    <div className="about-container p-5 mx-auto ">
      <div className="profile-picture-container h-100 text-center p-5"> 
      <img src='/Images/profilePic.jpg' alt="profile-pic" />
      </div>
      <div className="about-description h-100 text-center p-5">
        <h4>I love to build and design web apps. I have Bachelors in Computer Science. I am a passionate learner who always keeps learning. My Hobbies are playing Chess <i class="fa-solid fa-chess-queen"></i> and reading Books <i class="fa-solid fa-book"></i>.</h4>
      </div>
    </div>
    <div className="about-button">
      <a href={require('../Resume/Harpreet Kaur_FE.pdf')}
      download="resume pdf"
      > <Button>Download Resume</Button></a>
      

        </div>

    

    </>
  
    
  )
}
