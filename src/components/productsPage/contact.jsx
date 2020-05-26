import React from "react";
//react-bootstrap
import { Row, Col, Table, Container } from "react-bootstrap";
//assets
import logo from "../../assets/logo.png";

const Contact = () => {
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
                  <img src={logo} alt="image" width="150px" height="auto" />
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
        {/* Contact Table */}
        <Col className="col-12 col-md-4">
          <hr />
          <Table responsive borderless size="sm">
            <tbody>
              <tr>
                <td className="pl-0 pr-0 basicDescriptionText">
                  {" "}
                  <strong>Phone nr:</strong>
                </td>
                <td className="basicDescriptionText">01771234567</td>
              </tr>
              <tr>
                <td className="pl-0 pr-0 basicDescriptionText">
                  {" "}
                  <strong>Email:</strong>
                </td>
                <td className="basicDescriptionText">studio@glamourhochzeit.eu</td>
              </tr>
              <tr>
                <td className="pl-0 pr-0 basicDescriptionText">
                  {" "}
                  <strong>Address:</strong>
                </td>
                <td className="basicDescriptionText">
                Edisonstraße 63/2
                12459 Berlin
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};
export default Contact;
