import React from 'react';

import { axiosMock } from 'libs/axios';
import render from 'libs/test-utils';

import Domain from 'constants/Domain';

import posts from 'data/posts.json';

import { PostsAction } from 'modules/PostsModule';
import { initStore } from 'modules/store';

import PostsList from 'components/organisms/PostsList';

describe('<PostsList/>', () => {
    it('render list', async () => {
        const mock = axiosMock({ delayResponse: 2000 });

        // 게시글 조회
        mock.onGet(`${Domain.API_URL}/posts`).reply(200, posts);

        const store = initStore();
        const component = render(<PostsList />, { store });

        // 게시글 리스트 호출
        store.dispatch(PostsAction.fetchPosts());

        for (const post of posts) {
            const title = await component.findByText(post.title, undefined, {
                timeout: 5000
            });

            expect(title).toHaveTextContent(post.title);
        }
    });
});
