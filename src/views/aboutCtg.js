import DemoFooter from 'components/Footers/DemoFooter';
import AboutCtgHeader from 'components/Headers/aboutctgHeader';
import FinalNavbarAboutTeam from 'components/Navbars/FinalNavbarAboutTeam';
import React from 'react'
import Iframe from 'react-iframe'
import { Container, Row, Col } from "reactstrap";
function aboutCtg() {
    return (
      <>
        <>
          <FinalNavbarAboutTeam />
          <AboutCtgHeader />
          <br />
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="12">
                <h2 className="title">Cartagena</h2>
                <h5 className="description">
                  Named a UNESCO World Heritage Site in 1984, it is no surprise
                  that Cartagena is the birthplace of Gabriel García Márquez's
                  magical realism and the jewel in the crown of Colombia's
                  Caribbean coast. The exuberant atmosphere of the city, its
                  colonial architecture and the abundance of cultural activities
                  provide the perfect setting for students, teachers and
                  visitors interested in an unforgettable academic and cultural
                  experience. "And, over time, when I have to retrieve memories,
                  I will always bring an incident from Cartagena, a place in
                  Cartagena, a character in Cartagena."
                  <strong>Gabriel García Márquez</strong> <br />
                  Enyoy!
                </h5>
                <br />
                <Iframe
                  src="https://www.youvisit.com/tour/cartagena"
                  frameborder="0"
                  allowfullscreen
                  width="100%"
                  height="120%"
                ></Iframe>
               
              </Col>
            </Row>
          </Container>
          <br />
          <br />{" "}
        </>
     
      </>
    );
}

export default aboutCtg
