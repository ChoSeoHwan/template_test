import { takeEvery, put, call } from 'redux-saga/effects';

import axios from 'libs/axios';

import Domain from 'constants/Domain';

import { PostsAction } from 'modules/PostsModule';

// call posts list api
function fetchPostsApi() {
    return axios.get(`${Domain.API_URL}/posts`);
}

// get posts list saga
function* fetchPostsSaga() {
    try {
        const response = yield call(fetchPostsApi);

        yield put(PostsAction.fetchPostsSuccess(response.data));
    } catch (error) {
        yield put(PostsAction.fetchPostsError(error.message));
    }
}

export function* PostsSaga() {
    yield takeEvery<ReturnType<typeof PostsAction.fetchPosts>>(
        PostsAction.fetchPosts.type,
        () => fetchPostsSaga()
    );
}
