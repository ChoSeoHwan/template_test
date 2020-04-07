module.exports = (api) => {
    const isJestEnv = api.env() === 'test';

    // config for jest test
    if (isJestEnv) {
        return {
            presets: [
                ['@babel/preset-env', { targets: { node: 'current' } }],
                '@babel/preset-typescript'
            ]
        };
    }

    return {
        presets: ['next/babel']
    };
};
