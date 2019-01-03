import React from "react";

export default function MySkills(props) {
  return (
    <div className="skills">
      <h4>My Skills</h4>
      {props.skills.map((skill, index) => (
        <div key={index}>{skill}</div>
      ))}
    </div>
  );
}
