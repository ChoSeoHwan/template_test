// in config.js
import React from 'react';
import { Global } from '@emotion/core';
import { addDecorator } from '@storybook/react';

import { GlobalStyle } from 'styles/App.style';

addDecorator((context) => (
    <>
        <Global styles={GlobalStyle} />
        {context()}
    </>
));
