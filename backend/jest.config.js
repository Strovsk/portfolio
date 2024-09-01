/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
	testEnvironment: "node",
	transform: {
		"^.+.tsx?$": ["ts-jest", {}],
	},
	rootDir: ".",
	moduleNameMapper: {
		"^@src/(.*)$": "<rootDir>/src/$1",
	},
};
