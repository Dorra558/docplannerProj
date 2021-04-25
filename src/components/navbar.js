import React from 'react'
import navbar from '../css/navbar.css'
import {Navbar,Nav} from 'react-bootstrap'

function NavigationBar(){
  return(
    <div className="pb-5">
        <Navbar expand="lg" fixed="top" > 
        <div className="container">
        <Navbar.Brand href="#home"><img src="/imgs/logo.svg" className="logoDoc"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link className="linkNav" href="#home" active >About us</Nav.Link>
                <Nav.Link className="linkNav" href="#link">Career</Nav.Link>
                <Nav.Link className="linkNav" href="#link">Departments</Nav.Link>
            </Nav>          
        </Navbar.Collapse>
        </div>
        </Navbar>
    </div>
   )

 }

export default NavigationBar