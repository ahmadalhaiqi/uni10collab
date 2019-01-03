import React from "react";
import { Link } from "react-router-dom";

export default function PostItem(props) {
  const { date, title, id } = props.post;
  return (
    <div className="item">
      <div className="item-piece">{date}</div>
      <div className="item-piece">{title}</div>
      <Link className="view-button" to={`/post-view/${id}`}>
        View
      </Link>
    </div>
  );
}
