/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom', // Use jsdom for DOM testing
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'], // Ensure jest-dom setup
};
