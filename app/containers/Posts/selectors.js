import { createSelector } from 'reselect';

/**
 * Direct selector to the posts state domain
 */
const selectPostsDomain = () => state => state.get('posts');

/**
 * Other specific selectors
 */
export const makeSelectCurrentPost = () =>
  createSelector(selectPostsDomain(), substate =>
    substate.get('currentPost').toJS());

export const makeSelectCurrentNormatives = () =>
  createSelector(selectPostsDomain(), substate => substate.normatives);
/**
 * Default selector used by Posts
 */

const makeSelectPosts = () =>
  createSelector(selectPostsDomain(), substate => substate.toJS());

export default makeSelectPosts;
export { selectPostsDomain };
