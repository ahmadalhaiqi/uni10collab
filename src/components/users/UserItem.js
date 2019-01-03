import React from "react";
import { Link } from "react-router-dom";

export default function UserItem(props) {
  const { photo, name, type } = props.user.profile;
  return (
    <div className="item">
      <div className="item-piece">
        <img className="rounded-img" src={photo} alt="User" />
      </div>
      <div className="item-piece">{name}</div>
      <div className="item-piece">{type}</div>
      <Link className="view-button" to={`/user-view/${props.user.id}`}>
        View
      </Link>
    </div>
  );
}
