

import React from 'react'
import {

  Container,
  Row,
  Col,
} from "reactstrap";
import ReactPlayer from "react-player";

// core components
import FinalNavbarAboutTeam from "components/Navbars/FinalNavbarAboutTeam.js";
import ProgramFFHeader from "components/Headers/programFFHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function programFF() {

    return (
      <>
        <>
          <FinalNavbarAboutTeam />
          <ProgramFFHeader />
          <br />
          <Container>
            <Row>
             
            </Row>
          </Container>
          <br /> <br />
          <DemoFooter />
        </>
      </>
    );
}

export default programFF;
