const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './'
})

const customJestConfig = {
  collectCoverage: true,
  coverageDirectory: 'tests/coverage',
  coveragePathIgnorePatterns: ['./node_modules'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    uuid: require.resolve('uuid')
  }
}

module.exports = createJestConfig(customJestConfig)
