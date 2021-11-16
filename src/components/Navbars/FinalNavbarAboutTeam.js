/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Button,
} from "reactstrap";

function FinalNavbarAboutTeam() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      console.log(document.documentElement.scrollTop);
      if (
        document.documentElement.scrollTop > 200 ||
        document.body.scrollTop > 200
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 201 ||
        document.body.scrollTop < 201
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar
      className={classnames("fixed-top", navbarColor)}
      color-on-scroll="300"
      expand="lg"
    >
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            to="/home"
           
           
            tag={Link}
          >
            EXPODUBAI
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink href="https://www.utb.edu.co/#" target="_blank">
                <i className="nc-icon nc-book-bookmark" /> UTB
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/aboututb">
                <i className="nc-icon nc-alert-circle-i" /> About the university
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/utbatglance">
                <i className="nc-icon nc-chart-pie-36" /> The UTB at glance
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/aboutteam">
                <i className="nc-icon nc-badge" /> About the team
              </NavLink>
            </NavItem>
            <NavItem>
              <Button className="btn-round" color="success" href="/quiz">
                <i className="nc-icon nc-book-bookmark"></i> Quiz
              </Button>
            </NavItem>
            <NavItem>
              <Button
                className="btn-round"
                color="danger"
                href="https://orbix360.com/zZ4CMYmm-"
                target="_blank"
              >
                <i className="nc-icon nc-spaceship"></i> Tour VR
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default FinalNavbarAboutTeam;
