import {call, put, takeEvery, all} from 'redux-saga/effects';
import {fetchPopularRepos} from '../utils/api';
import {
  GET_REPOS_FAILD,
  GET_REPOS_SUCCEEDED,
  GET_REPOS,
} from './../constants';

function* getPopularRepos({language}) {
  try {
    const repos = yield call(fetchPopularRepos, language);
    yield put({type: GET_REPOS_SUCCEEDED, language, repos});
  } catch (error) {
    yield put({type: GET_REPOS_FAILD, error});
  }
}

function* watchGetPopularRepos() {
  yield takeEvery(GET_REPOS, getPopularRepos);
}

export default function* rootSaga() {
  yield all([watchGetPopularRepos()]);
}
