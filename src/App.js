import  './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/navbar';
import CardSection from './components/cards';
import CardsDoc from './components/cards2'
import Country from './components/countries'
import {Container, Row, Col, Button} from 'react-bootstrap';


function App() {
  return (
    <div>
       <NavigationBar/>

      <div className="container pt-5"> 
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
          <Col md={4} xs={12}>
          <h1>We are a global company with local culture</h1>
          </Col>
          
          <Col md={8} xs={12}>
            <Row>
              <Col md={3} xs={6}>
                <img src="imgs/znanylekarz.png"  className="tailleIcon"/>
              </Col> 
              <Col md={3} xs={6}>
                <img src="imgs/doctoralia.svg"  className="tailleIcon"/>
              </Col>           
              <Col md={3} xs={6}>
                <img src="imgs/miodottore.svg" className="tailleIcon" />
              </Col>
              <Col md={3} xs={6}>
                <img src="imgs/doktor.png"  className="tailleIcon"/>
              </Col> 
             
            </Row>

            <Row>
            <Col md={3} xs={6}>
                <img src="imgs/znanylekarz.png" className="tailleIcon"/>
              </Col>
              <Col md={3} xs={6}>
                <img src="imgs/tuotemp.png" className="tailleIconTuo pt-4"/>
              </Col>
              <Col md={3} xs={6}>
                <img src="imgs/logo-gipo.svg" className="tailleIconGip"/>
              </Col>
              <Col md={3} xs={6}>
                <img src="imgs/logo-clinicloud.svg"  className="tailleIconGip"/>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
   </div>
{/* ***************section 4*************************** */}
      <div className="py-5 section4">
        <Container>
          <Row>
            <Col>
                <h1 className="text-center pb-3">The world's biggest healthcare platform</h1>
                <small className="d-flex justify-content-center mx-5">We work from 7 offices all over the world, bringing Docplanner Group to life in a dozen countries.</small>
                 {/* <div className="">
                    <img src="imgs/sygnet.png" className="logoPng"/>
                 </div> */}
            </Col>
            <Col>
              <CardsDoc/>
            </Col>
          </Row>
        </Container>
      </div>
{/* ****************end section 4******************* */}
      <div className="py-5">
         <Container>
            <Row>
               <Col md={{ span: 6, offset: 3 }}>
                  <h1 className="text-center">Improve the lives of millions. Change yours forever</h1>
                  <small className="parg">More than 1400 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona, Istanbul, Rome, Bologna, Mexico City and Curitiba, our search for great talent never stops.</small>
               </Col>
            </Row>
         </Container>
      </div>

{/* ****************section countries********************** */}
      <div>
        <Country/>
      </div>
{/* **************************************** */}

      <div className="py-5">
        <Container>
          <Row>
            <Col>
              <h2 className="text-center">Sounds interesting? Join us now!</h2>
              <Col md={{ span: 4, offset: 4 }}>
                <Button className="text-uppercase mt-2"  variant="primary"> see all current aopenings</Button>
              </Col>
            </Col>
          </Row>
        </Container>
      </div>

 {/* *******Component footer*************** */}
  </div>


  );
}

export default App;
