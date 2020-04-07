import {
    createActionCreators,
    createReducerFunction,
    ImmerReducer
} from 'immer-reducer';

import IPostData from 'types/IPostData';
import IApiModule from 'types/IApiModule';

import ApiStatus from 'constants/ApiStatus';

interface IPostsModule extends IApiModule<IPostData[]> {}

const initialState: IPostsModule = {
    status: ApiStatus.CLEAR,
    error: null,
    data: []
};

class PostsModule extends ImmerReducer<IPostsModule> {
    /**
     * start fetch post list
     */
    public fetchPosts() {
        this.draftState = {
            status: ApiStatus.LOADING,
            error: null,
            data: []
        };
    }

    /**
     * fetch post list success
     * @param data
     */
    public fetchPostsSuccess(data: IPostData[]) {
        this.draftState = {
            ...this.draftState,
            status: ApiStatus.SUCCESS,
            error: null,
            data
        };
    }

    /**
     * fetch post list failed with error
     * @param error
     */
    public fetchPostsError(error: string) {
        this.draftState = {
            status: ApiStatus.ERROR,
            error,
            data: []
        };
    }

    /**
     * clear post list
     */
    public clearPosts() {
        this.draftState = initialState;
    }
}

export const PostsReducer = createReducerFunction(PostsModule, initialState);
export const PostsAction = createActionCreators(PostsModule);
