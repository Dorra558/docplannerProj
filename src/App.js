import  './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/navbar';
import CardSection from './components/cards';
import {Container, Row, Col} from 'react-bootstrap';

function App() {
  return (
    <div>
       <NavigationBar/>

      <div className="container"> 
       <div className="section1 py-4">
            <div className="col-md-12 d-flex justify-content-center">
               <img src="imgs/sygnet.png" />
            </div>
            <div className="col-md-12 pt-4">
              <h1 className="text-center">Making the healthcare experience more human</h1>
            </div>
        <div className="pt-5">
        <div className="row">
              <div className="col-md-6 parag">
                <p>
                We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere.
                </p>
              </div>
              <div className="col-md-6">
                <p>
                We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients.
                </p>
              </div>
            </div>
        </div>
       </div>
       </div>  

{/* ***********section Card********************* */}

     <container>
       <CardSection />
     </container>

{/* ***********section 3***************************** */}

  <div className="py-5">
    <Container>
        <Row>
          <Col md={4}>
          <h1>We are a global company with local culture</h1>
          </Col>
          
          <Col md={8}>
            <Row>
              <Col md={3} >
                <img src="imgs/znanylekarz.png"  className="tailleIcon"/>
              </Col> 
              <Col md={3}>
                <img src="imgs/doctoralia.svg"  className="tailleIcon"/>
              </Col>           
              <Col md={3}>
                <img src="imgs/miodottore.svg" className="tailleIcon" />
              </Col>
              <Col md={3} >
                <img src="imgs/doktor.png"  className="tailleIcon"/>
              </Col> 
             
            </Row>

            <Row>
            <Col md={3}>
                <img src="imgs/znanylekarz.png" className="tailleIcon"/>
              </Col>
              <Col md={3}>
                <img src="imgs/tuotemp.png" className="tailleIconTuo pt-4"/>
              </Col>
              <Col md={3}>
                <img src="imgs/logo-gipo.svg" className="tailleIconGip"/>
              </Col>
              <Col md={3}>
                <img src="imgs/logo-clinicloud.svg"  className="tailleIconGip"/>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
  </div>

    </div>
  );
}

export default App;
