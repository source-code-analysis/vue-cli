# vue-cli 源码解析 [![Build Status](https://img.shields.io/circleci/project/vuejs/vue-cli/master.svg)](https://circleci.com/gh/vuejs/vue-cli) [![npm package](https://img.shields.io/npm/v/vue-cli.svg)](https://www.npmjs.com/package/vue-cli)

vue-cli 是 [Vue.js](https://github.com/source-code-analysis/vue) 脚手架, 阅读[使用文档](README-USAGE.md).

## 工程解析
### 目录结构
```bash
.
├── CONTRIBUTING.md
├── LICENSE
├── README-USAGE.md
├── README.md
├── appveyor.yml
├── bin
│   ├── vue
│   ├── vue-build
│   ├── vue-create
│   ├── vue-init
│   └── vue-list
├── circle.yml
├── docs
│   └── build.md
├── issue_template.md
├── lib
│   ├── ask.js
│   ├── check-version.js
│   ├── eval.js
│   ├── filter.js
│   ├── generate.js
│   ├── git-user.js
│   ├── local-path.js
│   ├── logger.js
│   ├── options.js
│   └── warnings.js
├── package-lock.json
├── package.json
└── test
    └── e2e
        ├── mock-error
        │   ├── meta.js
        │   └── template
        │       └── readme.md
        ├── mock-meta-json
        │   ├── meta.json
        │   └── template
        ├── mock-metadata-repo-js
        │   ├── meta.js
        │   └── template
        │       └── readme.md
        ├── mock-metalsmith-custom
        │   ├── meta.js
        │   └── template
        │       └── readme.md
        ├── mock-metalsmith-custom-before-after
        │   ├── meta.js
        │   └── template
        │       └── readme.md
        ├── mock-skip-glob
        │   ├── meta.json
        │   └── template
        │       ├── package.json
        │       └── src
        │           ├── no.js
        │           ├── no.vue
        │           ├── yes.js
        │           └── yes.vue
        ├── mock-template-repo
        │   ├── meta.json
        │   └── template
        │       ├── package.json
        │       └── src
        │           ├── no.js
        │           ├── skip-one.vue
        │           ├── skip-two.vue
        │           └── yes.vue
        ├── mock-vue-app
        │   ├── App.vue
        │   ├── config.js
        │   └── index.js
        ├── test-build.js
        └── test.js
```

### 依赖包
- [dependencies](package.json#L31-L52)
- [devDependencies](package.json#L53-L59)

```json
"dependencies": {
  "async": "^2.4.0",
  "chalk": "^2.1.0",          // node终端样式库
  "commander": "^2.9.0",
  "consolidate": "^0.14.0",
  "download-git-repo": "^1.0.1",
  "handlebars": "^4.0.5",
  "inquirer": "^6.0.0",        // 交互式命令行工具
  "metalsmith": "^2.1.0",
  "minimatch": "^3.0.0",
  "multimatch": "^2.1.0",
  "ora": "^1.3.0",            // 命令行前缀
  "read-metadata": "^1.0.0",
  "request": "^2.67.0",
  "rimraf": "^2.5.0",
  "semver": "^5.1.0",
  "tildify": "^1.2.0",
  "uid": "0.0.2",
  "user-home": "^2.0.0",
  "validate-npm-package-name": "^3.0.0",
  "coffee-script": "1.12.7"
},
```

```json
"devDependencies": {
  "chai": "^4.1.2",
  "eslint": "^3.19.0",
  "eslint-plugin-vue-libs": "^1.2.1",
  "execa": "^0.8.0",
  "mocha": "^3.5.3"
}
```

### 命令
- [工程命令](package.json#L26-L30)

```json
"scripts": {
  "test": "npm run lint && npm run e2e",
  "lint": "eslint test/e2e/test*.js lib bin/* --env mocha",
  "e2e": "rimraf test/e2e/mock-template-build && mocha test/e2e/test.js --slow 1000"
}
```


## 源码分析
### bin
- [全局命令配置](package.json#L6-L10)
- [vue 命令列表](bin/vue)
- [vue init 命令执行逻辑](bin/vue-init)
- [vue list 命令执行逻辑](bin/vue-list)

## License

[MIT](http://opensource.org/licenses/MIT)