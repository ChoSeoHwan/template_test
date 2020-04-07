import {
    createActionCreators,
    createReducerFunction,
    ImmerReducer
} from 'immer-reducer';

import IPostData from 'types/IPostData';
import IApiModule from 'types/IApiModule';

import ApiStatus from 'constants/ApiStatus';

interface IPostModule extends IApiModule<IPostData | null> {
    id: number | null;
}

const initialState: IPostModule = {
    status: ApiStatus.CLEAR,
    error: null,
    id: null,
    data: null
};

class PostModule extends ImmerReducer<IPostModule> {
    /**
     * start fetch post data
     */
    public fetchPost(id: number) {
        this.draftState = {
            status: ApiStatus.LOADING,
            error: null,
            id,
            data: null
        };
    }

    /**
     * fetch post data success
     * @param data
     */
    public fetchPostSuccess(data: IPostData) {
        this.draftState = {
            ...this.draftState,
            status: ApiStatus.SUCCESS,
            error: null,
            data
        };
    }

    /**
     * fetch post data failed with error
     * @param error
     */
    public fetchPostError(error: string) {
        this.draftState = {
            ...this.draftState,
            status: ApiStatus.ERROR,
            error,
            data: null
        };
    }

    /**
     * clear post data
     */
    public clearPost() {
        this.draftState = initialState;
    }
}

export const PostReducer = createReducerFunction(PostModule, initialState);
export const PostAction = createActionCreators(PostModule);
