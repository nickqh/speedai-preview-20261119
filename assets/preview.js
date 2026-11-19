(function () {
  var dict = {
    zh: {
      banner: "本地预览 · 不提交表单 · 现网未改 · payment_enabled 未动",
      navFeatures: "功能特性",
      navPricing: "定价",
      login: "登录",
      register: "免费注册",
      badge: "订阅转 API，按量付费",
      heroTitleLead: "主流模型，",
      heroTitleHighlight: "折扣调用",
      heroSub: "一把密钥接入多家模型。订阅转 API，按量付费。",
      check1: "OpenAI 标准接口",
      check2: "一把密钥多家模型",
      check3: "按量付费",
      viewPricing: "查看定价",
      chip1: "模型折扣",
      chip1d: "折扣价调用，档位以下单页为准",
      chip2: "快速响应",
      chip2d: "少等待、快返回",
      chip3: "一把密钥",
      chip3d: "同一把密钥调用多家模型",
      chip4: "按量付费",
      chip4d: "充值后按用量计费",
      featLabel: "功能特性",
      featTitle: "模型折扣，少等待、快返回。",
      featSub: "先把能兑现的卖点讲清楚。具体档位以下单页为准。",
      f1t: "模型折扣",
      f1d: "Claude、GPT、Gemini、Antigravity，按折扣价调用。具体档位以下单页为准。",
      f2t: "快速响应",
      f2d: "少等待、快返回。会话保持，不用来回切账号。",
      f3t: "一把密钥多家模型",
      f3d: "同一把 API 密钥调用已接入的模型，不用分别申请。",
      f4t: "标准接口",
      f4d: "OpenAI 标准接口。订阅转成 API，按量付费。",
      pathTitle: "请求怎么走",
      pathSub: "从你的应用到上游模型，走 SpeedAI Midway 这一条入口。",
      s1t: "你的应用",
      s1d: "一把密钥，标准接口",
      s2t: "SpeedAI Midway",
      s2d: "鉴权、分发、会话保持",
      s3t: "上游模型池",
      s3d: "按折扣价调度主流模型",
      s4t: "稳定返回",
      s4d: "少等待，用量可查",
      priceTitle: "按量付费",
      priceSub: "没有月套餐档位。充值后按用量计费，用多少付多少。",
      priceName: "按量付费",
      priceValue: "按用量计费",
      priceBadge: "现网方案",
      pf1: "充值后按用量计费，用多少付多少",
      pf2: "折扣价调用 Claude、GPT、Gemini、Antigravity",
      pf3: "一把密钥接入多家模型",
      pf4: "具体档位以下单页为准",
      pf5: "充值与核销走现网约定",
      priceCta: "免费注册",
      ctaTitle: "先注册，按折扣价发第一笔请求。",
      ctaSub: "开通账户后即可拿到密钥。充值与核销仍走现网约定。",
      footerDesc: "SpeedAI · API Midway。一把密钥接入多家模型，订阅转 API，按量付费。",
      footerProduct: "产品",
      footerAccount: "账户",
      footerHome: "首页",
      footerCopy: "© 2026 SpeedAI. 保留所有权利。",
      footerNote: "本页为本地视觉预览，不是现网页面。",
      loginTitle: "登录 SpeedAI",
      loginLead: "用现有账户继续。",
      asideLogin: "用现有账户继续",
      asideLoginP: "登录后进入现有控制台。充值与核销约定不变。",
      email: "邮箱",
      emailPh: "请输入邮箱",
      password: "密码",
      passwordPh: "请输入密码",
      signIn: "登录",
      noAccount: "还没有账户？",
      signUp: "注册",
      registerTitle: "开通 SpeedAI",
      registerLead: "邀请码必填，优惠码可选。",
      asideReg: "开通后按折扣价调用",
      asideRegP: "一把密钥接通多家模型。填邀请码即可提交；优惠码有就填。",
      createPwPh: "创建一个安全的密码",
      pwHint: "至少 6 个字符",
      confirmPw: "确认密码",
      confirmPwPh: "再次输入密码",
      invite: "邀请码",
      invitePh: "请输入邀请码",
      inviteReq: "现网已开启邀请码注册，此项必填。",
      promo: "优惠码",
      promoPh: "输入优惠码（可选）",
      verifyNote: "注册后将向邮箱发送 6 位验证码。本预览不会发信，也不会写入现网。",
      createAccount: "创建账户",
      hasAccount: "已有账户？",
      toast: "本地预览：表单不会提交到 speedai.store。",
      show: "显示",
      hide: "隐藏",
      stop1: "开通账户",
      stop1d: "邮箱验证后可用",
      stop2: "拿到密钥",
      stop2d: "一把钥匙，折扣价调用",
      stop3: "发第一笔请求",
      stop3d: "少等待，按现网流程充值"
    },
    en: {
      banner: "Local preview · forms do not submit · production untouched · payment_enabled unchanged",
      navFeatures: "Features",
      navPricing: "Pricing",
      login: "Log in",
      register: "Create account",
      badge: "Subscription to API. Pay as you go.",
      heroTitleLead: "Leading models, ",
      heroTitleHighlight: "discounted calls",
      heroSub: "One key, many models. Subscription to API. Pay as you go.",
      check1: "OpenAI-compatible API",
      check2: "One key, many models",
      check3: "Pay as you go",
      viewPricing: "See pricing",
      chip1: "Model discount",
      chip1d: "Discounted rates; tiers are on the order page",
      chip2: "Faster response",
      chip2d: "Less waiting, quicker replies",
      chip3: "One key",
      chip3d: "One key for multiple models",
      chip4: "Pay as you go",
      chip4d: "Top up, then pay for what you use",
      featLabel: "Features",
      featTitle: "Discounted models. Less waiting.",
      featSub: "Only claims we can stand behind. Exact discount tiers are on the order page.",
      f1t: "Model discount",
      f1d: "Call Claude, GPT, Gemini, and Antigravity at a discount. Exact tiers are on the order page.",
      f2t: "Faster response",
      f2d: "Less waiting, quicker replies. Sessions persist; no account-hopping.",
      f3t: "One key, many models",
      f3d: "One API key calls the models we have connected. No separate applications.",
      f4t: "Standard API",
      f4d: "OpenAI-compatible API. Subscription to API. Pay as you go.",
      pathTitle: "How a request travels",
      pathSub: "From your app to the upstream models, through one SpeedAI Midway entry.",
      s1t: "Your app",
      s1d: "One key, standard endpoint",
      s2t: "SpeedAI Midway",
      s2d: "Auth, dispatch, sticky sessions",
      s3t: "Upstream pool",
      s3d: "Leading models at a discount",
      s4t: "A stable reply",
      s4d: "Less waiting, usage you can check",
      priceTitle: "Pay as you go",
      priceSub: "No monthly plan tiers. Top up, then pay for what you use.",
      priceName: "Pay as you go",
      priceValue: "Usage billing",
      priceBadge: "Live plan",
      pf1: "Top up, then pay for what you use",
      pf2: "Discounted calls to Claude, GPT, Gemini, and Antigravity",
      pf3: "One key for multiple models",
      pf4: "Exact tiers are on the order page",
      pf5: "Top-up and redeem follow the live flow",
      priceCta: "Create account",
      ctaTitle: "Sign up, then make your first discounted request.",
      ctaSub: "Get a key after you create an account. Top-up and redeem stay as they are.",
      footerDesc: "SpeedAI · API Midway. One key, many models. Subscription to API. Pay as you go.",
      footerProduct: "Product",
      footerAccount: "Account",
      footerHome: "Home",
      footerCopy: "© 2026 SpeedAI. All rights reserved.",
      footerNote: "Local visual preview only — not the live site.",
      loginTitle: "Log in to SpeedAI",
      loginLead: "Continue with your account.",
      asideLogin: "Continue with your account",
      asideLoginP: "After login you reach the current console. Top-up and redeem stay as they are.",
      email: "Email",
      emailPh: "Enter your email",
      password: "Password",
      passwordPh: "Enter your password",
      signIn: "Log in",
      noAccount: "Don’t have an account?",
      signUp: "Register",
      registerTitle: "Get on SpeedAI",
      registerLead: "Invitation code is required; promo code is optional.",
      asideReg: "Register, then call at a discount",
      asideRegP: "One key, many models. Invitation code is required; add a promo code if you have one.",
      createPwPh: "Create a secure password",
      pwHint: "At least 6 characters",
      confirmPw: "Confirm password",
      confirmPwPh: "Enter the password again",
      invite: "Invitation code",
      invitePh: "Enter invitation code",
      inviteReq: "Invitation codes are required on the live site.",
      promo: "Promo code",
      promoPh: "Promo code (optional)",
      verifyNote: "After registering, a 6-digit code is emailed to you. This preview neither sends mail nor writes to production.",
      createAccount: "Create account",
      hasAccount: "Already have an account?",
      toast: "Local preview: the form is not submitted to speedai.store.",
      show: "Show",
      hide: "Hide",
      stop1: "Create an account",
      stop1d: "Ready after email verification",
      stop2: "Get a key",
      stop2d: "One key, discounted calls",
      stop3: "Make the first request",
      stop3d: "Less waiting; top up on the live flow"
    }
  };

  function apply(lang) {
    document.documentElement.lang = lang === "en" ? "en" : "zh-CN";
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[lang][key]) el.textContent = dict[lang][key];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      if (dict[lang][key]) el.setAttribute("placeholder", dict[lang][key]);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      if (dict[lang][key]) el.setAttribute("aria-label", dict[lang][key]);
    });
    document.querySelectorAll(".lang-toggle button").forEach(function (b) {
      b.classList.toggle("is-on", b.getAttribute("data-lang") === lang);
    });
    try { localStorage.setItem("speedai-preview-lang", lang); } catch (e) {}
  }

  var start = "zh";
  try { start = localStorage.getItem("speedai-preview-lang") || "zh"; } catch (e) {}
  apply(start);

  document.querySelectorAll(".lang-toggle button").forEach(function (b) {
    b.addEventListener("click", function () { apply(b.getAttribute("data-lang")); });
  });

  document.querySelectorAll(".pw-toggle").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var id = btn.getAttribute("data-for");
      var input = document.getElementById(id);
      if (!input) return;
      var show = input.type === "password";
      input.type = show ? "text" : "password";
      var lang = document.documentElement.lang === "en" ? "en" : "zh";
      btn.textContent = show ? dict[lang].hide : dict[lang].show;
    });
  });

  document.querySelectorAll("form[data-preview-form]").forEach(function (form) {
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var toast = form.querySelector(".toast");
      if (toast) toast.classList.add("show");
    });
  });
})();
