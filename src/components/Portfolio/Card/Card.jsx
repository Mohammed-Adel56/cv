import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import PropTypes from 'prop-types';
import './Card.css';

const CardRea = (props) => {
  const cardClasses = `portfolio-card portfolio-card-${props.color} text-center justify-content-center align-content-center text-white`;
  
  return (
    <>
      <Col className="col-4">
        {" "}
        <Card
          border="dark"
          className={cardClasses}
        >
          <Card.Body className="justify-content-center align-content-center">
            <Card.Title className="text-center">{props.name}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

CardRea.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default CardRea;
