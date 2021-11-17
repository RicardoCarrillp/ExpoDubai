import React from "react";
import { Container, Row, Col } from "reactstrap";
import ReactPlayer from "react-player";

// core components
import FinalNavbarAboutTeam from "components/Navbars/FinalNavbarAboutTeam.js";
import UtbBannerHeader from "components/Headers/utbbannerHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function aboutUtb() {
  return (
    <>
      <>
        <FinalNavbarAboutTeam />
        <UtbBannerHeader />
        <br />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <h2 className="title">UNIVERSIDAD TECNOLOGICA DE BOLIVAR </h2>
              <h5 className="description">
                The Universidad Tecnologica de Bolivar is a private, non-profit
                university founded in 1970 and located in Cartagena de Indias,
                Colombia, a historical and cultural heritage site of humanity.
                The University, also known as UTB, is a regional university
                managed by the most important business associations in the city.
                Their purpose is “change lives with excellence education”. The
                University is recognized by their focus on inclusion, social
                leadership and innovation.
                <br />
                <strong>UTB</strong> was the first institution in the city that
                received Institutional Accreditation, which is the highest
                quality recognition granted by the Ministry of National
                Education to higher education institutions in Colombia.
                <br />
                <strong>Board of Directors:</strong> UTB is managed by the most
                important business associations in the region:
                <ul>
                  <li>
                    <strong>ANDI</strong>(National Industry Association)
                  </li>
                  <li>
                    <strong>Camacol</strong> (Colombian Builders Chamber)
                  </li>
                  <li>
                    <strong>Cartagena Chamber of Commerce</strong>
                  </li>
                  <li>
                    <strong>Fenalco</strong> (National Trader’s Federation)
                  </li>
                  <li>
                    <strong>ACOPI</strong> (Colombian Small and Medium Business
                    Association)
                  </li>
                </ul>
              </h5>
              <br />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="12">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=SKmgT9wvcXY"
                className="react-player"
                width="100%"
                playing="true"
                height="70vh"
              />
            </Col>
          </Row>
        </Container>
        <br /> <br />
        <DemoFooter />
      </>
    </>
  );
}

export default aboutUtb;
