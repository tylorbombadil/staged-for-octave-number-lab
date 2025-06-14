# Tauri Build Workflow Reference

This document outlines the two primary build modes in Tauri and how to efficiently develop and test your app during different stages.

---

## 🔁 Two Build Modes in Tauri

### 1. Dev Mode (`tauri dev`) – for Active Development
- **Fast rebuilds**: Tauri watches for code changes and only rebuilds what's necessary.
- Uses a **local development server** (e.g., Vite, Webpack).
- Rust code (backend glue) **recompiles only if changed**.
- Frontend (HTML/JS) **hot reloads automatically**.
- **Recommended for daily development.**

### 2. Build Mode (`tauri build`) – for Packaging
- Produces a **distributable binary** (e.g., `.exe`, `.dmg`).
- Slower; used when app is ready for testing in a production state.
- **Not needed for every change.**

---

## 🧠 Pro Tip
Keep `tauri dev` running and iterate live:
- Edit JavaScript, HTML, or CSS — updates instantly.
- If using Python as backend, connect via exposed APIs or `invoke`.
- Rust backend recompiles if changed — a few seconds max.

---

## Workflow Suggestion
1. Start with `tauri dev`.
2. Modify frontend and/or backend.
3. Confirm functionality live.
4. Use `tauri build` only when packaging for end-user.

