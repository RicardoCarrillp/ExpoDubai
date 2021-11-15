import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import FinalNavbar from "components/Navbars/FinalNavbar.js";

import AboutTeamHeader from "components/Headers/aboutTeamHeader.js";
import DemoFooter from "components/Footers/DemoFooter";

function AboutTeam() {

  return (
    <>
      <FinalNavbar />
      <AboutTeamHeader />

      <div className="section section-dark text-center">
        <br />
        <br />

        <Container>
          <h2 className="title">Let's talk about us👦🧑👨‍🦱🧑</h2>
          <Row>
            <Col md="3">
              <Card className="card-profile card-plain">
                <div className="card-avatar">
                  <a
                    href="https://www.linkedin.com/in/ricardo-carrillo-082117129/"
                    onClick={(e) => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      src={require("assets/img/yo2.jpg").default}
                    />
                  </a>
                </div>
                <CardBody>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <div className="author">
                      <CardTitle tag="h4">Ricardo Carrillo</CardTitle>
                      <h6 className="card-category">Developer</h6>
                    </div>
                  </a>
                  <p className="card-description text-center">
                    I love Spider-Man And coding.
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

                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="https://www.linkedin.com/in/ricardo-carrillo-082117129/"
                    
                  >
                    <i className="fa fa-linkedin" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col md="3">
              <Card className="card-profile card-plain">
                <div className="card-avatar">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      src={require("assets/img/isaac.jpeg").default}
                    />
                  </a>
                </div>
                <CardBody>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <div className="author">
                      <CardTitle tag="h4">Isaac Castelar</CardTitle>
                      <h6 className="card-category">Developer</h6>
                    </div>
                  </a>
                  <p className="card-description text-center">
                    Teamwork is so important that it is virtually impossible for
                    you to reach the heights of your capabilities or make the
                    money that you want without becoming very good at it.
                  </p>
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-twitter" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-google-plus" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-linkedin" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col md="3">
              <Card className="card-profile card-plain">
                <div className="card-avatar">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      src={require("assets/img/elian.jpg").default}
                    />
                  </a>
                </div>
                <CardBody>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <div className="author">
                      <CardTitle tag="h4">Elian Vega</CardTitle>
                      <h6 className="card-category">Developer</h6>
                    </div>
                  </a>
                  <p className="card-description text-center">
                    Teamwork is so important that it is virtually impossible for
                    you to reach the heights of your capabilities or make the
                    money that you want without becoming very good at it.
                  </p>
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-instagram" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-google-plus" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-linkedin" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col md="3">
              <Card className="card-profile card-plain">
                <div className="card-avatar">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      src={
                        require("assets/img/faces/erik-lucatero-2.jpg").default
                      }
                    />
                  </a>
                </div>
                <CardBody>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <div className="author">
                      <CardTitle tag="h4">Sebastian Urueta</CardTitle>
                      <h6 className="card-category">Developer</h6>
                    </div>
                  </a>
                  <p className="card-description text-center">
                    The strength of the team is each individual member. The
                    strength of each member is the team. If you can laugh
                    together, you can work together, silence isn’t golden, it’s
                    deadly.
                  </p>
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-twitter" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-google-plus" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-linkedin" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <br />
        </Container>
        <div className="footer register-footer text-center">
          <h6>
            © {new Date().getFullYear()}, made with{" "}
            <i className="fa fa-heart heart" /> by Utb
          </h6>
        </div>
      </div>
    </>
  );}

  export default AboutTeam;
