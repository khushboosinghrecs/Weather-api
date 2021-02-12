import React, { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";

const CityInput = (props) => {
  let [Error, changeError] = useState("");
  let handleInputChange = (event) => {
    props.changeCity(event.target.value);
  };

  let handleClick = () => {
    if (props.City.length == 0) {
      changeError("City is invalid");
    } else {
      props.fetchdata();
      changeError("");
    }
  };
  return (
    <Container>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>City</Form.Label>
          <Form.Control
            value={props.City}
            type="text"
            onChange={handleInputChange}
            placeholder="Enter City"
          />
          <small className="text-danger">{Error}</small>
        </Form.Group>
        <Button onClick={handleClick} variant="primary">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default CityInput;
