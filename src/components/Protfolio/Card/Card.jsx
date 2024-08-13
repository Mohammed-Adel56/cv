import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
const CardRea = (props) => {
  return (
    <>
      <Col className="col-4">
        {" "}
        <Card
          border="dark"
          style={{
            width: "12rem",
            height: "12rem",
            backgroundColor: `${props.color}`,
          }}
          className="text-center justify-content-center align-content-center text-white"
        >
          <Card.Body className="justify-content-center align-content-center">
            <Card.Title className="text-center">{props.name}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default CardRea;
