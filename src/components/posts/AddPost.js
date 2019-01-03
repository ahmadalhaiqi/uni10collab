import React, { Component } from "react";

class AddPost extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const date = event.target.elements.date.value;
    const from = event.target.elements.from.value;
    const title = event.target.elements.title.value;
    const description = event.target.elements.description.value;
    const post = {
      id: Number(new Date()),
      date: date,
      from: from,
      title: title,
      description: description
    };
    if (title && description) {
      const { history, startAddingPost } = this.props;
      startAddingPost(post);
      history.push("/");
    }
  }

  render() {
    return (
      <div>
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="date">Date: </label>
              <br />
              <input
                className="text"
                type="text"
                name="date"
                value={new Date()}
                disabled
              />
            </div>
            <div>
              <label htmlFor="from">From: </label>
              <br />
              <input
                className="text"
                type="text"
                name="from"
                value={this.props.userId}
                disabled
              />
            </div>
            <div>
              <label htmlFor="title">Title: </label>
              <br />
              <input className="text" type="text" name="title" />
            </div>
            <div>
              <label htmlFor="subject">Description: </label>
              <br />
              <input className="text" type="text" name="description" />
            </div>
            <button>Send Post</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddPost;
