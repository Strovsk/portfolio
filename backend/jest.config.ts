/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
	testEnvironment: "node",
	transform: {
		"^.+.tsx?$": ["ts-jest", {}],
	},
	rootDir: ".",
	moduleNameMapper: {
		"^@src/(.*)$": "<rootDir>/src/$1",
		"^@tests/(.*)$": "<rootDir>/tests/$1",
	},
	testTimeout: 5000,
	collectCoverage: true,
	coverageDirectory: "coverage",
};
