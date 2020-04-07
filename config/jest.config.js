module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    rootDir: '../',
    modulePaths: ['<rootDir>/src/'],
    setupFilesAfterEnv: ['<rootDir>/config/jest.setup.js'],
    globals: {
        'ts-jest': {
            tsConfig: '<rootDir>/config/tsconfig.jest.json'
        }
    },
    verbose: true,
    transform: {
        '^.+\\.(ts|tsx)?$': 'ts-jest',
        '^.+\\.[t|j]sx?$': 'babel-jest'
    }
};
