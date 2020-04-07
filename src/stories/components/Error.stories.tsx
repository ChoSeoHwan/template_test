import React from 'react';

import { text, withKnobs } from '@storybook/addon-knobs';

import Error from 'components/atoms/Error';

export default {
    title: 'components|atoms/Error',
    subTitle: '에러 메시지 출력용 컴포넌트',
    component: Error,
    decorators: [withKnobs]
};

export const error = () => {
    const message = text('Message', 'Error!');

    return <Error message={message} />;
};

error.story = {
    name: 'Default'
};
