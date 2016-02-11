import fetch from 'isomorphic-fetch'

export const REQUEST_PROJECT = 'REQUEST_PROJECT'
export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS'

export function requestProjects() {
  return {
    type: REQUEST_PROJECT
  }
}

export function receiveProjects(json) {
  return {
    type: RECEIVE_PROJECTS,
    projects: json.projects,
    receivedAt: Date.now()
  }
}

function fetchProjects() {
  return dispatch => {
    dispatch(requestProjects())
    return fetch('/api/projects')
      .then(req => req.json())
      .then(json => dispatch(receiveProjects(json)))
  }
}

function shouldFetchProjects(state) {
  return !state.isFetching
}

export function fetchProjectsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchProjects(getState())) {
      return dispatch(fetchProjects())
    }
  }
}
