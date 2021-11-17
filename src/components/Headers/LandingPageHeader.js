import React, { useEffect, useState } from 'react';
import { Button, Container } from "reactstrap";
import {IconButton, Collapse } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import { Link as Scroll } from 'react-scroll';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Powerslap from "../../assets/video/utb2.mp4";
import logo from "../../assets/img/logoblanco.png";
function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  const useStyles= makeStyles((theme)=>({
    appbar: {
      fontFamily:"Nunito",
    },
    greentext:{
      color:"#18B0D1 ",
      fontFamily:"Nunito",
    },
    goDown: {
      color: '#5AFF3D',
      fontSize: '3rem',
    }
  }));

  const classes=useStyles();

  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <>
      <div
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
      <video 
        autoPlay 
        loop 
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1"
        }}
        >
          <source src={Powerslap} type="video/mp4" />
          </video>
        <div className="filter" />
        <Collapse
        in={checked}
        {...(checked ? { timeout: 3000 } : {})}
        collapsedHeight={1}
        >
          <Container>
          <div className="motto text-center">
             <img src={logo}
               height="260px" 
            width="666px"
          /> 
          <br/>
           {/* <h3 className={classes.appbar}>Te damos la bienvenida a un mundo de conocimiento UTB para tu vida.</h3>*/}
            <br />
            <Button
              href="https://www.youtube.com/watch?v=FkfKqE9dFZ4&ab_channel=UniversidadTecnol%C3%B3gicadeBol%C3%ADvar"
              className="btn-round mr-1"
              color="neutral"
              target="_blank"
              outline
            >
              <i className="fa fa-play" />
              Nuestro campus.
            </Button>
            <Scroll to="place-to-visit" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
          </div>
          </Container>
        </Collapse>
      </div>
    </>
  );
}

export default LandingPageHeader;