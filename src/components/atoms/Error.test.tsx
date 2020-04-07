import React from 'react';

import { render } from 'libs/test-utils';

import Error from 'components/atoms/Error';

describe('<Error/>', () => {
    it('display error message', () => {
        const message = '에러 메시지 입니다.';

        const component = render(<Error message={message} />);
        component.getByText(message);
    });
});
