# Agentfolio A-share paper trading

A private Sites app with live Tencent quotes, two independent RMB 100,000 paper accounts, persistent D1 ledgers, daily NAV, order logs and a stateless MCP endpoint. No broker connectivity or real money.

Rules account: closed-day qfq MA5/MA20 baseline, one run per day; initial target 15% per stock, total exposure 70%, single stock 30%. Hermes account: external Agent orders or explicitly labeled manual tests. An order's unique ID is an idempotency key. Stock universe is six mainland main-board stocks; no ETF/STAR/ChiNext/BSE simulation.

Quote time and fetch time remain distinct. Last real snapshot is shown when the provider fails and cannot be used to fill orders. Freshness, session, bid/ask, cash, lot size, T+1 and price boundaries are checked server-side. Fees and slippage are model assumptions. Dividends/splits and exchange order queues are not modeled. Daily snapshots reflect latest successful refresh, not guaranteed official closing marks.

API: GET /api/paper reads accounts, POST /api/paper supports order, runRules, refresh, update. All routes rely on this confirmed owner-private Site's dispatch access boundary; preserve private sharing. POST /mcp exposes equivalent tools. Service access must use the Site-specific supported credential or MCP authorization. Never store credentials in source.

Run tests: node --test tests/paper-engine.test.mjs
Build through the Sites build helper. D1 migrations are in drizzle/. The original static dashboard has been ported to public/dashboard.html and is embedded by the application root.
