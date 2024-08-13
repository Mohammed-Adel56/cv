import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MdEmail } from "react-icons/md";
import { MdContactPhone } from "react-icons/md";
import Button from "react-bootstrap/Button";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Stack from "react-bootstrap/Stack";

const Footer = () => {
  
  
  return (
    <>
      <Container fluid className="text-white">
        <Row
          style={{ backgroundColor: "#15120D" }}
          className="justify-content-center align-content-center  p-0 text-center"
        >
          <Col className="align-content-center">
            <h4>GET IN TOUCH</h4>
            <div>
              <MdEmail /> h13@gmail.com
            </div>
            <div>
              <MdContactPhone /> 717-885-1234
            </div>
          </Col>
          <Col className="align-content-center">
            <Button variant="secondary">Contact Me</Button>{" "}
          </Col>
          <Col className="align-content-center">
            <Stack gap={3}>
              <div className="p-2">
                {" "}
                <FaLinkedin />
                <FaFacebookF />
                <FaTwitter />
              </div>
              <div className="p-2"> © 2021 Copyright</div>
            </Stack>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
