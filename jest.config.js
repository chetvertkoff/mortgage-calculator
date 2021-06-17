module.exports = async () => {
  return {
    verbose: true,
    collectCoverage: true,
    rootDir: 'src',
    moduleFileExtensions: [
      'js',
      'ts',
      'tsx',
      'json',
    ],
    transform: {
      '^.+\\.tsx?$': 'ts-jest'
    },
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/$1'
    },
    testRegex: '(/__unit__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    testEnvironment: 'jsdom'
  };
};
