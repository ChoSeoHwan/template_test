import React, { FC } from 'react';
import { Provider } from 'react-redux';

import { Global } from '@emotion/core';
import { render as reactRender } from '@testing-library/react';
import { GlobalStyle } from 'styles/App.style';

import { initStore } from 'modules/store';

const AllTheProviders = (
    store: ReturnType<typeof initStore> = initStore()
): FC => ({ children }) => {
    return (
        <Provider store={store}>
            <Global styles={GlobalStyle} />
            {children}
        </Provider>
    );
};

const render = (ui: React.ReactElement, { store = initStore(), ...options }) =>
    reactRender(ui, { wrapper: AllTheProviders(store), ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export default render;
