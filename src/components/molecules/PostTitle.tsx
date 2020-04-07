import React from 'react';

interface IPostTitle {
    title: string;
    userId: string;
}

const PostTitle: React.FunctionComponent<IPostTitle> = ({ title, userId }) => (
    <h1>
        {title}
        <em>{userId}</em>
    </h1>
);

export default PostTitle;
