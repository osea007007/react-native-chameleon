module.exports = {
    "preset": "react-native",
    "moduleNameMapper": {
        "^image![a-zA-Z0-9$_-]+$": "GlobalImageStub",
        "^.*\\.(png|gif)$": "RelativeImageStub"
    },
    "transform": {
        "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js"
    },
    "transformIgnorePatterns": [
        "node_modules/(?!react-native)",
    ],
    setupTestFrameworkScriptFile: '<rootDir>setupTests.js',
    "globals": {
        "__DEV__": true,
        "__TEST__":true
    },
    "setupFiles": [
        "<rootDir>/__mocks__/mock.js"
    ],
    // "testEnvironment": "jsdom"
};