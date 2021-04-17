const config = {
  setupFilesAfterEnv: [
    'jest-plugin-context/setup',
  ],
  modulePathIgnorePatterns: [
    '<rootDir>/.cache',
  ],
  verbose: true,
};

export default config;
