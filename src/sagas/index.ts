import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';

import { PostsSaga } from 'sagas/PostsSaga';
import { PostSaga } from 'sagas/PostSaga';

// root saga
function* rootSaga() {
    yield all([PostsSaga(), PostSaga()]);
}

// saga middleware object
export let sagaMiddleware: ReturnType<typeof createSagaMiddleware>;

// saga running task
export let sagaTask: ReturnType<ReturnType<typeof createSagaMiddleware>['run']>;

// create new saga middleware
export const createNewSagaMiddleware = () => {
    sagaMiddleware = createSagaMiddleware();
};

// start saga middleware
export const runSagaMiddleware = () => {
    sagaTask = sagaMiddleware.run(rootSaga);
};
