  
import React from "react";
import { Form, Col, Button } from "react-bootstrap";
function SearchBar(props) {
  return (
    <Form className="form-group">
  <Form.Row className="form-group">
    <Col md="12">
      <Form.Label htmlFor="Search" srOnly>
       Search
      </Form.Label>
      <Form.Control
        className="mb-2"
        onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search by URL"
          id="search"
      />
    </Col>
    </Form.Row>
    <Form.Row>
    <Col md="auto">
      <Button  onClick={props.handleFormSubmit} className="mx-2 btn">
        Search
      </Button>
    </Col>
    <Col md="auto">
      <Button onClick={props.saveSearch} className="mx-2 btn">
        Save
      </Button>
    </Col>
    <Col md="auto">
      <Button onClick={props.clearSearch} className="mx-2 btn">
        Clear
      </Button>
    </Col>
    </Form.Row>
</Form>
  );
}

export default SearchBar;