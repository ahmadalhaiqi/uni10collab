import React from "react";
import PropTypes from "prop-types";
import PostItem from "./PostItem";

function PostList(props) {
  return (
    <div>
      <h3>Posts</h3>
      <div className="list">
        {props.posts
          .sort(function(x, y) {
            return new Date(y.date) - new Date(x.date);
          })
          .map((post, index) => (
            <PostItem key={index} post={post} {...props} />
          ))}
      </div>
    </div>
  );
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PostList;
