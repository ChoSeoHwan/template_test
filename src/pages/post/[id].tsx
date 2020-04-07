import React, { useEffect } from 'react';
import { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';

import TStoreState from 'types/TStoreState';

import ApiStatus from 'constants/ApiStatus';

import { PostAction } from 'modules/PostModule';

import GnbLayout from 'components/templates/GnbLayout';

import PostBody from 'components/organisms/PostBody';

import Loading from 'components/atoms/Loading';
import Error from 'components/atoms/Error';

const Post: NextPage = () => {
    const dispatch = useDispatch();

    const { status, error } = useSelector(({ PostReducer }: TStoreState) => ({
        status: PostReducer.status,
        error: PostReducer.error
    }));

    // clear post data when unmount
    useEffect(
        () => () => {
            dispatch(PostAction.clearPost());
        },
        []
    );

    return (
        <GnbLayout title={'post'}>
            {status === ApiStatus.LOADING && <Loading />}
            {status === ApiStatus.ERROR && error && <Error message={error} />}
            {status === ApiStatus.SUCCESS && <PostBody />}
        </GnbLayout>
    );
};

Post.getInitialProps = async ({ store, query }) => {
    const { id } = query;
    const postId: number = parseInt(id.toString(), 10);
    store.dispatch(PostAction.fetchPost(postId));

    return {};
};

export default Post;
