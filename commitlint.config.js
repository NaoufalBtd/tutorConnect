module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules:{
        'type-enum': [
			2,
			'always',
			[
                'feat',
				'fix',
                'build',
                'ci',
                'docs',
                'perf',
                'refactor',
                'style',
                'test',
                'revert',
				'chore',
                'WIP',
                'wip'
			],
        ],
        'scope-empty':[2,'never'],
        'scope-enum': [
			2,
			'always',
			[
				'web',
                'mobile',
                'web-mobile',
                'backend',
                "common",
                "config",
                "docs",
                "ui",
                "test",
			],
		],
    }
}
