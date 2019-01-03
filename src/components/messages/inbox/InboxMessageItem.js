import React from "react";
import { Link } from "react-router-dom";

export default function InboxMessageItem(props) {
  const { id, date, fromUser, subject } = props.message;
  return (
    <div className="item">
      <div className="item-piece">{date}</div>
      <div className="item-piece">{fromUser}</div>
      <div className="item-piece">{subject}</div>
      <Link className="view-button" to={`/message-view/${id}`}>
        View
      </Link>
    </div>
  );
}
