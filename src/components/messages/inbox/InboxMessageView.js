import React, { Component } from "react";
import { Link } from "react-router-dom";

class InboxMessageView extends Component {
  render() {
    const { match, messages } = this.props;
    const id = Number(match.params.id);
    const userMessages = messages[this.props.userId] || [];
    const message = userMessages.find(message => message.id === id);
    if (this.props.loading === true) {
      return <div className="loader"> ...loading </div>;
    } else if (message) {
      return (
        <div className="single-post">
          <table>
            <tbody>
              <tr>
                <td>
                  <strong>Date</strong>
                </td>
                <td>{message.date}</td>
              </tr>
              <tr>
                <td>
                  <strong>From</strong>
                </td>
                <td>{message.fromUser}</td>
              </tr>
              <tr>
                <td>
                  <strong>Subject</strong>
                </td>
                <td>{message.subject}</td>
              </tr>
              <tr>
                <td>
                  <strong>Body</strong>
                </td>
                <td>{message.body}</td>
              </tr>
            </tbody>
          </table>
          <Link className="reply-button" to={`/send-message/${message.from}`}>
            Reply to Sender
          </Link>
        </div>
      );
    } else {
      return <h1> ... no message found</h1>;
    }
  }
}

export default InboxMessageView;
