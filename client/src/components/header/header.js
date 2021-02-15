import React from "react";
import { Row, Button } from "react-bootstrap";

function header(props) {
  
  return (
    <div className="jumbotron text-center dash">
    <h1 className="display-4">Mumbo<span className="site-name"></span></h1>
    <h2 className="lead"><span className="site-name">{props.Sitename}</span></h2>
    <Row className="d-flex justify-content-center" md="12">
      <Button onClick={props.saveSearch} className="mx-2 btn-sucess">
        Save
      </Button>
      <Button onClick={props.clearSearch} className="mx-2 btn-danger">
        Clear
      </Button>
    </Row>
    </div>

  );
}

export default header;