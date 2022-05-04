module.exports = {
	presets: [["@babel/preset-env", { targets: { node: "16" } }], "@babel/typescript"],
	plugins: [
		"babel-plugin-transform-typescript-metadata",
		["@babel/plugin-proposal-decorators", { legacy: true }],
		["@babel/plugin-proposal-class-properties", { loose: true }],
		["@babel/plugin-proposal-private-methods", { loose: true }],
		["@babel/plugin-proposal-private-property-in-object", { loose: true }],
		"@babel/plugin-proposal-object-rest-spread",
		"@babel/plugin-proposal-optional-chaining",
		["@babel/proposal-pipeline-operator", { proposal: "fsharp" }],
	],
	ignore: ["node_modules"],
}