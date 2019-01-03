import React, { Component } from "react";

class SendMessage extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const date = event.target.elements.date.value;
    const to = event.target.elements.to.value;
    const subject = event.target.elements.subject.value;
    const body = event.target.elements.body.value;
    const message = {
      id: Number(new Date()),
      date: date,
      fromUser: this.props.userId,
      subject: subject,
      body: body
    };
    if (to && subject) {
      const { match, history, startSendingMessage } = this.props;
      const receiverId = Number(match.params.receiverId);
      startSendingMessage(message, receiverId);
      history.push("/");
    }
  }

  render() {
    const receiverId = this.props.match.params.receiverId;
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
              <label htmlFor="to">To: </label>
              <br />
              <input
                className="text"
                type="text"
                name="to"
                value={receiverId}
                disabled
              />
            </div>
            <div>
              <label htmlFor="subject">Subject: </label>
              <br />
              <input
                className="text"
                type="text"
                placeholder="Subject"
                name="subject"
              />
            </div>
            <div>
              <label htmlFor="body">Body: </label>
              <br />
              <textarea
                className="text"
                rows="4"
                cols="35"
                placeholder="Body"
                name="body"
              />
            </div>
            <button>Send Message</button>
          </form>
        </div>
      </div>
    );
  }
}

export default SendMessage;
