# SpeedAI 公开页 · 青色营销预览（v4）

日期：2026-11-19（Asia/Shanghai）  
范围：仅本地静态预览，**未部署、未 SSH 改 Boston、未改 `payment_enabled`**。  
视觉来自用户提交的 HTML 设计稿（Barclays 风格青色），内容已按现网 [speedai.store](https://speedai.store) 适配。  
v1–v3 仍分别在 `preview-dark-metal/`、`preview-bright-tech/`、`preview-mckinsey/`，本目录未覆盖它们。

## 打开方式

建议窗口宽度约 **1280px**，直接打开：

- 首页：`index.html`
- 登录：`login.html`
- 注册：`register.html`

相对路径引用 `assets/`。表单不提交，只弹出本地提示。右上角可切换中文 / EN。顶栏：**本地预览 · 不提交表单 · 现网未改 · payment_enabled 未动**。宽度 ≤ 860px 时导航隐藏，路径、页脚、登录/注册左右栏上下堆叠。「显示」按钮已设为 `white-space: nowrap`。

## 相对用户设计稿改了什么

### 品牌与资源
- 页头/页脚字母 “S” 色块换成 SpeedAI 现网 `logo.svg`，并加上「API Midway」。
- 模型走马灯改为纯文字（Claude / GPT / Gemini / Antigravity），去掉带品牌配色的 SVG “Logo” 图，也不把 Llama、Mistral 写成已支持库存。

### 去掉的不实宣传
- 折扣数字：删除「低至1折起」「新用户首月5折」。改成「折扣调用」，并写明「具体档位以下单页为准」。
- 时延与可用性：删除「毫秒级」「<200ms」「99.9% / 99.95% / 99.99% SLA」「7×24 不间断 / 在线支持」。快速响应只写「少等待、快返回」。
- 基础设施：删除「多节点部署」「全球CDN」「自动故障转移」（现网是一台 Boston VPS）。
- 合规空话：删除「不存储用户数据」「完全遵守数据隐私法规」。
- 虚数：删除「15+ 模型」「50万+ API调用/天」。原统计区改为定性标签：模型折扣 / 快速响应 / 一把密钥 / 按量付费。
- 注册流程：删除「无需等待审核」「一键获取密钥」。注册页保留现网步骤：必填邀请码、可选优惠码、注册后发 6 位邮箱验证码。

### 定价
- 删除「基础版 ¥99 / 100万 tokens」「专业版 ¥299 / 500万 tokens」「企业版定制」以及 `/register?plan=` 链接。
- 现网是按量付费（`payment_enabled=true`，未开订阅套餐）。改为一张推荐卡「按量付费」：充值后按用量计费，用多少付多少；主按钮指向 `register.html`。没有编造人民币标价。

### 链接
- 导航和页脚只保留 `index.html`、`login.html`、`register.html`、`#features`、`#pricing`。
- 删除不存在的路由：`/docs`、`/about`、`/blog`、`/contact`、`/careers`、`/terms`、`/privacy`、`/sla`、`/models`、`/changelog`、`/quickstart`、`/examples`、`/status`，以及 `href="#"` 社交图标。
- 页脚版权仍为 © 2026 SpeedAI。

### 文案方向（中文默认）
- 徽章：订阅转 API，按量付费
- 主标题：主流模型，**折扣调用**
- 副文：一把密钥接入多家模型。订阅转 API，按量付费。
- 勾选项：OpenAI 标准接口 / 一把密钥多家模型 / 按量付费
- 底部 CTA：先注册，按折扣价发第一笔请求。充值与核销仍走现网约定。

登录、注册沿用 v3 字段规则，视觉改用本设计稿的青色 pill 按钮与白卡片。控制台、「充值」弹窗和 `/redeem` 不在本预览内。

## 现网未改

Boston 主机、镜像、容器和环境变量均未写入。`payment_enabled` 保持现状。本目录不含密钥。确认后再决定是否发到 Boston。
