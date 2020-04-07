import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import TStoreState from 'types/TStoreState';

import PostsItem from 'components/molecules/PostsItem';

import Error from 'components/atoms/Error';

const PostsList: FC = () => {
    const posts = useSelector((state: TStoreState) => state.PostsReducer.data);

    if (posts.length === 0) {
        return <Error message="게시글이 없습니다." />;
    }

    return (
        <ul>
            {posts.map((post) => (
                <PostsItem {...post} key={post.id} />
            ))}
        </ul>
    );
};

export default PostsList;
