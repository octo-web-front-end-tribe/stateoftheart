import {
  REQUEST_PROJECTS, RECEIVE_PROJECTS
} from './actions'

const reducer = (state = {
  isFetching: false,
  items: []
}, action) => {
  switch (action.type) {
    case REQUEST_PROJECTS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_PROJECTS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.projects,
        lastUpdated: action.receivedAt
      })
    default:
      return state;
  }
};

export default reducer
