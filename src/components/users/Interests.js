import React from "react";

export default function Interests(props) {
  return (
    <div className="interests">
      <h4>Interests</h4>
      {props.interests.map((interest, index) => (
        <div key={index}>{interest}</div>
      ))}
    </div>
  );
}
