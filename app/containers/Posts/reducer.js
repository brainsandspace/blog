/*
 *
 * Posts reducer
 *
 */

import { fromJS } from 'immutable';
import { combineReducers } from 'redux';
import { normativeReducer } from 'containers/Normative';

import { DEFAULT_ACTION, LOAD_POST } from './constants';

const initialState = fromJS({ currentPost: null });

function postReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_POST:
      return { currentPost: action.slug };
    default:
      return state;
  }
}

const postsReducer = combineReducers({ post: postReducer, normatives: normativeReducer });

export default postsReducer;
