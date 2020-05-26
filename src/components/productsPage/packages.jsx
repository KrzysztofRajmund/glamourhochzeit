import React from "react";
//react-bootstrap
import { Row, Col, Table, Container } from "react-bootstrap";

const Packages = () => {
  return (
    <Container className="col-12">
      <Row className="col-12">
        {/* Packages Table */}
        <Col className="col-12 col-md-4">
          <hr />
          <Table responsive borderless size="sm">
            <tbody>
              <tr>
                <td className="pl-0 pr-0 basicDescriptionText">
                  {" "}
                  <strong>Price:</strong>
                </td>
                <td className="basicDescriptionText">€850</td>
              </tr>
              <tr>
                <td className="pl-0 pr-0 basicDescriptionText">
                  {" "}
                  <strong>Package:</strong>
                </td>
                <td className="basicDescriptionText">Silver Package</td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col className="col-12 col-md-8">
          <hr />
          <div className="basicDescriptionText">
          <div><strong>Photography Package</strong></div>
            <div>
              - coverage from bride preparation until first dance + evening
              coverage
            </div>
            <div>- printed Photo Album</div>
            <div>- Online gallery</div>
          </div>
        </Col>
      </Row>
      <Row className="col-12">
        {/* Packages Table Two */}
        <Col className="col-12 col-md-4">
          <hr />
          <Table responsive borderless size="sm">
            <tbody>
              <tr>
                <td className="pl-0 pr-0 basicDescriptionText">
                  {" "}
                  <strong>Price:</strong>
                </td>
                <td className="basicDescriptionText">€999</td>
              </tr>
              <tr>
                <td className="pl-0 pr-0 basicDescriptionText">
                  {" "}
                  <strong>Package:</strong>
                </td>
                <td className="basicDescriptionText">Golden Package</td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col className="col-12 col-md-8">
          <hr />
          <div className="basicDescriptionText">
            <div><strong>Photography + Short Video Clip Package</strong></div>
            <div>
            - coverage from bride preparation until first dance + evening coverage
            </div>
            <div>- printed Photo Album</div>
            <div>- Online gallery</div>
            <div>- Video Clip (up to 10min)</div>
          </div>
        </Col>
      </Row>
      <Row className="col-12">
        {/* Packages Table Three */}
        <Col className="col-12 col-md-4">
          <hr />
          <Table responsive borderless size="sm">
            <tbody>
              <tr>
                <td className="pl-0 pr-0 basicDescriptionText">
                  {" "}
                  <strong>Price:</strong>
                </td>
                <td className="basicDescriptionText">€1499</td>
              </tr>
              <tr>
                <td className="pl-0 pr-0 basicDescriptionText">
                  {" "}
                  <strong>Package:</strong>
                </td>
                <td className="basicDescriptionText">Deluxe Package</td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col className="col-12 col-md-8">
          <hr />
          <div className="basicDescriptionText">
            <div><strong>Photography + Videography Package</strong></div>
            <div>- 1 x head photographer</div>
            <div>- 1 x head videographer</div>
            <div>
            - coverage from bride preparation until first dance + evening coverage
            </div>
            <div>- Deluxe Photo Book</div>
            <div>- Online gallery</div>
            <div>- Video Clip (up to 25min)</div>
            <div>- Full videography (up to 90 min)</div>
          </div>
        </Col>
      </Row>
      
    </Container>
  );
};
export default Packages;
