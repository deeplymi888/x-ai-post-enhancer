# X AI Post Enhancer

> Rewrite and tighten your draft in the X (Twitter) composer with one click.
> This is the initial 1.0.0 release. It uses an OpenAI-compatible Chat Completions API and has not yet been fully tested for browser compatibility.

## Install

1. Install the [Tampermonkey](https://www.tampermonkey.net/) browser extension.
2. **[Install X AI Post Enhancer](https://raw.githubusercontent.com/deeplymi888/x-ai-post-enhancer/main/x-ai-post-enhancer.user.js)** and confirm the install in your userscript manager. If the browser only shows the source, import the script into the manager manually.
3. Open [X](https://x.com/) and choose **设置 AI API** (Set AI API) from the Tampermonkey script menu.
4. Enter your own API key, base URL, and a model name available on that account.
5. Type in the composer, click **✨ AI 优化** (AI Enhance), review the result, then post it yourself. The script does not post automatically.

## Features and compatibility

- Adds an AI enhance button to the X composer toolbar.
- Rewrites the full current draft to improve hooks, pacing, and readability. It does not rewrite a text selection only.
- The script menu can set the API key, base URL, and model.
- Requests are sent as `POST {baseUrl}/chat/completions`. This works with OpenAI, xAI, or other services that accept that format. Model availability depends on your provider.
- **The native Claude API is not directly compatible.** Use a trusted OpenAI-compatible adapter if you need Claude.
- The system prompt can only be changed by editing the script. There is no settings UI for it.

## Privacy, security, and known limits

- The API key is stored in the userscript manager's local storage. Do not treat this as an encrypted vault.
- When you click enhance, the current draft and the system prompt are sent to the AI service you configured. The API key is also sent with that request. Do not enter sensitive text, and do not use an untrusted base URL.
- This project has no backend of its own. That does not mean zero data transfer or zero privacy risk. Your AI provider's data policy and API fees still apply.
- The initial release uses the browser `fetch` API, which may be blocked by CORS or by X's Content Security Policy. Publishing this repository does not mean every endpoint has been verified.
- X may change its page structure. Button placement and text replacement may need later maintenance. Keep a copy of your original draft and review the replacement before posting.
- Default model names in the settings prompts are examples only. They may not be available on your API account.
- The script is published from the original source provided for this project. The metadata namespace is a placeholder and is not an official affiliation. This project is not affiliated with X or with any model provider.

## Support the project

**No payment account has been opened or verified yet. This project does not currently have a working donation or sponsorship link, paid features, or a payment system. The script is free to install. You pay any AI API charges yourself.**

### Preferred path: GitHub Sponsors

The maintainer can apply at the [GitHub Sponsors signup page](https://github.com/sponsors) by choosing Get sponsored. Eligibility depends on a supported region, identity, tax, and payout details, and GitHub approval. Publishing an open-source repository does not turn sponsorships on automatically.

After approval and a live sponsorship profile, that profile will be added to this README, and `.github/FUNDING.yml` will be set to `github: [deeplymi888]`. Until then, do not treat this as a working payment link.

[Setting up GitHub Sponsors for a personal account](https://docs.github.com/en/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account)

### Alternatives: Ko-fi / Buy Me a Coffee

- [Ko-fi](https://ko-fi.com/): Create a page, connect an eligible PayPal or Stripe payout account, then add the verified page to this README and the FUNDING config. See [How do I get paid?](https://help.ko-fi.com/hc/en-us/articles/115003980093-How-do-I-get-paid).
- [Buy Me a Coffee](https://www.buymeacoffee.com/): Complete the platform's region, identity, and Stripe payout requirements before publishing a page. See [supported payout countries](https://help.buymeacoffee.com/en/articles/6258038-supported-countries-for-payouts-on-buy-me-a-coffee).

The links above are application pages only, not live payment links for this project. Do not submit inaccurate region or identity information.

Paid install help, custom prompts, or enterprise setup may be offered later. Those services are not available yet. This script remains under the MIT License and does not claim that the license forbids commercial use.

## License

[MIT License](LICENSE)

---

## 中文说明

> 在 X（Twitter）发帖时，一键用 AI 重写/优化推文。
> 这是用户提供的 1.0.0 初始版本，使用 OpenAI-compatible Chat Completions API；尚未完成浏览器端兼容性实测。

### 安装

1. 安装 [Tampermonkey](https://www.tampermonkey.net/) 浏览器扩展。
2. **[点击安装 X AI Post Enhancer](https://raw.githubusercontent.com/deeplymi888/x-ai-post-enhancer/main/x-ai-post-enhancer.user.js)**，在用户脚本管理器中确认安装。若仅显示源码，请将脚本导入管理器。
3. 打开 [X](https://x.com/)，通过 Tampermonkey 的脚本菜单选择「设置 AI API」。
4. 填入你自己的 API Key、Base URL 和当前账户可用的模型名称。
5. 在发帖框输入文字，点击「✨ AI 优化」，检查结果后自行发布。脚本不会自动发帖。

### 功能与兼容性

- 在 X 发帖工具栏增加 AI 优化按钮。
- 重写当前编辑框的整段内容，优化钩子、节奏和可读性。它改的是当前发帖框全文，不是选中的那几句。
- 菜单可配置 API Key、Base URL 和模型。
- 请求格式为 `POST {baseUrl}/chat/completions`，适用于接受该格式的 OpenAI、xAI 或兼容服务；具体模型可用性以提供商为准。
- **Claude 原生 API 不直接兼容**，必须使用可信的 OpenAI-compatible 适配服务。
- System Prompt 目前仅能通过编辑脚本修改，没有设置界面。

### 隐私、安全和已知限制

- API Key 保存在用户脚本管理器的本地存储中，不应视为加密保险库。
- 点击优化会把待优化文字和系统提示词发送给配置的 AI 服务，API Key 也会随请求发送给该服务。不要输入敏感文本，也不要使用不可信的 Base URL。
- 没有项目自建服务器；这不代表零数据传输或零隐私风险。AI 提供商的数据政策及 API 费用仍适用。
- 初始版本使用浏览器 `fetch`，可能受到跨域 CORS 或 X 的内容安全策略限制。发布到 GitHub 不代表已验证所有接口可用。
- X 页面结构可能变化，按钮定位和编辑器文本替换可能需要后续维护。请保留原始草稿并检查替换结果。
- 默认模型和设置提示中的模型名称为原始示例，不保证仍对你的 API 账户可用。
- 脚本按用户提供的原文发布，元数据中的 namespace 为原示例值，不是官方关联声明。本项目与 X 或模型提供商无官方隶属关系。

### 支持开发与收款路径

**当前未开通或验证任何收款账户，本项目暂无可直接付款的赞助链接，也没有付费功能或支付系统。安装不收费；使用者自行承担 AI API 费用。**

申请入口见上方英文部分。通过审核并取得真实赞助主页后，才会把可付款链接加入本 README。在开通前不要将申请入口宣传为已可付款。

### 许可证

[MIT License](LICENSE)
