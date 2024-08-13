import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import CardRea from "./Card/Card";
const Protfolio = () => {
  return (
    <>
      <h3 className="p-5">Protfolio</h3>
      <Container fluid>
        <Row className="p-2 m-5">
          <CardRea name="WEB DESiGN" color="gray" />
          <CardRea name="Mobile DESiGN" color="black" />
          <CardRea name="LOGO DESiGN" color="gray" />
        </Row>
        <Row className="p-2 m-5">
          <CardRea name="WEB APPLICATION DEVELOPMENT" color="black" />
          <CardRea name="Mobile APPLICATION DEVELOPMENT" color="gray" />
          <CardRea name="PWA DEVELOPMENT" color="black" />
        </Row>
      </Container>
    </>
  );
};

export default Protfolio;
