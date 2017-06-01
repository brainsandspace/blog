/*
 *
 * You probably should not bother reading this
 *
 */

import { mapProps } from 'recompose';

import WhoaPost from 'containers/WhoaPost';

import whoaFile from './index.whoa';

// hacky
export default mapProps(() => whoaFile)(WhoaPost);