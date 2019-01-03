import React from "react";

export default function Skills(props) {
  return (
    <div className="skills">
      <h4>Skills</h4>
      {props.skills.map((skill, index) => (
        <div key={index}>{skill}</div>
      ))}
    </div>
  );
}
