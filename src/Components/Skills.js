import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../App.css';

export default function Skills() {
  return (
    <div id="skills" className="skills-main-container mx-auto">
        <div className="skills-heading d-flex align-items-center justify-content-center p-2 border-border-dark">
            <div className="display-5 m-3 p-2 text-decoration-underline"> My Skills</div>
        </div>
        <div className="skills-wrapper mx-auto "> 
            <div className="skills-section1  p-5 m-3 ">
                <ul className="px-3 text-capitalize text-center">
                    <li className="p-1"> <span className="mx-1"><strong><i class="fa-brands fa-html5"></i></strong></span>html5</li>
                    <li className="p-1"> <span className="mx-1"><strong><i class="fa-brands fa-css3-alt"></i></strong></span>cSS3</li>
                    <li className="p-1"> <span className="mx-1"><strong><i class="fa-brands fa-js"></i></strong></span>javascript</li>
                </ul>
            </div>
            <div className="skills-section2 p-5 m-3  ">
                <ul className="px-3 text-capitalize text-center">
                    <li className="p-1"> <span className="mx-1"><strong><i class="fa-brands fa-bootstrap"></i></strong></span>Bootstrap5</li>
                    <li className="p-1"><span className="mx-1"><strong><i class="fa-brands fa-react"></i></strong></span>React</li>
                </ul>
            </div>
        </div>

    </div>
   
  )
}
