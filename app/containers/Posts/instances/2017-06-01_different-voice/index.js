/*
 *
 * Trying Something Out
 *
 */
import { mapProps } from 'recompose';

import WhoaPost from 'containers/WhoaPost';

import whoaFile from './index.whoa';

// hacky
export default mapProps(() => whoaFile)(WhoaPost);