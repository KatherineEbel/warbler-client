import { ADD_MESSAGE, LOAD_MESSAGES, REMOVE_MESSAGE } from '../actionTypes'

const messages = (state = [], action) => {
  switch (action.type) {
    case LOAD_MESSAGES:
      return [...action.messages]
    case REMOVE_MESSAGE: return state.filter(message => message._id !== action.id);
    default: return state;
    case ADD_MESSAGE:
      return [...state, action.message];
  }
}

export default messages;