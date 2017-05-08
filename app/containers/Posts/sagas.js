import { push } from 'react-router-redux';
import { take, call, put, select } from 'redux-saga/effects';
import { LOAD_POST } from './constants';

// Individual exports for testing
export function* defaultSaga() {
  // See example in containers/HomePage/sagas.js
  const { dispatch, slug, date } = yield take(LOAD_POST);
  const datePrefix = date.toISOString().match(/(.+)T/)[1];

  // TODO this is probably bad using dispatch in here like this
  dispatch(push({
    pathname: `/posts/${slug}`,

    // Kinda hacky way to pasas this along to the routes.js file
    state: datePrefix,
  }));
}

// All sagas to be loaded
export default [
  defaultSaga,
];
