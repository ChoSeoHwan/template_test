import React from 'react';
import Link from 'next/link';

import IPostData from 'types/IPostData';

const PostsItem: React.FunctionComponent<IPostData> = ({
    id,
    userId,
    title
}) => (
    <li>
        <p>
            <strong>{userId}</strong>
            <Link href={'/post/[id]'} as={`/post/${id}`}>
                <a>{title}</a>
            </Link>
        </p>
    </li>
);
export default PostsItem;
