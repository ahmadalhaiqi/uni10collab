import React from "react";

export default function ProfileView(props) {
  const user = props.user;
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <strong />
            </td>
            <td>
              <img src={user.profile.photo} alt="User" />
            </td>
          </tr>
          <tr>
            <td>
              <strong>Name</strong>
            </td>
            <td>{user.profile.name}</td>
          </tr>
          <tr>
            <td>
              <strong>Type</strong>
            </td>
            <td>{user.profile.type}</td>
          </tr>
          <tr>
            <td>
              <strong>College</strong>
            </td>
            <td>{user.profile.college}</td>
          </tr>
          <tr>
            <td>
              <strong>Department</strong>
            </td>
            <td>{user.profile.department}</td>
          </tr>
          <tr>
            <td>
              <strong>Bio</strong>
            </td>
            <td>{user.profile.bio}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
