import React, { Components, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

function UserItem(props) {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState(props.details.name);
  const [email, setEmail] = useState(props.details.email);
  const [phone, setPhone] = useState(props.details.phone);

  const show = () => {
    setShowModal(true);
  };
  console.log(props.details, "hi");
  const hide = () => {
    setShowModal(false);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleEdit = () => {
    let newDetails = { name: name, email: email, phone: phone };
    let mergedDetails = { ...props.details, ...newDetails };
    console.log(props.details);
    // console.log(edit);
    //     {
    //   name: name,
    //   email: email,
    //   phone: phone,
    // };
    props.editUser(props.details.id, mergedDetails);

    handleModalState();
  };

  //const handleModalState =() => {
  //setShowModal(!showModal);};

  return (
    <div>
      <h1>{props.details.name}</h1>
      <h3>{props.details.email}</h3>
      <h3>{props.details.phone}</h3>

      <Button onClick={show}>Edit</Button>
      <Button
        onClick={() => props.deleteUser(props.details.id)}
        variant="danger"
      >
        Delete
      </Button>

      <Modal show={showModal} onHide={hide}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Page</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
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

            {/* <Button variant="primary" type="submit">
              Submit
            </Button> */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hide}>
            Close
          </Button>
          <Button onClick={handleEdit} variant="primary">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default UserItem;
