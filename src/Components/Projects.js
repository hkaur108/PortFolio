import React from 'react'
import '../App.css';
import {Project} from '../Data/data';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


export default function Projects() {


  
  const EachProject= Project.map((item)=>{
        return(      
            <Card key={item.id} style={{ width: '230px' }} className='p-3 mx-auto mx-1'>
              <div className='imgContainer'>
                  <Card.Img variant="top" src={process.env.PUBLIC_URL+ item.img} className='formatProjImg mt-1' />
              </div>
            <Card.Body>
            <Card.Title className='fs-6 fw-bold'>{item.name}</Card.Title>
            <Button className='text-capitalize text-center text-wrap fs-6 ' size="sm" variant="outline-success" href={item.gitLink}>view project</Button>
        </Card.Body>
        </Card>
        
        )
    })

  return (

    <>
      <div className='container mb-5' id='projects'>
        <div className="row">
          <div className="col"><h1 className='text-center text-decoration-underline'>My Work</h1></div>
        </div>
        <div className="row">
          <div className="col">
              <Carousel responsive={responsive}>
            {EachProject}     
        </Carousel>
          </div>
        </div>
        
      </div>

    </>
    
  )
}
