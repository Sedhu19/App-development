import React from 'react'
import Sidebar from './Sidebar'
import { Container } from 'react-bootstrap'

export const Users = () => {
  return (
    <Container fluid className="dashboard-container">
    <div className="dashboard-content">
        <Sidebar/>
    <h1> 
        <header className='sedh'>Users</header>
        </h1>
    </div>
    </Container>
        
  )
}
