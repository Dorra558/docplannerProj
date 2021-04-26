import React from 'react'
import {Row,Col, Card, Container }from 'react-bootstrap';
import '../css/cards2.css'

function CardsDoc(){
  return(
    <div >
     
      <Row>
          <Col md={6}>
            <Card className="cardSec4  mt-4">
                <Card.Img variant="top" src="https://www.docplanner.com/img/flag.png" className="cardIcons mx-auto mt-4" />
                    <Card.Body className="text-center">
                        <Card.Title><h4>Leader in 12 countries</h4></Card.Title>
                        <Card.Text>
                            <small>Poland, Brazil, Mexico, Spain, Italy, Turkey, Colombia, Czech Republic, Portugal, Argentina, Peru and Chile</small>
                        </Card.Text>
                    </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="cardSec4 cardStat py-4">
                <Card.Img variant="top" src="https://www.docplanner.com/img/visits.png" className="cardIcons mx-auto mt-4" />
                    <Card.Body className="text-center">
                        <Card.Title><h4>4.8 million appointments</h4></Card.Title>
                        <Card.Text>
                           <small>booked last month</small>
                        </Card.Text>
                    </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="cardSec4 cardStat py-5 mt-4">
                <Card.Img variant="top" src="https://www.docplanner.com/img/patients.png" className="cardIcons mx-auto mt-4" />
                    <Card.Body className="text-center">
                        <Card.Title><h4>61.9 mln unique patients</h4></Card.Title>
                        <Card.Text>
                            <small>visit our websites each month</small>
                        </Card.Text>
                    </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="cardSec4  py-5">
                <Card.Img variant="top" src="https://www.docplanner.com/img/doctors.png" className="cardIcons mx-auto mt-4" />
                    <Card.Body className="text-center">
                        <Card.Title><h4>92.5k active doctors</h4></Card.Title>
                        <Card.Text>
                           <small>trust our solutions</small>
                        </Card.Text>
                    </Card.Body>
            </Card>
          </Col>
       </Row>
     
    </div>
   )
 }

export default CardsDoc
