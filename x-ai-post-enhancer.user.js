// ==UserScript==
// @name         X AI Post Enhancer
// @namespace    https://github.com/yourname/x-ai-enhancer
// @version      1.0.0
// @description  在 X (Twitter) 发帖时一键用 AI 重写/优化推文。支持 OpenAI、Grok、Claude 等兼容接口。
// @author       Grok
// @match        https://x.com/*
// @match        https://twitter.com/*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_registerMenuCommand
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    const STORAGE_KEY = 'x_ai_enhancer_config';
    const DEFAULT_CONFIG = {
        apiKey: '',
        baseUrl: 'https://api.openai.com/v1',
        model: 'gpt-4o-mini',
        systemPrompt: '你是一个专业的社交媒体文案专家，擅长写简洁、有吸引力、适合 X (Twitter) 的推文。保持原意，优化表达，增加钩子和可读性。输出纯文本，不要加引号或多余解释。'
    };

    function getConfig() {
        const saved = GM_getValue(STORAGE_KEY, null);
        return saved ? JSON.parse(saved) : { ...DEFAULT_CONFIG };
    }

    function saveConfig(config) {
        GM_setValue(STORAGE_KEY, JSON.stringify(config));
    }

    function showSettings() {
        const config = getConfig();
        const apiKey = prompt('输入你的 API Key（OpenAI / Grok / Claude 等）：', config.apiKey || '');
        if (apiKey === null) return;
        const baseUrl = prompt('API Base URL（默认 OpenAI，Grok 用 https://api.x.ai/v1）：', config.baseUrl);
        if (baseUrl === null) return;
        const model = prompt('模型名称（如 gpt-4o-mini / grok-2 / claude-3-5-sonnet）：', config.model);
        if (model === null) return;

        saveConfig({ ...config, apiKey: apiKey.trim(), baseUrl: baseUrl.trim(), model: model.trim() });
        alert('设置已保存！');
    }

    GM_registerMenuCommand('设置 AI API', showSettings);

    async function callAI(text) {
        const config = getConfig();
        if (!config.apiKey) {
            alert('请先点击油猴菜单设置 API Key');
            showSettings();
            return null;
        }

        const response = await fetch(`${config.baseUrl}/chat/completions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${config.apiKey}`
            },
            body: JSON.stringify({
                model: config.model,
                messages: [
                    { role: 'system', content: config.systemPrompt },
                    { role: 'user', content: `请优化以下推文，使其更适合在 X 上发布：\n\n${text}` }
                ],
                temperature: 0.7,
                max_tokens: 500
            })
        });

        if (!response.ok) {
            const err = await response.text();
            throw new Error(`API 错误: ${response.status} - ${err}`);
        }

        const data = await response.json();
        return data.choices[0].message.content.trim();
    }

    function getComposeBox() {
        return document.querySelector('[data-testid="tweetTextarea_0"]') ||
               document.querySelector('div[role="textbox"][contenteditable="true"]') ||
               document.querySelector('[aria-label="Post text"]');
    }

    function getCurrentText() {
        const box = getComposeBox();
        if (!box) return '';
        return box.innerText || box.textContent || '';
    }

    function setText(text) {
        const box = getComposeBox();
        if (!box) {
            alert('找不到发帖框，请先点击发帖按钮打开编辑器');
            return;
        }
        box.focus();
        document.execCommand('selectAll', false, null);
        document.execCommand('insertText', false, text);
    }

    function createButton() {
        const btn = document.createElement('button');
        btn.innerHTML = '✨ AI 优化';
        btn.style.cssText = `
            margin-left: 8px;
            padding: 6px 12px;
            background: #1d9bf0;
            color: white;
            border: none;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 700;
            cursor: pointer;
            z-index: 9999;
        `;
        btn.onmouseover = () => btn.style.background = '#1a8cd8';
        btn.onmouseout = () => btn.style.background = '#1d9bf0';

        btn.onclick = async (e) => {
            e.preventDefault();
            e.stopPropagation();
            const text = getCurrentText().trim();
            if (!text) {
                alert('请先在发帖框输入内容');
                return;
            }
            btn.disabled = true;
            btn.innerHTML = '⏳ 优化中...';
            try {
                const result = await callAI(text);
                if (result) {
                    setText(result);
                    btn.innerHTML = '✅ 已优化';
                    setTimeout(() => { btn.innerHTML = '✨ AI 优化'; }, 2000);
                }
            } catch (err) {
                alert('优化失败：' + err.message);
                btn.innerHTML = '✨ AI 优化';
            } finally {
                btn.disabled = false;
            }
        };
        return btn;
    }

    function injectButton() {
        const toolbar = document.querySelector('[data-testid="toolBar"]') ||
                        document.querySelector('[role="toolbar"]') ||
                        document.querySelector('div[data-testid="tweetButtonInline"]')?.parentElement;

        if (toolbar && !document.getElementById('x-ai-enhancer-btn')) {
            const btn = createButton();
            btn.id = 'x-ai-enhancer-btn';
            toolbar.appendChild(btn);
        }
    }

    setInterval(injectButton, 1500);
    setTimeout(injectButton, 1000);

    console.log('[X AI Post Enhancer] 脚本已加载');
})();
