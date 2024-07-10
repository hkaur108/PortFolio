import React from 'react'
import '../App.css';
import {Project} from '../Data/data';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Projects() {


  
  const EachProject= Project.map((item)=>{
        return(      
            <Card key={item.id} style={{ width: '230px' }} className='p-3 mx-auto'>
            <Card.Img variant="top" src={item.img} width="200px" className='formatProjImg mt-1' />
            <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
            {item.desc}
            </Card.Text>
            <Button className='text-capitalize text-center' variant="primary" href={item.gitLink}> view project </Button>
        </Card.Body>
        </Card>
        
        )
    })

  return (
    <>
    <div className='project-container mx-auto p-2 mt-2 mb-2'>
    <h1 className='text-light text-dark text-center text-capitalize m-3 p-2'> my <span className='text-decoration-underline'>projects</span></h1>
    <div  id='projects'  className=' p-2'>
      <div className=' projhead-Wrapper'>
            {EachProject}
      </div>
        </div> 
    </div>

    </>
    
  )
}
