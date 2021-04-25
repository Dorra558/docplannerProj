import React from 'react'
import {Container, Row, Col, Card, Button} from 'react-bootstrap'
import '../css/countries.css'

function Country() {
  return(
    <div>
        <Container>
            <Row>
                <Col>
                    <Card className="mb-4 cardCount">
                       <img src="imgs/warsaw.png"/>
                        <Card.Body className="d-flex justify-content-around">
                            <Card.Title>Warsaw</Card.Title>
                            <Button className="text-uppercase"  variant="primary">see openings </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="mb-4 cardCount">
                    <img src="imgs/barcelona.png"/>
                        <Card.Body className="d-flex justify-content-around">
                            <Card.Title>Barcelona</Card.Title>
                            <Button className="text-uppercase"  variant="primary">see openings </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="mb-4 cardCount">
                    <img src="imgs/istanbul.png"/> 
                        <Card.Body className="d-flex justify-content-around">
                            <Card.Title>Istanbul</Card.Title>
                            <Button className="text-uppercase"  variant="primary">see openings </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="mb-4 cardCount">
                    <img src="imgs/rome.png"/> 
                        <Card.Body className="d-flex justify-content-around">
                            <Card.Title>Rome</Card.Title>
                            <Button className="text-uppercase"  variant="primary">see openings </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="mb-4 cardCount">
                    <img src="imgs/bologna.png"/> 
                        <Card.Body className="d-flex justify-content-around">
                            <Card.Title>Bologna</Card.Title>
                            <Button className="text-uppercase"  variant="primary">see openings </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="mb-4 cardCount">
                    <img src="imgs/curitiba.png"/> 
                        <Card.Body className="d-flex justify-content-around">
                            <Card.Title>Curitiba</Card.Title>
                            <Button className="text-uppercase"  variant="primary">see openings </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="mb-4 cardCount">
                    <img src="imgs/mexico-city.png"/> 
                        <Card.Body className="d-flex justify-content-around">
                            <Card.Title>Mexico City</Card.Title>
                            <Button className="text-uppercase"  variant="primary">see openings </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
   )

 }

export default Country