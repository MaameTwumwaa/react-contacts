import React, { useState } from "react";
import UserList from "./Components/UserList";
import UserForm from "./Components/UserForm";
import { Container, Row, Col } from "react-bootstrap";
import { v4 as uuid } from "uuid";

function AppR() {
  const [users, setUsers] = useState([
    { name: "Tony", email: "tony@email.com", phone: "0234578989", id: uuid() },
    { name: "Eric", email: "eric@email.com", phone: "3847490076", id: uuid() },
    { name: "Alex", email: "alex@email.com", phone: "7859300340", id: uuid() },
    {
      name: "Grace",
      email: "grace@email.com",
      phone: "8482288048",
      id: uuid(),
    },
  ]);

  const addNewUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const editUser = (userId, newUserDetails) => {
    console.log(userId, newUserDetails);
    let arr = users.map((users) => {
      if (users.id === userId) {
        return newUserDetails;
      } else {
        return users;
      }
    });
    setUsers(arr);
  };

  const deleteUser = (userId) => {
    let filteredArr = users.filter((user) => {
      if (user.id !== userId) return user;
    });
    setUsers(filteredArr);
  };

  return (
    <Container>
      <Row>
        <Col>
          <UserForm addUser={addNewUser} />
        </Col>

        <Col>
          <UserList editUser={editUser} deleteUser={deleteUser} users={users} />
        </Col>
      </Row>
    </Container>
  );
}

export default AppR;
