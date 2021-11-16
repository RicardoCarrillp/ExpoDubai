import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,

  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import FinalNavbarAboutTeam from "components/Navbars/FinalNavbarAboutTeam.js";

import AboutTeamHeader from "components/Headers/aboutTeamHeader.js";

function AboutTeam() {

  return (
    <>
      <FinalNavbarAboutTeam />
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
                  <p>
                    <img
                      alt="..."
                      src={require("assets/img/yo2.jpg").default}
                    />
                  </p>
                </div>
                <CardBody>
                  <p>
                    <div className="author">
                      <CardTitle tag="h4">Ricardo Carrillo</CardTitle>
                      <h6 className="card-category">Developer</h6>
                    </div>
                  </p>
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
                  <p>
                    <img
                      alt="..."
                      src={require("assets/img/isaac.jpeg").default}
                    />
                  </p>
                </div>
                <CardBody>
                  <p>
                    <div className="author">
                      <CardTitle tag="h4">Isaac Castelar</CardTitle>
                      <h6 className="card-category">Developer</h6>
                    </div>
                  </p>
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
                  >
                    <i className="fa fa-instagram" />
                  </Button>

                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                  >
                    <i className="fa fa-linkedin" />
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
                      src={require("assets/img/elian.jpg").default}
                    />
                  </p>
                </div>
                <CardBody>
                  <p>
                    <div className="author">
                      <CardTitle tag="h4">Elian Vega</CardTitle>
                      <h6 className="card-category">Developer</h6>
                    </div>
                  </p>
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
                  >
                    <i className="fa fa-instagram" />
                  </Button>

                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#"
                  >
                    <i className="fa fa-linkedin" />
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
                        require("assets/img/faces/erik-lucatero-2.jpg").default
                      }
                    />
                  </p>
                </div>
                <CardBody>
                  <p>
                    <div className="author">
                      <CardTitle tag="h4">Sebastian Urueta</CardTitle>
                      <h6 className="card-category">Developer</h6>
                    </div>
                  </p>
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
                  >
                    <i className="fa fa-instagram" />
                  </Button>

                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
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
            <i className="fa fa-heart heart" /> by Utb Team.
          </h6>
          {/* <Container>
            <Row>
              <nav className="footer-nav">
                <ul>
                  <li>
                    <a
                      href="https://www.utb.edu.co/#"
                      target="_blank"
                      title="UTB Official"
                    >
                      Utb
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/utboficial/?hl=es-la"
                      target="_blank"
                      title="Follow us on Instagram"
                    >
                      <i className="fa fa-instagram" />
                    </a>
                  </li>{" "}
                  <li>
                    <a
                      href="https://www.facebook.com/utboficial"
                      target="_blank"
                      title="Like us on Facebook"
                    >
                      <i className="fa fa-facebook-square" />
                    </a>
                  </li>{" "}
                  <li>
                    <a
                      href="https://twitter.com/utboficial"
                      target="_blank"
                      title="Follow us on Twitter"
                    >
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="credits ml-auto">
                <span className="copyright">
                  © {new Date().getFullYear()}, made with{" "}
                  <i className="fa fa-heart heart" /> by Utb Team.
                </span>
              </div>
            </Row>
          </Container> */}
        </div>
      </div>
    </>
  );}

  export default AboutTeam;
