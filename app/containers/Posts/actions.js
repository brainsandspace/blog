/*
 *
 * Posts actions
 *
 */

import { DEFAULT_ACTION, LOAD_POST } from "./constants";

export function defaultAction() {
  return {
    type: DEFAULT_ACTION
  };
}

export function getPost(dispatch, slug, date) {
  return {
    type: LOAD_POST,
    dispatch,
    slug,
    date,
  };
}
