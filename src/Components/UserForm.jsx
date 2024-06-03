import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { v4 as uuid } from "uuid";

function UserForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newUser = {
      name: name,
      email: email,
      phone: phone,
      id: uuid(),
    };
    props.addUser(newUser);
    setName("");
    setEmail("");
    setPhone("");
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User Fullname</Form.Label>
          <Form.Control
            value={name}
            onChange={handleNameChange}
            type="text"
            placeholder="Enter your fullname"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>User email</Form.Label>
          <Form.Control
            value={email}
            onChange={handleEmailChange}
            type="email"
            placeholder="Enter your email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User Phone</Form.Label>
          <Form.Control
            value={phone}
            onChange={handlePhoneChange}
            type="text"
            placeholder="Enter your phone number"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
export default UserForm;
