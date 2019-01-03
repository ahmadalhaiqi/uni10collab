import React from "react";
import PropTypes from "prop-types";
import UserItem from "./UserItem";

function UserList(props) {
  return (
    <div>
      <h3>Users</h3>
      <div className="list">
        {props.users
          .sort(function(x, y) {
            return x.name > y.name;
          })
          .map((user, index) => (
            <UserItem key={index} user={user} {...props} />
          ))}
      </div>
    </div>
  );
}

UserList.propTypes = {
  users: PropTypes.array.isRequired
};

export default UserList;
