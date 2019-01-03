import React from "react";
import InboxMessageItem from "./InboxMessageItem";

function InboxMessageList(props) {
  const messages = props.messages[props.userId] || [];
  return (
    <div>
      <h3>Inbox Messages</h3>
      <div className="list">
        {messages
          .sort(function(x, y) {
            return new Date(y.date) - new Date(x.date);
          })
          .map((message, index) => (
            <InboxMessageItem key={index} message={message} {...props} />
          ))}
      </div>
    </div>
  );
}

export default InboxMessageList;
