import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProfileView from "./ProfileView";
import Skills from "./Skills";
import Interests from "./Interests";

class UserView extends Component {
  render() {
    const { match, users } = this.props;
    const id = Number(match.params.id);
    const user = users.find(user => user.id === id);
    if (this.props.loading === true) {
      return <div className="loader"> ...loading </div>;
    } else if (user) {
      return (
        <div>
          <div className="user-view">
            <ProfileView user={user} />
            <Skills skills={user.skills} />
            <Interests interests={user.interests} />
          </div>
          <Link className="reply-button" to={`/send-message/${user.id}`}>
            Send a Private Message
          </Link>
        </div>
      );
    } else {
      return <h1> ... no user found</h1>;
    }
  }
}

export default UserView;
