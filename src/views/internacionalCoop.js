
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
import IntCoopHeader from 'components/Headers/intCoopHeader';

function internacionalCoop() {
  return (
    <>
      <>
        <FinalNavbarAboutTeam />
        <IntCoopHeader />
        <br />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="10">
              <h2 className="title">International Cooperation</h2>
              <h5>
                More than 130 cooperation agreements and partners worldwide
                International Office Close to 500 outgoing students and 1.000
                incoming students from 30 countries (last 4 years) Cartagena de
                Indias Summer School{" "}
                <a href="https://www.ccyk.com.co/en/">
                  CCYK – Colombia Challenge your Knowledge
                </a>{" "}
                Visiting professor program International projects Academic
                Exchanges Double degree programs Spanish as a Second Language
                program Visiting Professors´ Program Research internships
                Virtual mobility COIL Our Research: Strategic Research Focus
                Efficient Sustainable Energy Systems Adaptation & Mitigation to
                Climate Change Urban and regional development and post-conflict
                Why study in Colombia? <strong>EXPERIENCE</strong> the quality
                of our education:
                <br />
                <strong>LEARN</strong> in one of Colombia's best universities.
                <br />
                <strong>LIVE</strong> the warmth of our people: Colombia is the
                result of a unique history which created a blend of Spanish,
                Indigenous and African customs, and Colombia is considered one
                of the happiest nations on earth.
                <br />
                <strong>EXPLORE</strong> the beauty of our landscapes: Colombia
                is the only South American country facing two oceans and is home
                to all major Latin American types of ecosystems, from the Amazon
                to the Andes, from the pristine Caribbean beaches to the waves
                of the Pacific. ENJOY Colombia's cultural richness: thanks to
                more than 40 folklore festivals and carnivals that it organizes
                each year, Colombia is home to one of the most diverse artistic,
                cultural and gastronomical scenes in Latin America.
                <br />
                <strong>DISCOVER</strong> the richness of our biodiversity:
                Colombia is one of the world's few "megadiverse" countries: it
                hosts one of the richest ranges of flora and fauna on our
                planet. <strong>FEEL</strong> the magic of our culture: a
                beautiful blend of nature, people, culture and knowledge makes
                Colombia a great campus for students looking to challenge their
                understanding of the world we live in.
              </h5>
              <h5>
                <strong>STUDY IN CARTAGENA </strong>Named a UNESCO World
                Heritage Site in 1984, it is no surprise that Cartagena is the
                birthplace of Gabriel García Márquez's magical realism and the
                jewel in the crown of Colombia's Caribbean coast. The exuberant
                atmosphere of the city, its colonial architecture and the
                abundance of cultural activities provide the perfect setting for
                students, teachers and visitors interested in an unforgettable
                academic and cultural experience. "And, over time, when I have
                to retrieve memories, I will always bring an incident from
                Cartagena, a place in Cartagena, a character in Cartagena."
                Gabriel García Márquez
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
                controls="true"
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

export default internacionalCoop;
