import React from "react";
//react-bootstrap
import { Row, Col, Table, Container } from "react-bootstrap";
//assets
import logo from "../../assets/logo.png";

const About = () => {
  return (
    <Container className="col-12">
      <Row className="col-12">
        {/* Portrait Image */}
        <Col className="col-12 col-md-4">
          <hr />
          <Table responsive borderless size="sm">
            <tbody>
              <tr>
                <td className="pl-0 pr-0 textCentre basicDescriptionText">
          <img src={logo}
             alt="image"
             width="150px"
             height="auto"
          />
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
           {/* About Description*/}
        <Col className="col-12 col-md-8">
          <hr />
          <div className="basicDescriptionText">
            <div>
              <div>
                "Every portrait that is painted with feeling is a portrait of
                the artist, not of the sitter"
              </div>

              <div>Oscar Wilde</div>

              <div>
                People and space are an inspiration for me in photography.
                Photographs depict the world of individuals, the concept of the
                surrounding reality. The images shows the individuality of
                people and their environment. Every person can be represented by
                the image in various ways - from the photographer and the
                "actor" depends on what others will see the photographs. I like
                people, their stories and photography. I have found that it is
                actually very hard work to tell these stories in the best way,
                but work that I thoroughly enjoy.
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default About;
