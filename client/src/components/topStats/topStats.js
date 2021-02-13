import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./style.css";


function topStats(props) {

  return (
    <Row>
      <Col md={3}>
        <Card className="border-left-info shadow p-3 mb-5 bg-white rounded">
          <Card.Body className="left-padding">
            <Row className="mini-dash-row">
              <div className="text-info font-weight-bold text-uppercase">Page Speed Score:</div>
            </ Row>
            <p>{props.pageSpeed}</p>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card className="border-left-info shadow p-3 mb-5 bg-white rounded">
          <Card.Body className="card-body left-padding">
            <Row className="mini-dash-row">
              <div className="text-info font-weight-bold text-uppercase">Overall Domain Rank:</div>
            </Row>
            <p>{props.domainRank}</p>
          </ Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card className="border-left-info shadow p-3 mb-5 bg-white rounded">
          <Card.Body className="left-padding">
            <Row className="mini-dash-row">
              <div className="text-info font-weight-bold text-uppercase">Projected Organic Traffic:{props.organicTraffic}</div>
            </Row>
            <p>{props.pageSpeed}</p>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card className="border-left-info shadow p-3 mb-5 bg-white rounded">
          <Card.Body className="left-padding">
            <Row className="mini-dash-row">
              <div className="text-info font-weight-bold text-uppercase">Total KW's:</div>
            </Row>
            <Row className="mini-dash-row">
              <div className="h5 font-weight-bold text-secondary text-uppercase"><span className="completion-rate">{props.totalOrganicKW}</span></div>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </ Row>
  );
}

export default topStats;