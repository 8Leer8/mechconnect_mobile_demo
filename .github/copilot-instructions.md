<!-- .github/copilot-instructions.md -->
# Quick instructions for AI coding agents (mechconnect_mobile_demo)

Purpose: give an AI agent the minimal, concrete knowledge to be productive in this repository — what the project is, where to look, how to run it locally, and key patterns to follow.

- Project type: static front-end prototype. The workspace contains three front-ends (client, mechanics, shopowner) and an `auth/` folder with simple HTML pages. There is no backend code, package.json, or CI config in the repo by default.

- High-level layout (open these first):
  - `client_lak/client/pages/` — primary app pages (home, booking, payments, dispute flows). Example: `home.html`, `booking/active_booking.html`, `client_payment.html`.
  - `client_lak/client/imgs/` — all image assets referenced by pages.
  - `auth/` — simple authentication pages (`login.html`, `signup.html`, `forgot.html`).
  - `mechanics/` and `shopowner/` — small standalone pages for other user types.
  - `client_lak/laks_ui - Copy/` — a UI component library / playground (accordion, cards, modals). Useful for copy/paste of components.

- Architecture & why:
  - This repo is a static HTML/CSS/JS prototype. Each page is a single HTML file that includes Tailwind via CDN and inlined scripts. The design uses Tailwind CDN (see `home.html` header where `https://cdn.tailwindcss.com` and a `tailwind.config` block are used).
  - Pages communicate via relative navigation and shared assets rather than an API: many files use `window.location.href`, `tel:`, `mailto:`, or direct links to Google Maps to simulate integrations.
  - JavaScript patterns are per-page and inline: look for <script> blocks at the bottom of each page (e.g., `booking/active_booking.html`, `booking/complete_booking.html`, `dispute_detail.html`). Event handlers are often attached via `onclick` attributes and `DOMContentLoaded` listeners.

- Important conventions & gotchas (discoverable patterns):
  - Relative paths matter: pages use deep relative links like `../../../imgs/...`. Serve the repo from the workspace root to preserve those paths when opening in a browser.
  - There is an odd directory name with a space: `client_lak/client/pages/request _form/` — avoid renaming it without updating links.
  - UI behavior is frequently implemented inline (e.g., `showMessage()` toast, `openImageModal()`), so changes often live inside individual HTML files rather than a shared JS file.
  - Styling is via Tailwind CDN and custom inline CSS in head sections — editing the Tailwind config in `home.html` is a quick way to change theme tokens used across pages (primary orange colors are defined there).

- How to run locally (static server recommended)
  - Open pages directly from the filesystem can break relative links; run a simple static server from the repo root. Examples:

```bash
# Python 3 built-in static server (works on macOS zsh)
python3 -m http.server 8000

# Or, if you have Node available and prefer a lightweight server:
npm install -g serve
serve -s . -l 8000
```

  - After starting the server, visit e.g. `http://localhost:8000/client_lak/client/pages/home.html` to view the client frontend.

- Debugging notes for agents
  - Use browser DevTools to inspect DOM and console — most logic is front-end only. Look for errors that stem from incorrect relative paths (404s) or undefined functions (because code lives in another page).
  - Grep for common helper names across pages when a function is missing. Examples:
    - `showMessage` appears in multiple booking pages (e.g., `booking/cancelled_booking.html`).
    - `openImageModal` is used in `dispute_detail.html` and several booking pages.

- Integration points & external dependencies
  - Tailwind via CDN: `https://cdn.tailwindcss.com` (in the head of many pages).
  - Fonts & icons: Google Fonts / Material Icons (see `home.html`).
  - External links used as stubs: Google Maps URLs, `tel:` links, `mailto:` links and static phone numbers. These are UI placeholders — no backend communication is present.

- Typical change patterns an agent will need to follow
  - Small UI tweaks: edit individual HTML files inside `client_lak/client/pages/` and preserve the inline <script> blocks unless you also update all pages that depend on them.
  - Asset updates: add new images to `client_lak/client/imgs/` and reference them using the same relative paths. Prefer to check multiple pages for path correctness.
  - Cross-page helpers: if you centralize helpers, ensure relative script paths are correct and update every page that expects inline definitions.

- Where to look first for feature work or bug fixes
  - `client_lak/client/pages/home.html` — shows Tailwind config and primary layout patterns.
  - `client_lak/client/pages/booking/` — booking flows (active, reschedule, cancelled, complete, refunded). Good to understand event handlers and UI state patterns.
  - `client_lak/client/pages/client_payment.html` and `client_payment_proof.html` — payment UI and file upload preview patterns.

- Tests / CI
  - No tests or CI detected. Assume manual QA in the browser. If you add build tooling or tests, include a README section and update these instructions.

If anything here is unclear or you want this file expanded with examples (e.g., a short list of grep/search targets, or a suggested simple `index.html` router), tell me which area to expand and I will update the file.
