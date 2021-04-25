import React from 'react'
import cards from '../css/cards.css'
import { Card, Row, Col, Container } from 'react-bootstrap'

function CardSection() {
  return (
    <div>
      <Container>
        <Row className="text-white">
          <Col>
            <Card className="cardPatient  mb-3">
              <Card.Img variant="top" className="cardIcon pt-3 pl-4" src="imgs/icon-patients.svg" />
              <Card.Body>
                <Card.Title>For Patients</Card.Title>
                <Card.Text>
                  Find a doctor, book a visit and solve any health-related doubt
                </Card.Text>

                <select className="selectCateg mt-5">
                  <option >Choose country</option>
                  <option value="http://www.doctoraliar.com">Argentina</option>
                  <option value="http://www.doctoralia.com.br">Brazil</option>
                  <option value="http://www.doctoralia.cl">Chile</option>
                  <option value="http://www.doctoralia.co">Colombia</option>
                  <option value="http://www.znamylekar.cz">Czech</option>
                  <option value="http://www.miodottore.it">Italy</option>
                  <option value="http://www.doctoralia.com.mx">Mexico</option>
                  <option value="http://www.doctoralia.pe">Peru</option>
                  <option value="http://www.znanylekarz.pl">Poland</option>
                  <option value="http://www.doctoralia.com.pt">Portugal</option>
                  <option value="http://www.doctoralia.es">Spain</option>
                  <option value="http://www.doktortakvimi.com">Turkey</option>
                </select>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="cardDoc mb-3">
              <Card.Img variant="top" src="imgs/icon-doctors.svg" className="cardIcon pt-3 pl-4" />
              <Card.Body>
                <Card.Title>For doctors</Card.Title>
                <Card.Text>
                  Save time managing visits and cut no-shows by half
              </Card.Text>

                <select className="selectCateg mt-5">
                  <option>Choose country</option>
                  <option value="http://www.doctoraliar.com">Argentina</option>
                  <option value="http://www.doctoralia.com.br">Brazil</option>
                  <option value="http://www.doctoralia.cl">Chile</option>
                  <option value="http://www.doctoralia.co">Colombia</option>
                  <option value="http://www.znamylekar.cz">Czech</option>
                  <option value="http://www.miodottore.it">Italy</option>
                  <option value="http://www.doctoralia.com.mx">Mexico</option>
                  <option value="http://www.doctoralia.pe">Peru</option>
                  <option value="http://www.znanylekarz.pl">Poland</option>
                  <option value="http://www.doctoralia.com.pt">Portugal</option>
                  <option value="http://www.doctoralia.es">Spain</option>
                  <option value="http://www.doktortakvimi.com">Turkey</option>
                </select>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="cardClic">
              <Card.Img variant="top" src="imgs/icon-clinics.svg" className="cardIcon pt-3 pl-4" />
              <Card.Body>
                <Card.Title>For Patients</Card.Title>
                <Card.Text>
                  Find a doctor, book a visit and solve any health-related doubt
              </Card.Text>

                <select className="selectCateg mt-3">
                  <option>2 to 20 specialists</option>
                  <option value="http://clinicas.doctoralia.com.br/software-de-gestao-para-clinicas-e-centros">Brazil</option>
                  <option value="http://lekar.znamylekar.cz/pro-zarizeni">Czech</option>
                  <option value="http://centrimedici.miodottore.it/saas/funzionalita">Italy</option>
                  <option value="http://clinicas.doctoralia.com.mx/software-gestion-clinicas">Mexico</option>
                  <option value="http://placowka.znanylekarz.pl/system-od-znanylekarz">Poland</option>
                  <option value="http://clinicas.doctoralia.es/software-gestion-clinicas">Spain</option>
                  <option value="http://kurumsal.doktortakvimi.com">Turkey</option>
                </select>
                <select className="selectCateg mt-1">
                  <option>More than 20 specialists</option>
                  <option value="http://clinicas.doctoralia.com.br/tuotempo">Brazil</option>
                  <option value="http://centrimedici.miodottore.it/marketplace/funzionalita">Italy</option>
                  <option value="http://clinicas.doctoralia.com.mx/tuotempo">Mexico</option>
                  <option value="http://placowka.znanylekarz.pl/poznaj-tuotempo">Poland</option>
                  <option value="http://clinicas.doctoralia.es/tuotempo">Spain</option>
                </select>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )

}

export default CardSection