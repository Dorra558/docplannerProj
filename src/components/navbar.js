import React from 'react'
import navbar from '../css/navbar.css'
import {Navbar,Nav, NavDropdown} from 'react-bootstrap'


// //Get the button
// var mybutton = document.getElementById("myBtn");
// var mynav = document.getElementById("mainnav")
//     // When the user scrolls down 350px from the top of the document, show the button
// window.onscroll = function() { scrollFunction() };
// function scrollFunction() {
//   if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
//       mynav.classList.add("bg-light");
//   } else {
//       mynav.classList.remove("bg-light");
//   }
// }

function NavigationBar(){
  return(
    <div className="pb-5">
        <Navbar expand="lg" fixed="top"> 
        <div className="container">
        <Navbar.Brand href="#home"><img src="/imgs/logo.svg" className="logoDoc"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link className="linkNav" href="#home" active >About us</Nav.Link>
                <Nav.Link className="linkNav" href="#link">Career</Nav.Link>
               
                <NavDropdown className="dropdown" title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Marketing &amp; PR</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Customer Success &amp; Sales</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">IT, Product, Data</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Finance &amp; Administration</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">HR &amp; more</NavDropdown.Item>
                </NavDropdown> 
            </Nav>          
        </Navbar.Collapse>
        </div>
        </Navbar>

    </div>
   )

 }

export default NavigationBar