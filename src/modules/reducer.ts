import { combineReducers } from 'redux';

import { PostsReducer } from 'modules/PostsModule';
import { PostReducer } from 'modules/PostModule';

// root reducer
export default combineReducers({
    PostsReducer,
    PostReducer
});
