# X AI Post Enhancer

> 在 X（Twitter）发帖时，一键用 AI 重写/优化推文。
> 用户提供的 1.0.0 初始版本，使用 OpenAI-compatible Chat Completions API；尚未完成浏览器端兼容性实测。

## 安装

1. 安装 [Tampermonkey](https://www.tampermonkey.net/) 浏览器扩展。
2. **[点击安装 X AI Post Enhancer](https://raw.githubusercontent.com/deeplymi888/x-ai-post-enhancer/main/x-ai-post-enhancer.user.js)**，在用户脚本管理器中确认安装。若仅显示源码，请将脚本导入管理器。
3. 打开 [X](https://x.com/)，通过 Tampermonkey 的脚本菜单选择「设置 AI API」。
4. 填入你自己的 API Key、Base URL 和当前账户可用的模型名称。
5. 在发帖框输入文字，点击「✨ AI 优化」，检查结果后自行发布。脚本不会自动发帖。

## 功能与兼容性

- 在 X 发帖工具栏增加 AI 优化按钮。
- 重写当前编辑框内容，优化钩子、节奏和可读性。
- 菜单可配置 API Key、Base URL 和模型。
- 请求格式为 `POST {baseUrl}/chat/completions`，适用于接受该格式的 OpenAI、xAI 或兼容服务；具体模型可用性以提供商为准。
- **Claude 原生 API 不直接兼容**，必须使用可信的 OpenAI-compatible 适配服务。
- System Prompt 目前仅能通过编辑脚本修改，没有设置界面。

## 隐私、安全和已知限制

- API Key 保存在用户脚本管理器的本地存储中，不应视为加密保险库。
- 点击优化会把待优化文字和系统提示词发送给配置的 AI 服务，API Key 也会随请求发送给该服务。不要输入敏感文本，也不要使用不可信的 Base URL。
- 没有项目自建服务器；这不代表零数据传输或零隐私风险。AI 提供商的数据政策及 API 费用仍适用。
- 初始版本使用浏览器 `fetch`，可能受到跨域 CORS 或 X 的内容安全策略限制。发布到 GitHub 不代表已验证所有接口可用。
- X 页面结构可能变化，按钮定位和编辑器文本替换可能需要后续维护。请保留原始草稿并检查替换结果。
- 默认模型和设置提示中的模型名称为原始示例，不保证仍对你的 API 账户可用。
- 脚本按用户提供的原文发布，元数据中的 namespace 为原示例值，不是官方关联声明。本项目与 X 或模型提供商无官方隶属关系。

## 支持开发与收款路径

**当前未开通或验证任何收款账户，本项目暂无可直接付款的赞助链接，也没有付费功能或支付系统。安装不收费；使用者自行承担 AI API 费用。**

### 首选：GitHub Sponsors

项目维护者可前往 [GitHub Sponsors 申请入口](https://github.com/sponsors) 选择 Get sponsored。需满足支持地区资格，完成身份、税务和收款资料，并通过 GitHub 审核；发布开源仓库并不会自动开通收款。

通过审核并取得真实赞助主页后，将该主页加入本 README，并在 `.github/FUNDING.yml` 中配置 `github: [deeplymi888]`。在开通前不要将它宣传为已可付款。

[GitHub Sponsors 个人账号设置说明](https://docs.github.com/en/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account)

### 备选：Ko-fi / Buy Me a Coffee

- [Ko-fi](https://ko-fi.com/)：创建主页并连接符合资格的 PayPal 或 Stripe 收款账户，再把已验证的个人主页加入 README 和 FUNDING 配置。见 [收款说明](https://help.ko-fi.com/hc/en-us/articles/115003980093-How-do-I-get-paid)。
- [Buy Me a Coffee](https://www.buymeacoffee.com/)：完成平台要求的地区、身份及 Stripe 收款设置后再发布个人主页。见 [支持提现地区](https://help.buymeacoffee.com/en/articles/6258038-supported-countries-for-payouts-on-buy-me-a-coffee)。

上述平台页面仅为申请入口，不是本项目已开通的收款链接。不要提交不真实的地区或身份资料。

未来可单独提供付费安装协助、定制提示词或企业适配服务；这些服务目前尚未上线。本脚本继续遵循 MIT License，不宣称开源许可禁止商业使用。

## 许可证

[MIT License](LICENSE)
