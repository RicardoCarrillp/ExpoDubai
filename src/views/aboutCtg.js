import AboutCtgHeader from 'components/Headers/aboutctgHeader';
import FinalNavbarAboutTeam from 'components/Navbars/FinalNavbarAboutTeam';
import React from 'react'
import { Container, Row, Col } from "reactstrap";
function aboutCtg() {
    return (
      <>
        <>
          <FinalNavbarAboutTeam />
          <AboutCtgHeader />
          <br />
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="11">
                <h2 className="title">Cartagena</h2>
                <h5 className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque dapibus tempus sodales. Ut convallis vulputate
                  eros. Curabitur vel turpis imperdiet augue feugiat suscipit
                  quis vel mi. Aenean ullamcorper dolor est, in tincidunt mi
                  finibus sed. Etiam suscipit massa sit amet turpis condimentum,
                  non ultrices dui commodo. Praesent ac tellus volutpat augue
                  commodo pharetra. Quisque varius pharetra lacus sit amet
                  fermentum. Mauris condimentum non nibh eu viverra. Maecenas
                  aliquam sagittis enim. Suspendisse potenti. Suspendisse
                  vehicula vulputate venenatis. Nullam cursus luctus mauris, id
                  convallis massa laoreet vitae. Donec ipsum augue, tincidunt
                  nec dolor vel, porta venenatis nunc. Sed lacus turpis, laoreet
                  eu sapien nec, auctor feugiat dui. Etiam ut gravida lectus, ut
                  ornare magna. Donec interdum vitae lorem eget fermentum. Nam
                  non ligula sed dolor cursus tristique in ac ligula. Etiam
                  dignissim lorem vitae ipsum faucibus fringilla. Sed egestas
                  quam ac sem semper imperdiet. Suspendisse blandit nunc ut est
                  ultricies posuere. Fusce ligula massa, aliquam vel dictum in,
                  accumsan quis erat. Pellentesque consectetur et elit id
                  vestibulum. Nunc a lacinia nisl, eu vestibulum libero.
                  Suspendisse potenti. Pellentesque aliquet et dui vel
                  fringilla. Sed suscipit ultricies vestibulum. Pellentesque
                  sapien tellus, feugiat euismod massa ac, placerat dictum mi.
                  Vivamus dictum sem a ex vulputate tincidunt. Nunc ornare
                  feugiat risus, eget condimentum nulla auctor id. Quisque et
                  turpis nec purus pellentesque dignissim a a justo. Morbi vel
                  arcu libero. Orci varius natoque penatibus et magnis dis
                  parturient montes, nascetur ridiculus mus. Pellentesque
                  hendrerit, urna eu gravida mollis, lacus elit gravida ipsum,
                  non hendrerit ligula orci sit amet turpis. Mauris ac enim
                  viverra, elementum nisl quis, tincidunt ex. Pellentesque
                  pharetra nec felis eget faucibus. Nulla eros diam, sagittis eu
                  arcu at, ultricies vehicula est. Etiam rhoncus non libero et
                  vulputate. Vivamus euismod massa et ipsum pulvinar, vitae
                  viverra nunc efficitur. Aliquam semper dui a faucibus varius.
                  In congue semper lacus, sed auctor urna accumsan et. Maecenas
                  laoreet leo at ligula pellentesque, aliquam vestibulum mi
                  lobortis. Curabitur at ante aliquet, interdum odio ut,
                  ultricies mauris.
                  Enyoy!! 
                  <a href="https://www.youvisit.com/tour/cartagena">
                    <strong> https://www.youvisit.com/tour/cartagena.</strong>
                  </a>
                </h5>
                <br />
              </Col>
            </Row>
          </Container>
        </>
      </>
    );
}

export default aboutCtg
