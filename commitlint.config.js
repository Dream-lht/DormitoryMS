module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能
        'fix', // 修BUG
        'docs', // 改文档
        'style', // 页面样式
        'refactor', // 代码重构
        'perf', // 性能优化
        'test', // 测试代码
        'merge', // 分支合并
        'chore', // 其他
      ],
    ],
    'type-case': [0],
    'type-empty': [0],
    'scope-empty': [0],
    'scope-case': [0],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 72],
  },
}
