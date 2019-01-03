import React, { Component } from "react";
import SearchBox from "./SearchBox";
import UserList from "../components/users/UserList";
import UserView from "../components/users/UserView";
import PostList from "../components/posts/PostList";
import AddPost from "../components/posts/AddPost";
import PostView from "../components/posts/PostView";
import InboxMessageList from "../components/messages/inbox/InboxMessageList";
import InboxMessageView from "../components/messages/inbox/InboxMessageView";
import SendMessage from "../components/messages/SendMessage";
import MyProfile from "../components/my-profile/MyProfile";
import MyProfileEdit from "../components/my-profile/MyProfileEdit";
import { Route, Link } from "react-router-dom";

class Main extends Component {
  state = { loading: true, userId: 1 };

  componentDidMount() {
    this.props.startLoadingMessages().then(() => {
      this.setState({ loading: false });
    });
    this.props.startLoadingPosts().then(() => {
      this.setState({ loading: false });
    });
    this.props.startLoadingUsers().then(() => {
      this.setState({ loading: false });
    });
  }

  render() {
    return (
      <div>
        <h1>
          <Link to="/">Uni10Collab</Link>
        </h1>
        <div className="button-container">
          <Link className="link-button" to="/">
            Search
          </Link>
          <Link className="link-button" to="/posts">
            Posts
          </Link>
          <Link className="link-button" to="/messages">
            Inbox
          </Link>
          <Link className="link-button" to="/my-profile">
            My Profile
          </Link>
          <Link className="link-button" to="/add-post">
            Add Post
          </Link>
        </div>

        <Route
          exact
          path="/"
          render={({ history }) => (
            <div>
              <SearchBox {...this.props} />
              <UserList {...this.props} onHistory={history} />
            </div>
          )}
        />

        <Route
          path="/posts"
          render={({ history }) => (
            <PostList {...this.props} onHistory={history} />
          )}
        />

        <Route
          path="/messages"
          render={({ history }) => (
            <InboxMessageList
              {...this.props}
              onHistory={history}
              userId={this.state.userId}
            />
          )}
        />

        <Route
          path="/my-profile"
          render={({ history }) => (
            <MyProfile
              {...this.props}
              onHistory={history}
              userId={this.state.userId}
            />
          )}
        />

        <Route
          path="/edit-profile"
          render={params => (
            <MyProfileEdit
              {...this.props}
              {...params}
              userId={this.state.userId}
            />
          )}
        />

        <Route
          path="/add-post"
          render={params => (
            <AddPost {...this.props} {...params} userId={this.state.userId} />
          )}
        />

        <Route
          path="/post-view/:id"
          render={params => (
            <PostView
              loading={this.state.loading}
              {...this.props}
              {...params}
            />
          )}
        />

        <Route
          path="/user-view/:id"
          render={params => (
            <UserView
              loading={this.state.loading}
              {...this.props}
              {...params}
            />
          )}
        />

        <Route
          path="/message-view/:id"
          render={params => (
            <InboxMessageView
              loading={this.state.loading}
              {...this.props}
              {...params}
              userId={this.state.userId}
            />
          )}
        />

        <Route
          path="/send-message/:receiverId"
          render={params => (
            <SendMessage
              {...this.props}
              {...params}
              userId={this.state.userId}
            />
          )}
        />
      </div>
    );
  }
}

export default Main;
