import {GET_REPOS_FAILD, GET_REPOS_SUCCEEDED} from './../../constants';

export default function popularRepos(state = {error: null}, action) {
  if (action.type === GET_REPOS_SUCCEEDED) {
    return {
      ...state,
      [action.language]: action.repos,
      error: null,
    };
  } else if (action.type === GET_REPOS_FAILD) {
    return {
      ...state,
      error: action.error.message,
    };
  } else {
    return state;
  }
}
