import React from 'react';
import Link from 'next/link';

const Navigation: React.FunctionComponent = () => (
    <nav>
        <Link href="/">
            <a>Home</a>
        </Link>
        <Link href={'/posts'}>
            <a>Posts</a>
        </Link>
    </nav>
);

export default Navigation;
