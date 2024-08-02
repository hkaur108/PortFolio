import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Button from 'react-bootstrap/Button';
import '../App.css';
const imagePath = process.env.PUBLIC_URL + '/Images/profilePic.jpg';


export default function About() {
  return (
    <>
    <div id="about" className="container w-100 mx-auto">
      <div className="row m-3 p-1">
        <div className="display-6 text-center"><strong ><span className="text-decoration-underline my-3">Who</span> am I?</strong></div>
      </div>
      <div className="row about-container mx-auto p-5">
        <div className="col-sm"> 
          <div className="w-50 h-50 text-center p-2 profilePic"> 
            <img src={imagePath} alt="profile-pic" width="200px" className="profpic"/>
      </div>
      </div>
        <div className="col-sm about-description h-100 text-center p-2">
            <h4>I love to build and design web apps. I have Bachelors in Computer Science. I am a passionate learner who always keeps learning. My Hobbies are playing Chess <i class="fa-solid fa-chess-queen"></i> and reading Books <i class="fa-solid fa-book"></i>.</h4>

        </div>
      </div>
      <div className="row">
          <div className="about-button">
          <a href={require('../Resume/Harpreet Kaur_FE.pdf')} download="resume pdf"> 
          <Button variant="outline-success">Download Resume</Button></a>
      

        </div>
      </div>
        
    </div>


    {/* 
    <div className=" ">
     
      
      <div className="">
      </div> 
    </div>}
    
       */}
    
    <hr className="border border-dark"/>

    </>
  
    
  )
}
