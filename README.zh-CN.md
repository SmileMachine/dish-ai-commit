<div align="center">

<h1>Dish AI Commit Gen</h1>

用 AI 辅助生成规范的 Git/SVN 提交信息的 VSCode 扩展

[报告错误][github-issues-link] · [请求功能][github-issues-link]

<!-- SHIELD GROUP -->

[![][github-contributors-shield]][github-contributors-link]
[![][github-forks-shield]][github-forks-link]
[![][github-stars-shield]][github-stars-link]
[![][github-issues-shield]][github-issues-link]
[![][vscode-marketplace-shield]][vscode-marketplace-link]
[![][total-installs-shield]][total-installs-link]
[![][avarage-rating-shield]][avarage-rating-link]
[![][github-license-shield]][github-license-link]

![演示](images/demo.gif)

</div>

[English](README.md) | [简体中文](README.zh-CN.md)

用 AI 辅助生成规范的 Git/SVN 提交信息的 VSCode 扩展。支持 OpenAI、Ollama、VSCode 内置 AI 服务、智谱 AI、DashScope、豆包 AI 和 Gemini AI。

### 🆓 免费 AI 模型支持

- 智谱 AI (GLM-4-Flash)

  - 免费额度：每个账号每月有固定免费额度（[速率限制指南](https://open.bigmodel.cn/dev/howuse/rate-limits))
  - [点此获取智谱 API Key](https://open.bigmodel.cn/usercenter/apikeys)

- Gemini AI (gemini-2.0-flash-exp)
  - 免费额度：每分钟 60 次请求
  - [点此获取 Gemini API Key](https://makersuite.google.com/app/apikey)

## 功能特性

### 🤖 多平台 AI 支持

- OpenAI API 支持 (GPT-3.5/GPT-4/Other)
- Ollama 本地模型支持
- VSCode 内置 AI 支持
- 智谱 AI 支持
- DashScope 支持
- 豆包 AI 支持
- Gemini AI 支持

### 📝 版本控制系统支持

- SVN
- Git

### 🌍 支持多语言提交信息生成：

- 简体中文
- 繁體中文
- English
- 日本語
- 한국어
  等 19 种语言

### 🎨 符合 Conventional Commits 规范

### 😄 自动添加 emoji 表情

### 📅 工作周报生成

- 支持自动生成工作周报
- 基于提交历史智能总结
- 可自定义周报模板和格式

### 配置项

| 配置项                                                 | 类型    | 默认值                    | 说明                                       |
| ------------------------------------------------------ | ------- | ------------------------- | ------------------------------------------ |
| dish-ai-commit.base.language                           | string  | Simplified Chinese        | 提交信息语言                               |
| dish-ai-commit.base.systemPrompt                       | string  | ""                        | 自定义系统提示                             |
| dish-ai-commit.base.provider                           | string  | OpenAI                    | AI 服务提供商                              |
| dish-ai-commit.base.model                              | string  | gpt-3.5-turbo             | AI 模型选择                                |
| dish-ai-commit.providers.openai.apiKey                 | string  | ""                        | OpenAI API 密钥                            |
| dish-ai-commit.providers.openai.baseUrl                | string  | https://api.openai.com/v1 | OpenAI API 基础 URL                        |
| dish-ai-commit.providers.zhipu.apiKey                  | string  | ""                        | 智谱 AI API 密钥                           |
| dish-ai-commit.providers.dashscope.apiKey              | string  | ""                        | DashScope API 密钥                         |
| dish-ai-commit.providers.doubao.apiKey                 | string  | ""                        | 豆包 API 密钥                              |
| dish-ai-commit.providers.ollama.baseUrl                | string  | http://localhost:11434    | Ollama API 基础 URL                        |
| dish-ai-commit.providers.gemini.apiKey                 | string  | ""                        | Gemini AI API 密钥                         |
| dish-ai-commit.features.codeAnalysis.simplifyDiff      | boolean | false                     | 启用 diff 内容简化功能                     |
| dish-ai-commit.features.codeAnalysis.maxLineLength     | number  | 120                       | 简化后每行的最大长度                       |
| dish-ai-commit.features.codeAnalysis.contextLines      | number  | 3                         | 保留的上下文行数                           |
| dish-ai-commit.features.commitFormat.enableMergeCommit | boolean | false                     | 是否允许将多个文件的变更合并为一条提交信息 |
| dish-ai-commit.features.commitFormat.enableEmoji       | boolean | true                      | 在提交信息中使用 emoji                     |
| dish-ai-commit.features.weeklyReport.systemPrompt      | string  | ""                        | 周报生成的自定义系统提示                   |

### 命令

| 命令 ID                            | 分类             | 标题                       | 描述                           |
| ---------------------------------- | ---------------- | -------------------------- | ------------------------------ |
| dish-ai-commit.selectModel         | [Dish AI Commit] | 选择用于提交生成的 AI 模型 | 选择用于生成提交消息的 AI 模型 |
| dish-ai-commit.generateWeekly 报告 | [Dish AI Commit] | 生成每周报告               | 基于过去的Commit生成 AI 驱动的每周工作报告     |

## 配置说明

1. OpenAI 配置

```json
{
  "dish-ai-commit.PROVIDER": "openai",
  "dish-ai-commit.OPENAI_API_KEY": "your-api-key",
  "dish-ai-commit.OPENAI_BASE_URL": "https://api.openai.com/v1"
}
```

2. Ollama 配置

```json
{
  "dish-ai-commit.PROVIDER": "ollama",
  "dish-ai-commit.OLLAMA_BASE_URL": "http://localhost:11434"
}
```

3. VSCode 配置

```json
{
  "dish-ai-commit.PROVIDER": "vscode"
}
```

4. Gemini AI 配置

```json
{
  "dish-ai-commit.PROVIDER": "gemini",
  "dish-ai-commit.GEMINI_API_KEY": "your-api-key"
}
```

## 📋 使用方法

- 从源代码管理器中选择要提交的文件
- 点击源代码管理器标题栏中的"Dish AI Commit"图标
- 或在命令面板中执行"Dish AI Commit"命令
- AI 将自动生成符合规范的提交信息

## 📥 安装

1. 从 VS Code 扩展市场搜索 "Dish AI Commit"
2. 点击安装
3. 重启 VS Code
4. 根据实际需求配置 AI 服务参数

## 📝 更新日志

查看 [CHANGELOG.zh-CN.md](CHANGELOG.zh-CN.md) 了解详细的版本更新历史。

## 📋 依赖要求

- VS Code 1.80.0+
- [SVN 命令行工具](http://subversion.apache.org/packages.html)
- SVN SCM (可选) - 如需在 VSCode 的 SCM 输入框中输入提交信息，请安装 [SVN SCM v2.18.1+](https://github.com/littleCareless/svn-scm/releases/tag/v2.18.1)
- 有效的 AI 服务配置(OpenAI API Key 或 Ollama 服务)

## 💡 常见问题

- 确保 SVN 命令行工具已正确安装并可访问
- 确保 SVN SCM 扩展已正确安装并启用
- 配置正确的 AI 服务参数
- 确保网络可以访问选择的 AI 服务

## 🛠️ 开发指南

可以使用 Github Codespaces 进行在线开发：

[![github-codespace][github-codespace-shield]][github-codespace-link]

或者，可以克隆存储库并运行以下命令进行本地开发：

```bash
$ git clone https://github.com/littleCareless/dish-ai-commit
$ cd ai-commit
$ npm install
```

在 VSCode 中打开项目文件夹。按 F5 键运行项目。会弹出一个新的 Extension Development Host 窗口，并在其中启动插件。

## 🤝 贡献指南

我们欢迎所有形式的贡献，包括但不限于：

- 提交 [Issues][github-issues-link] 报告 bug
- 提出新功能建议
- 提交 Pull Request 改进代码
- 完善文档

请确保在提交 PR 之前：

1. 代码经过测试
2. 更新相关文档
3. 遵循项目代码规范

[![][pr-welcome-shield]][pr-welcome-link]

### 💗 感谢我们的贡献者

[![][github-contrib-shield]][github-contrib-link]

### 功能特性（补充）

- [ ] **🧠 深度分析和建议**  
       提供更智能的提交信息建议，不仅仅是基于 SVN 变更，还可以根据项目上下文提供改进意见（例如：建议更改某些功能名称，或者指出可能的代码风格改进）。

- [ ] **📈 统计与报告**  
       提供提交统计功能，如提交频率、类型分析、提交信息的质量评分等，帮助开发者更好地了解自己的提交习惯。

- [ ] **🎨 自定义提交模板**  
       允许用户自定义提交信息的模板格式（如：包括关联的 Jira 票号、功能描述等），AI 会根据模板生成符合要求的提交信息。

- [ ] **⚙️ 深度配置选项**  
       提供更多的配置项，比如是否启用 AI 生成的建议，生成提交信息的详细程度，是否自动修改现有提交信息, 是否要添加 emoji 等。

## 🙏 致谢

本项目参考了以下优秀的开源项目：

- [svn-scm](https://github.com/JohnstonCode/svn-scm) - VSCode 的 SVN 源代码管理扩展
- [vscode](https://github.com/microsoft/vscode) - Visual Studio Code 编辑器
- [vscode-gitlens](https://github.com/gitkraken/vscode-gitlens) - VSCode 的 Git 增强扩展
- [ai-commit](https://github.com/Sitoi/ai-commit) - AI 辅助生成 Git 提交信息

## 📄 许可证

该项目是 [MIT](./LICENSE) 许可证。

<!-- LINK GROUP -->

[github-codespace-link]: https://codespaces.new/littleCareless/dish-ai-commit
[github-codespace-shield]: https://github.com/littleCareless/dish-ai-commit/blob/main/images/codespaces.png?raw=true
[github-contributors-link]: https://github.com/littleCareless/dish-ai-commit/graphs/contributors
[github-contributors-shield]: https://img.shields.io/github/contributors/littleCareless/dish-ai-commit?color=c4f042&labelColor=black&style=flat-square
[github-forks-link]: https://github.com/littleCareless/dish-ai-commit/network/members
[github-forks-shield]: https://img.shields.io/github/forks/littleCareless/dish-ai-commit?color=8ae8ff&labelColor=black&style=flat-square
[github-issues-link]: https://github.com/littleCareless/dish-ai-commit/issues
[github-issues-shield]: https://img.shields.io/github/issues/littleCareless/dish-ai-commit?color=ff80eb&labelColor=black&style=flat-square
[github-license-link]: https://github.com/littleCareless/dish-ai-commit/blob/main/LICENSE
[github-license-shield]: https://img.shields.io/github/license/littleCareless/dish-ai-commit?color=white&labelColor=black&style=flat-square
[github-stars-link]: https://github.com/littleCareless/dish-ai-commit/network/stargazers
[github-stars-shield]: https://img.shields.io/github/stars/littleCareless/dish-ai-commit?color=ffcb47&labelColor=black&style=flat-square
[pr-welcome-link]: https://github.com/littleCareless/dish-ai-commit/pulls
[pr-welcome-shield]: https://img.shields.io/badge/🤯_pr_welcome-%E2%86%92-ffcb47?labelColor=black&style=for-the-badge
[github-contrib-link]: https://github.com/littleCareless/dish-ai-commit/graphs/contributors
[github-contrib-shield]: https://contrib.rocks/image?repo=littleCareless%2Fdish-ai-commit
[vscode-marketplace-link]: https://marketplace.visualstudio.com/items?itemName=littleCareless.dish-ai-commit
[vscode-marketplace-shield]: https://img.shields.io/vscode-marketplace/v/littleCareless.dish-ai-commit.svg?label=vscode%20marketplace&color=blue&labelColor=black&style=flat-square
[total-installs-link]: https://marketplace.visualstudio.com/items?itemName=littleCareless.dish-ai-commit
[total-installs-shield]: https://img.shields.io/vscode-marketplace/d/littleCareless.dish-ai-commit.svg?&color=greeen&labelColor=black&style=flat-square
[avarage-rating-link]: https://marketplace.visualstudio.com/items?itemName=littleCareless.dish-ai-commit
[avarage-rating-shield]: https://img.shields.io/vscode-marketplace/r/littleCareless.dish-ai-commit.svg?&color=green&labelColor=black&style=flat-square
