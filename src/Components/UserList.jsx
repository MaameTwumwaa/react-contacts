import React, { Components } from "react";
import UserItem from "./UserItem";

function UserList(props) {
  return (
    <div>
      <h1>User list component</h1>;
      {props.users.map((user) => {
        return (
          <UserItem
            key={user.id}
            details={user}
            editUser={props.editUser}
            deleteUser={props.deleteUser}
          />
        );
      })}
    </div>
  );
}

export default UserList;
