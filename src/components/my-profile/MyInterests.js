import React from "react";

export default function MyInterests(props) {
  return (
    <div className="interests">
      <h4>My Interests</h4>
      {props.interests.map((interest, index) => (
        <div key={index}>{interest}</div>
      ))}
    </div>
  );
}
