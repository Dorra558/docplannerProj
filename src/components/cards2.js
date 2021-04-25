import React from 'react'
import {Row,Col, Card} from 'react-bootstrap';
import '../css/cards2.css'

function CardsDoc(){
  return(
    <div >
       <Row>
          <Col md={6}>
            <Card className="cardSec4 mt-4">
                <Card.Img variant="top" src="https://www.docplanner.com/img/flag.png" className="cardIcons mx-auto mt-4" />
                    <Card.Body className="text-center">
                        <Card.Title><h4>Leader in 12 countries</h4></Card.Title>
                        <Card.Text>
                        Poland, Brazil, Mexico, Spain, Italy, Turkey, Colombia, Czech Republic, Portugal, Argentina, Peru and Chile
                        </Card.Text>
                    </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="cardSec4 ">
                <Card.Img variant="top" src="https://www.docplanner.com/img/visits.png" className="cardIcons mx-auto mt-4" />
                    <Card.Body className="text-center">
                        <Card.Title><h4>Leader in 12 countries</h4></Card.Title>
                        <Card.Text>
                        Poland, Brazil, Mexico, Spain, Italy, Turkey, Colombia, Czech Republic, Portugal, Argentina, Peru and Chile
                        </Card.Text>
                    </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="cardSec4 mt-4">
                <Card.Img variant="top" src="https://www.docplanner.com/img/patients.png" className="cardIcons mx-auto mt-4" />
                    <Card.Body className="text-center">
                        <Card.Title><h4>Leader in 12 countries</h4></Card.Title>
                        <Card.Text>
                        Poland, Brazil, Mexico, Spain, Italy, Turkey, Colombia, Czech Republic, Portugal, Argentina, Peru and Chile
                        </Card.Text>
                    </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="cardSec4 ">
                <Card.Img variant="top" src="https://www.docplanner.com/img/doctors.png" className="cardIcons mx-auto mt-4" />
                    <Card.Body className="text-center">
                        <Card.Title><h4>Leader in 12 countries</h4></Card.Title>
                        <Card.Text>
                        Poland, Brazil, Mexico, Spain, Italy, Turkey, Colombia, Czech Republic, Portugal, Argentina, Peru and Chile
                        </Card.Text>
                    </Card.Body>
            </Card>
          </Col>
       </Row>
    </div>
   )
 }

export default CardsDoc
