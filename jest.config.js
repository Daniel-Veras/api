module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'],
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/**/index.js'
  ],
  testPathIgnorePatterns: ['/node_modules/'],
  verbose: true
};
