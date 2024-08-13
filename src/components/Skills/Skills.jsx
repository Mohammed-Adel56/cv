import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProcessBar from "./processBar/ProcessBar";
export const Skills = () => {
  return (
    <>
      <Container fluid className="mt-5" style={{ backgroundColor: "#3D3D3D" }}>
        <Row className="justify-content-center text-center text-white">
          <Stack gap={3}>
            <h2 className="p-2">SKills</h2>
            <Row className="justify-content-center text-center">
              <p className="p-2 col-7 text-center ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque elementum rutrum nisi, non vulputate mi iaculis eu.
                Etiam in molestie ex. Vestibulum vehicula mauris rutrum,
                vestibulum mi ut, porta augue. Nulla nunc sem, venenatis id
                ipsum aliquet, suscipit imperdiet libero. Donec eu leo vitae est
                elementum sodales vitae sit amet dui. Aliquam ac sapien nibh.
                Nulla nec velit et lorem pellentesque viverra. Aliquam blandit
                tincidunt tincidunt. Fusce in velit odio.
              </p>
            </Row>

            <Container className="p-2 ">
              <Row>
                <Col className=" text-center">
                  <h4>MY FOUCES</h4>

                  <hr className="w-50 m-auto" />

                  <Stack gap={3}>
                    <div className="p-2">UI/Ux Design</div>
                    <div className="p-2">Resposive Design</div>
                    <div className="p-2">Web Design</div>
                    <div className="p-2">Mobile App Design</div>
                  </Stack>
                </Col>
                <Col>
                  <div className="p-2">
                    <ProcessBar name="HTML" process="70" />
                  </div>
                  <div className="p-2">
                    <ProcessBar name="Css" process="80" />
                  </div>

                  <div className="p-2">
                    <ProcessBar name="JavaScript" process="80" />
                  </div>
                  <div className="p-2">
                    <ProcessBar name="React" process="90" />
                  </div>
                  <div className="p-2">
                    <ProcessBar name="PhotoShop" process="80" />
                  </div>
                </Col>
              </Row>
            </Container>
          </Stack>
        </Row>
      </Container>
    </>
  );
};
export default Skills;
