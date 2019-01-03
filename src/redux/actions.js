import { database } from "../database/config";

// users
export function startAddingUser(user) {
  return dispatch => {
    return database
      .ref("users")
      .push(user)
      .then(() => {
        dispatch(addUser(user));
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function startEditingProfile(user, userId) {
  const editedUser = {};
  editedUser[userId] = {
    profile: { ...user.profile },
    interests: user.interests,
    skills: user.skills
  };
  return dispatch => {
    return database
      .ref("users")
      .update(editedUser)
      .then(() => {
        dispatch(editProfile(user, userId));
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function startLoadingUsers() {
  return dispatch => {
    return database
      .ref("users")
      .once("value")
      .then(snapshot => {
        let users = [];
        snapshot.forEach(childSnapshot => {
          users.push({ ...childSnapshot.val(), id: Number(childSnapshot.key) });
        });
        dispatch(loadUsers(users));
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function addUser(user) {
  return {
    type: "ADD_USER",
    user
  };
}

export function editProfile(user, userId) {
  return {
    type: "EDIT_PROFILE",
    user,
    userId
  };
}

export function loadUsers(users) {
  return {
    type: "LOAD_USERS",
    users
  };
}

// posts
export function startAddingPost(post) {
  return dispatch => {
    return database
      .ref("posts")
      .push(post)
      .then(() => {
        dispatch(addPost(post));
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function startRemovingPost(index, id) {
  return dispatch => {
    return database
      .ref(`post/${id}`)
      .remove()
      .then(() => {
        dispatch(removePost(index));
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function startLoadingPosts() {
  return dispatch => {
    return database
      .ref("posts")
      .once("value")
      .then(snapshot => {
        let posts = [];
        snapshot.forEach(childSnapshot => {
          posts.push(childSnapshot.val());
        });
        dispatch(loadPosts(posts));
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function addPost(post) {
  return {
    type: "ADD_POST",
    post
  };
}

export function removePost(index) {
  return {
    type: "REMOVE_POST",
    index
  };
}

export function loadPosts(posts) {
  return {
    type: "LOAD_POSTS",
    posts
  };
}

// messages
export function startSendingMessage(message, receiverId) {
  return dispatch => {
    return database
      .ref("messages/" + receiverId)
      .push(message)
      .then(() => {
        dispatch(addMessage(message, receiverId));
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function startLoadingMessages() {
  return dispatch => {
    return database
      .ref("messages")
      .once("value")
      .then(snapshot => {
        let messages = {};
        snapshot.forEach(childSnapshot => {
          messages[childSnapshot.key] = Object.values(childSnapshot.val());
        });
        dispatch(loadMessages(messages));
      });
  };
}

export function addMessage(message, receiverId) {
  return {
    type: "SEND_MESSAGE",
    message,
    receiverId
  };
}

export function loadMessages(messages) {
  return {
    type: "LOAD_MESSAGES",
    messages
  };
}
