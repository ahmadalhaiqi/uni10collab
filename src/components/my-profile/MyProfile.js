import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProfileView from "../users/ProfileView";
import MySkills from "./MySkills";
import MyInterests from "./MyInterests";

class MyProfile extends Component {
  render() {
    const { users, userId } = this.props;
    const user = users.find(user => user.id === userId);
    if (this.props.loading === true) {
      return <div className="loader"> ...loading </div>;
    } else if (user) {
      return (
        <div>
          <div className="user-view">
            <ProfileView user={user} />
            <MySkills skills={user.skills} />
            <MyInterests interests={user.interests} />
          </div>
          <Link className="reply-button" to="edit-profile">
            Edit My Profile
          </Link>
        </div>
      );
    } else {
      return <h1> ... no user found</h1>;
    }
  }
}

export default MyProfile;
