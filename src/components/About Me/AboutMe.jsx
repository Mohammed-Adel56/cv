import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const AboutMe = () => {
  return (
    <>
      <Container className="m-4">
        <Row>
          <Col>
            <h2>About Me </h2>
          </Col>
          <Col>
            <p>
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Proin tincidunt quis nulla at molestie. Curabitur bibendum, neque
              a aliquet pretium, felis augue condimentum ex, et tincidunt tortor
              lacus vel nisi. Curabitur eu sapien viverra, dignissim neque eu,
              viverra nisl. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Pellentesque orci ex,
              rhoncus aliquam ipsum vel, egestas fermentum lectus. Pellentesque
              tellus nunc, efficitur vitae diam at, dignissim ullamcorper ex.
              Curabitur accumsan tellus leo, vel accumsan quam sollicitudin a.
              Pellentesque eu sollicitudin dui, quis imperdiet ligula. Curabitur
              a congue odio. Pellentesque pretium metus in mattis maximus. Nunc
              elementum dolor turpis, id facilisis ligula dapibus sit amet.
              Phasellus bibendum at ante quis tristique. Fusce eget justo
              molestie, consectetur neque vel, pulvinar velit. Vivamus interdum
              tellus in bibendum pulvinar.
            </p>
            <Button variant="primary">Go somewhere</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutMe;
