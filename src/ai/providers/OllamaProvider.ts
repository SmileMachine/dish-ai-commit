import { Ollama } from 'ollama';
import { AIProvider, AIRequestParams, AIResponse } from '../types';
import { ConfigurationManager } from '../../config/ConfigurationManager';
import { NotificationHandler } from '../../utils/NotificationHandler';

export class OllamaProvider implements AIProvider {
    private ollama: Ollama;

    constructor() {
        const baseUrl = this.getBaseUrl();
        this.ollama = new Ollama({ 
            host: baseUrl 
        });
    }

    private getBaseUrl(): string {
        const configManager = ConfigurationManager.getInstance();
        return configManager.getConfig<string>('OLLAMA_BASE_URL') || 'http://localhost:11434';
    }

    async refreshModels(): Promise<string[]> {
        try {
            const response = await this.ollama.list();
            NotificationHandler.info('Ollama模型列表已更新');
            return response.models.map(model => model.name);
        } catch (error) {
            console.error('Failed to fetch Ollama models:', error);
            NotificationHandler.error('获取Ollama模型列表失败');
            return [];
        }
    }

    async generateResponse(params: AIRequestParams): Promise<AIResponse> {
        try {
            const { language } = params;
            const model = params.model || ConfigurationManager.getInstance().getConfig<string>('OLLAMA_MODEL');
            
            const response = await this.ollama.chat({
                model,
                messages: [
                    { 
                        role: 'system', 
                        content: params.systemPrompt || `# Svn Commit Message Guide

## Role and Purpose

You will act as a svn commit message generator. When receiving a svn diff, you will ONLY output the commit message itself, nothing else. No explanations, no questions, no additional comments.

## Output Format

### Single Type Changes

\`\`\`
<emoji> <type>(<scope>): <subject>
  <body>
\`\`\`

### Multiple Type Changes

\`\`\`
<emoji> <type>(<scope>): <subject>
  <body of type 1>

<emoji> <type>(<scope>): <subject>
  <body of type 2>
...
\`\`\`

## Type Reference

| Type     | Emoji | Description          | Example Scopes      |
| -------- | ----- | -------------------- | ------------------- |
| feat     | ✨    | New feature          | user, payment       |
| fix      | 🐛    | Bug fix              | auth, data          |
| docs     | 📝    | Documentation        | README, API         |
| style    | 💄    | Code style           | formatting          |
| refactor | ♻️    | Code refactoring     | utils, helpers      |
| perf     | ⚡️   | Performance          | query, cache        |
| test     | ✅    | Testing              | unit, e2e           |
| build    | 📦    | Build system         | webpack, npm        |
| ci       | 👷    | CI config            | Travis, Jenkins     |
| chore    | 🔧    | Other changes        | scripts, config     |
| i18n     | 🌐    | Internationalization | locale, translation |

## Writing Rules

### Subject Line

- Scope must be in English
- Imperative mood
- No capitalization
- No period at end
- Max 50 characters
- Must be in ${language}

### Body

- Bullet points with "-"
- Max 72 chars per line
- Explain what and why
- Must be in ${language}
- Use【】for different types

## Critical Requirements

1. Output ONLY the commit message
2. Write ONLY in ${language}
3. NO additional text or explanations
4. NO questions or comments
5. NO formatting instructions or metadata

## Additional Context

If provided, consider any additional context about the changes when generating the commit message. This context will be provided before the diff and should influence the final commit message while maintaining all other formatting rules.

## Examples

INPUT:

Index: /data/coding/test123132132/console/.vscode/settings.json
===================================================================
--- /data/coding/test123132132/console/.vscode/settings.json	(版本 504)
+++ /data/coding/test123132132/console/.vscode/settings.json	(工作副本)
@@ -6,6 +6,6 @@
   "i18n-ally.pathMatcher": "{locale}/*.ts",
   "i18n-ally.localesPaths": ["src/locale/", "src/views/**/locale/"],
   "i18n-ally.keystyle": "nested",
-  "oxc.enable": false,
+  "oxc.enable": true,
   "vue-i18n.i18nPaths": "src/locale,src/views/login/locale,src/views/dashboard/workplace/locale,src/views/product/network-clb/locale,src/views/product/database/locale,src/views/product/network-firewall/locale,src/views/product/network-ip/locale,src/views/product/network-sshkey/locale,src/views/product/server/locale,src/views/product/snapshot/locale,src/views/product/storage-block/locale,src/views/user/bill/locale,src/views/product/storage-obj/locale,src/views/user/credits/locale,src/views/user/expense/locale,src/views/user/profile/locale,src/views/product/server/deploy/locale,src/views/product/server/details/locale,src/views/product/storage-block/deploy/locale"
 }

OUTPUT:

🔧 chore(vscode): 启用 oxc 插件支持
\n在 .vscode/settings.json 中将 oxc.enable 设置为 true，以启用 oxc 插件。
\n- 提升代码质量检查能力。
\n- 支持更多代码规范校验。

Remember: All output MUST be in ${language} language. You are to act as a pure commit message generator. Your response should contain NOTHING but the commit message itself.`
                    },
                    { 
                        role: 'user', 
                        content: params.prompt 
                    }
                ],
                stream: false
            });

            // 处理JSON字符串响应
            let content = '';
            try {
                const jsonContent = JSON.parse(response.message.content);
                content = jsonContent.response || response.message.content;
            } catch {
                // 如果解析JSON失败，使用原始内容
                content = response.message.content;
            }
            
            return {
                content,
                usage: {
                    totalTokens: response.total_duration
                }
            };
        } catch (error) {
            NotificationHandler.error('Ollama API调用失败');
            throw new Error(`Ollama API request failed: ${error}`);
        }
    }

    async isAvailable(): Promise<boolean> {
        try {
            await this.ollama.list();
            return true;
        } catch {
            return false;
        }
    }
}