# Daily paper-account update

This Site remains owner-private. It never connects to a broker and cannot trade real money.

For a scheduled run, call the Site MCP tool update_paper_day if connected. Otherwise obtain the current Site URL and its supported service-access credential using Sites get_site; POST JSON {"op":"update"} to /api/paper using OAI-Sites-Authorization: Bearer <credential>. Keep the credential in memory; never print, save, or include it in a schedule prompt. Do not change sharing.

Then GET /api/paper with the same supported access and verify the persisted rules account lastRunDate, decisions, current quote time and daily NAV. The updater checks freshness and trading hours, runs a closed-day moving-average rules Agent at most once per date, and refreshes both accounts. It never fabricates a trade when market data is stale or unavailable. Outside trading hours it updates valuation only. The Hermes account only trades when an external Agent submits orders; the daily rules updater does not imitate Hermes.

If the provider fails, retain existing state and report the failure. Repeating update is safe: daily and per-order idempotency prevent duplicate fills. Do not clear, seed fake trades, or republish source during routine updates.

Default requested daily operation cadence: weekdays 10:05 and 15:05 Asia/Shanghai. Morning attempts rules execution; afternoon refreshes valuation. Public holidays are handled by quote freshness and source date validation.
