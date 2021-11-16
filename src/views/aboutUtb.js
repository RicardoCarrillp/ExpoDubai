import React from 'react'
import {

  Container,
  Row,
  Col,
} from "reactstrap";
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
                <h2 className="title">UTB</h2>
                <h5 className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam ut convallis mauris, quis accumsan elit. Etiam dictum
                  leo ut purus semper tempus. Donec elit ex, elementum vitae
                  arcu sit amet, mattis iaculis magna. Sed et molestie arcu.
                  Duis dictum, mauris at fermentum finibus, eros odio cursus
                  nisl, ac rutrum magna enim eget mi. Mauris consectetur mattis
                  convallis. Phasellus accumsan purus lacus, sed tristique dolor
                  bibendum et. Vivamus eget vehicula lacus. Sed ut purus vitae
                  neque pretium porta. Nulla facilisi. Donec eget urna ut metus
                  sodales luctus id non nunc. Sed convallis mattis justo, in
                  tristique nisi. Nullam non est euismod, bibendum felis eget,
                  porttitor mi. Fusce vitae dui in justo hendrerit euismod vel
                  lobortis odio. Sed ultrices sed dolor non commodo.
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
