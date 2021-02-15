import React from "react";
import { Card, Col, Row } from "react-bootstrap";


function topStats(props) {
  let numberFormat = new Intl.NumberFormat();
  let formattedDR = numberFormat.format(props.domainRank);
  let formattedTraffic = numberFormat.format(props.organicTraffic);
  let formattedKeywords = numberFormat.format(props.totalOrganicKW);
  return (
    <Row>
      <Col md={3}>
        <Card className="border-left-info shadow p-3 mb-5">
          <Card.Body className="left-padding">
            <Row className="mini-dash-row">
              <div className="text-secondary font-weight-bold text-uppercase">Page Speed Score:</div>
            </ Row>
            <div className="h5 font-weight-bold text-secondary text-uppercase">{props.pageSpeed}</div>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card className="border-left-info shadow p-3 mb-5">
          <Card.Body className="left-padding">
            <Row className="mini-dash-row">
              <div className="text-secondary font-weight-bold text-uppercase">Overall Domain Rank:</div>
            </Row>
            <div className="h5 font-weight-bold text-secondary text-uppercase">{formattedDR}</div>
          </ Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card className="border-left-info shadow p-3 mb-5">
          <Card.Body className="left-padding">
            <Row className="mini-dash-row">
              <div className="text-secondary font-weight-bold text-uppercase">Organic Traffic:</div>
            </Row>
            <Row className="mini-dash-row">
              <div className="h5 font-weight-bold text-secondary text-uppercase">{formattedTraffic}</div>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card className="border-left-info shadow p-3 mb-5">
          <Card.Body className="left-padding">
            <Row className="mini-dash-row">
              <div className="text-secondary font-weight-bold text-uppercase">Total Keywords:</div>
            </Row>
            <Row className="mini-dash-row">
              <div className="h5 font-weight-bold text-secondary text-uppercase"><span className="completion-rate">{formattedKeywords}</span></div>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </ Row>
  );
}

export default topStats;