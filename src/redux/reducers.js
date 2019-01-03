import { combineReducers } from "redux";

function messages(state = {}, action) {
  switch (action.type) {
    case "SEND_MESSAGE":
      if (!state[action.receiverId]) {
        return { ...state, [action.receiverId]: [action.message] };
      } else {
        return {
          ...state,
          [action.receiverId]: [...state[action.receiverId], action.message]
        };
      }
    case "LOAD_MESSAGES":
      return action.messages;
    default:
      return state;
  }
}

function posts(state = [], action) {
  switch (action.type) {
    case "REMOVE_POST":
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    case "ADD_POST":
      return [...state, action.post];
    case "LOAD_POSTS":
      return action.posts;
    default:
      return state;
  }
}

function users(state = [], action) {
  switch (action.type) {
    case "ADD_USER":
      return [...state, action.user];
    case "LOAD_USERS":
      return action.users;
    case "EDIT_PROFILE":
      let newState = [];
      state.forEach(user => {
        if (user.id !== action.userId) {
          newState.push(user);
        } else {
          newState.push(action.user);
        }
      });
      return newState;
    default:
      return state;
  }
}

const rootReducer = combineReducers({ messages, posts, users });

export default rootReducer;
