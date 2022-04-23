module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
		es2021: true
	},
	extends: [
		'eslint:recommended',
		'plugin:vue/recommended',
		'plugin:prettier/recommended'
	],
	// 规则覆盖
	rules: {
		'prettier/prettier': [
			'warn',
			{
				singleQuote: true, // 使用单引号
				useTabs: true, // 使用tab代替空格缩进
				// tabWidth: 2,
				trailingComma: 'none' // 尾部的逗号
			},
			{
				usePrettierrc: false // 不使用.prettierrc配置文件
			}
		],
		'vue/require-default-prop': 0
	}
};
