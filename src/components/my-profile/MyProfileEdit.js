import React, { Component } from "react";

class MyProfileEdit extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.user = this.props.users.find(user => user.id === this.props.userId);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { history, startEditingProfile, userId } = this.props;
    const photo = event.target.elements.photo.value;
    const name = event.target.elements.name.value;
    const type = event.target.elements.type.value;
    const college = event.target.elements.college.value;
    const department = event.target.elements.department.value;
    const bio = event.target.elements.bio.value;
    const editedUser = {
      id: userId,
      profile: {
        photo: photo,
        name: name,
        type: type,
        college: college,
        department: department,
        bio: bio
      },
      interests: this.user.interests,
      skills: this.user.skills
    };
    startEditingProfile(editedUser, userId);
    history.push("/");
  }

  render() {
    const profile = this.user.profile;
    return (
      <div>
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="photo">Photo: </label>
              <br />
              <input
                className="text"
                type="text"
                name="photo"
                defaultValue={profile.photo}
              />
            </div>
            <div>
              <label htmlFor="name">Name: </label>
              <br />
              <input
                className="text"
                type="text"
                name="name"
                defaultValue={profile.name}
              />
            </div>
            <div>
              <label htmlFor="type">Type: </label>
              <br />
              <input
                className="text"
                type="text"
                name="type"
                defaultValue={profile.type}
              />
            </div>
            <div>
              <label htmlFor="college">College: </label>
              <br />
              <input
                className="text"
                type="text"
                name="college"
                defaultValue={profile.college}
              />
            </div>
            <div>
              <label htmlFor="department">Department: </label>
              <br />
              <input
                className="text"
                type="text"
                name="department"
                defaultValue={profile.department}
              />
            </div>
            <div>
              <label htmlFor="bio">Bio: </label>
              <br />
              <textarea
                className="text"
                rows="4"
                cols="35"
                name="bio"
                defaultValue={profile.bio}
              />
            </div>
            <button>Save</button>
          </form>
        </div>
      </div>
    );
  }
}

export default MyProfileEdit;
