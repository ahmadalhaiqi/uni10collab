import React, { Component } from "react";
import { Link } from "react-router-dom";

class PostView extends Component {
  render() {
    const { match, posts } = this.props;
    const id = Number(match.params.id);
    const post = posts.find(post => post.id === id);
    if (this.props.loading === true) {
      return <div className="loader"> ...loading </div>;
    } else if (post) {
      return (
        <div className="single-post">
          <table>
            <tbody>
              <tr>
                <td>
                  <strong>Date</strong>
                </td>
                <td>{post.date}</td>
              </tr>
              <tr>
                <td>
                  <strong>From</strong>
                </td>
                <td>{post.from}</td>
              </tr>
              <tr>
                <td>
                  <strong>Title</strong>
                </td>
                <td>{post.title}</td>
              </tr>
              <tr>
                <td>
                  <strong>Description</strong>
                </td>
                <td>{post.description}</td>
              </tr>
            </tbody>
          </table>
          <Link className="reply-button" to={`/send-message/${post.from}`}>
            Reply to Post Creator
          </Link>
        </div>
      );
    } else {
      return <h1> ... no post found</h1>;
    }
  }
}

export default PostView;
