/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "js"],
  testMatch: ["**/__TESTS__/**/*.test.ts"],
  setupFilesAfterEnv: ["<rootDir>/src/__TESTS__/setup.ts"],
  globalSetup: "./src/__TESTS__/globalSetup.ts",
  globalTeardown: "./src/__TESTS__/globalTeardown.ts",
};
