import React from 'react';
import Head from 'next/head';

import Header from 'components/organisms/Header';
import Footer from 'components/organisms/Footer';

interface ILayout {
    title?: string;
}

const GnbLayout: React.FunctionComponent<ILayout> = ({ children, title }) => (
    <div>
        <Head>
            <title>{title || 'ChoSeoHwan'}</title>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
        </Head>
        <Header />
        {children}
        <Footer />
    </div>
);

export default GnbLayout;
