import React from 'react'
import Sidebar from './Sidebar'
import { Container } from 'react-bootstrap'

export const Templates = () => {
  return (
    <Container fluid className="dashboard-container">
    <div className="dashboard-content">
        <Sidebar/>
    <h1> 
        <header className='sedh'>Templates</header>
        </h1>
    </div>
    </Container>
        
  )
}
