import React from 'react'
import {

  Button,
  Card,
  CardBody,
  CardTitle,
  CardFooter,
  Container,
  Row,
  Col,
} from "reactstrap";
//import ReactPlayer from "react-player";

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
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Programs for foreigners</h2>
                <h5 className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam ut convallis mauris, quis accumsan elit. Etiam dictum
                  leo ut purus semper tempus. 
                </h5>
                <br />
              </Col>
            </Row>
          </Container>
          <br />
          <Container>
          <Row>
            <Col md="3">
              <Card className="card-profile card-plain">
                <div className="card-avatar">
                  <p>
                    <img
                      alt="..."
                      src={require("assets/img/fabio-mangione.jpg").default}
                    />
                  </p>
                </div>
                <CardBody>
                  <p>
                    <div className="author">
                      <CardTitle tag="h4">Summer school</CardTitle>
                      <h6 className="card-category">Courses</h6>
                    </div>
                  </p>
                  <p className="card-description text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam ut convallis mauris, quis accumsan elit. Etiam dictum
                    leo ut purus semper tempus.
                  </p>
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="https://www.instagram.com/rickicarrillo22/?hl=es"
                  >
                    <i className="fa fa-instagram" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col md="3">
              <Card className="card-profile card-plain">
                <div className="card-avatar">
                  <p>
                    <img
                      alt="..."
                      src={require("assets/img/fabio-mangione.jpg").default}
                    />
                  </p>
                </div>
                <CardBody>
                  <p>
                    <div className="author">
                      <CardTitle tag="h4">Spanish courses</CardTitle>
                      <h6 className="card-category">Courses</h6>
                    </div>
                  </p>
                  <p className="card-description text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam ut convallis mauris, quis accumsan elit. Etiam dictum
                    leo ut purus semper tempus.
                  </p>
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#pablo"
                  >
                    <i className="fa fa-instagram" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col md="3">
              <Card className="card-profile card-plain">
                <div className="card-avatar">
                  <p>
                    <img
                      alt="..."
                      src={require("assets/img/fabio-mangione.jpg").default}
                    />
                  </p>
                </div>
                <CardBody>
                  <p>
                    <div className="author">
                      <CardTitle tag="h4">Continuing education</CardTitle>
                      <h6 className="card-category">Courses</h6>
                    </div>
                  </p>
                  <p className="card-description text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam ut convallis mauris, quis accumsan elit. Etiam dictum
                    leo ut purus semper tempus.
                  </p>
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#pablo"
                  >
                    <i className="fa fa-instagram" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col md="3">
              <Card className="card-profile card-plain">
                <div className="card-avatar">
                  <p>
                    <img
                      alt="..."
                      src={
                        require("assets/img/fabio-mangione.jpg").default
                      }
                    />
                  </p>
                </div>
                <CardBody>
                  <p>
                    <div className="author">
                      <CardTitle tag="h4">Scholarships</CardTitle>
                      <h6 className="card-category">Courses</h6>
                    </div>
                  </p>
                  <p className="card-description text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam ut convallis mauris, quis accumsan elit. Etiam dictum
                    leo ut purus semper tempus.
                  </p>
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#pablo"
                  >
                    <i className="fa fa-instagram" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <br />
        </Container>
          <br /> <br />
          <DemoFooter />
        </>
      </>
    );
}

export default programFF;
