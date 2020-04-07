import * as React from 'react';
import { NextPage } from 'next';

import GnbLayout from 'components/templates/GnbLayout';

const Home: NextPage = () => {
    return (
        <GnbLayout title={'Home'}>
            <h1>Hello, Next Ts</h1>
        </GnbLayout>
    );
};

export default Home;
