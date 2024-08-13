import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

function Header() {
  return (
    <Container fluid>
      <Row>
        <Card className=" text-white p-0">
          <Card.Img src="https://placehold.it/729x270" alt="Card image" />
          <Card.ImgOverlay className="p-5 m-5">
            <Card.Title>
              <h1>Katie Reed</h1>
            </Card.Title>
            <Card.Text>Web Developer & Designer</Card.Text>
            <Button variant="danger">Go somewhere</Button>
          </Card.ImgOverlay>
        </Card>
      </Row>
    </Container>
  );
}

export default Header;
