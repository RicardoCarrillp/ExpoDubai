import React, { useEffect, useState } from 'react';
import { Collapse } from '@material-ui/core';

// reactstrap components
import {
  Button,

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
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function Home() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <>
      <FinalNavbar />
      <LandingPageHeader />
      <div className="main">
        <div className="section text-center">
        <Collapse
        in={checked}
        {...(checked ? { timeout: 3950 } : {})}
        collapsedHeight={200}
        >
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Menu</h2>
                {/* <h5 className="description">
              
                </h5>
                <br />
                <Button
                  className="btn-round"
                  color="info"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  See Details
                </Button> */}
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-success">
                    <i className="nc-icon nc-alert-circle-i" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">About the university</h4>
                    <p>
                      In this section you can learn more about the Universidad
                      Tecnologica de bolivar.
                    </p>
                    <Button
                      className="btn-link"
                      color="success"
                      href="/aboututb"
                    >
                      Visit
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-success">
                    <i className="nc-icon nc-globe-2" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">International Cooperation</h4>
                    <p>In this section you can learn...</p>
                    <Button
                      className="btn-link"
                      color="success"
                      href="/intenacionalcoop"
                    >
                      Visit
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-success">
                    <i className="nc-icon nc-zoom-split" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">The UTB at glance</h4>
                    <p>In this section you can learn...</p>
                    <Button
                      className="btn-link"
                      color="success"
                      href="/utbatglance"
                    >
                      Visit
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-success">
                    <i className="nc-icon nc-tv-2" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Programs for foreigners</h4>
                    <p>In this section you can learn...</p>
                    <Button
                      className="btn-link"
                      color="success"
                      href="/programff"
                    >
                      Visit
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-success">
                    <i className="nc-icon nc-album-2" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">About Cartagena</h4>
                    <p className="description">
                      In this section you can learn more about Cartagena
                      loading.
                    </p>
                    <Button
                      className="btn-link"
                      color="success"
                      href="/aboutctg"
                    >
                      Visit
                    </Button>
                  </div>
                </div>
              </Col>

              <Col md="3">
                <div className="info">
                  <div className="icon icon-success">
                    <i className="nc-icon nc-spaceship" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">The University Virtual Tour</h4>
                    <p>In this section you can learn...</p>
                    <Button
                      className="btn-link"
                      color="success"
                      href="https://orbix360.com/zZ4CMYmm-"
                    >
                      Visit
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-success">
                    <i className="nc-icon nc-single-copy-04" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Quiz</h4>
                    <p>In this section you can learn...</p>
                    <Button className="btn-link" color="success" href="/quiz">
                      visit
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-success">
                    <i className="nc-icon nc-badge" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">About the team</h4>
                    <p>In this section you can learn...</p>
                    <Button
                      className="btn-link"
                      color="success"
                      href="/aboutteam"
                    >
                      Visit
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          </Collapse>
        </div>

        <div className="section landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Keep in touch?</h2>
                <Form className="contact-form">
                  <Row>
                    <Col md="6">
                      <label>Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="text" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Message</label>
                  <Input
                    placeholder="Tell us your thoughts and feelings..."
                    type="textarea"
                    rows="4"
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="btn-fill" color="success" size="lg">
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default Home;
