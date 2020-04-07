import React from 'react';
import { useSelector } from 'react-redux';

import TStoreState from 'types/TStoreState';

import PostTitle from 'components/molecules/PostTitle';
import PostContent from 'components/molecules/PostContent';

import Error from 'components/atoms/Error';

const PostBody: React.FunctionComponent = () => {
    const post = useSelector((state: TStoreState) => state.PostReducer.data);

    if (!post) {
        return <Error message="존재하지 않는 게시글입니다." />;
    }

    return (
        <div>
            <PostTitle title={post.title} userId={post.userId} />
            <PostContent body={post.body} />
        </div>
    );
};

export default PostBody;
