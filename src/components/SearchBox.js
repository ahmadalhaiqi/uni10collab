import React, { Component } from "react";

export default class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();

    let filteredUsers = [];
    switch (e.target.elements.criteria.value) {
      case "skill":
        filteredUsers = this.props.users.filter(user =>
          user.skills.some(
            skill =>
              skill.toLowerCase().indexOf(e.target.elements.text.value) >= 0
          )
        );
        break;
      case "interest":
        filteredUsers = this.props.users.filter(user =>
          user.interests.some(
            interest =>
              interest.toLowerCase().indexOf(e.target.elements.text.value) >= 0
          )
        );
        break;
      case "both":
        filteredUsers = this.props.users.filter(
          user =>
            user.skills.some(
              skill =>
                skill.toLowerCase().indexOf(e.target.elements.text.value) >= 0
            ) ||
            user.interests.some(
              interest =>
                interest.toLowerCase().indexOf(e.target.elements.text.value) >=
                0
            )
        );
        break;
      default: // do nothing
    }
    console.log(filteredUsers);
    if (filteredUsers.length > 0) {
      this.props.loadUsers(filteredUsers);
    } else {
      this.props.startLoadingUsers();
    }

    e.target.elements.text.value = "  ";
  }

  render() {
    return (
      <div className="search">
        <img className="logo" src="logo.jpg" alt="Collaborate" />

        <h3>Search Collaborators</h3>
        <form className="form" onSubmit={this.handleSubmit}>
          <input type="radio" name="criteria" value="skill" /> Skill
          <input type="radio" name="criteria" value="interest" /> Interest
          <input type="radio" name="criteria" value="both" /> Both
          <br />
          <input
            className="text"
            type="text"
            name="text"
            placeholder="Enter a skill or interest and hit enter..."
          />
          <br />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}
