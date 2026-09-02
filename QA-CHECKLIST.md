# V16 QA Checklist

## Responsive bounds — PASS

Automated Chromium layout checks were run at:

- 320px
- 360px
- 390px
- 430px
- 640px
- 768px
- 820px
- 900px
- 1024px
- 1080px
- 1180px
- 1366px
- 1440px
- 1600px
- 1920px

Results:

- 0px document-level horizontal overflow at every tested width.
- No visible elements escaped the viewport bounds.
- The only clipped element reported by the generic detector is the intentionally off-screen `Skip to content` accessibility link while it is not focused.
- Mobile interactive controls meet the QA touch-target threshold after V16 fixes; the hidden skip link is excluded because it is intentionally unavailable until keyboard focus.

## ERP system map — PASS

- Business mode selects **Epicor ERP**.
- Technical mode selects **C# / .NET Integration Layer**.
- Security mode selects **Identity & SSO**.
- Mode state and selected node state update without page errors.
- ERP core remains dark/high-contrast in every mode.
- Semantic colors now use one coordinated green/sage/slate family.
- Mobile route chips wrap inside the viewport instead of requiring clipped horizontal scrolling.
- Xero and Scalar reference cards remain usable on mobile.

## Centaiva internal product demo — PASS

- Seven internal tabs work: Platform, Identity, Tenancy, Entitlements, Integrations, Applications and Data.
- Proper tab semantics are present: `role="tablist"`, `role="tab"`, `aria-selected`, `aria-controls`, `role="tabpanel"` and `aria-labelledby`.
- Arrow-key navigation, Home and End work.
- Fast tab changes are race-safe: an earlier delayed render cannot overwrite the latest tab selection.
- KPI and lower architecture cards are clickable and expose `aria-pressed` state.
- Card selection updates a dedicated **Selected detail** inspector rather than replacing the main layer summary.
- Mobile tabs are wrapped, readable and at least 44px tall.
- The desktop-only product-window action is hidden on phones so it cannot collapse into a narrow vertical button.
- The 320px browser address no longer clips.

## Mobile navigation — PASS

- Closed menu is hidden/inert.
- Open menu is visible and interactive.
- Escape closes the menu.
- Breakpoint behavior remains aligned at 1080px and below.

## Booking dialog — PASS

- Free and paid CTAs open the same booking dialog.
- Service preselection works (verified with the 60-minute ERP/Architecture session).
- Browser timezone auto-populates when available.
- Close action works and restores normal page state.
- 320px dialog remains within the viewport and scrolls internally.
- No payment secrets are stored in frontend code.

## Static integrity — PASS

- Duplicate IDs: none.
- Broken internal anchors: none.
- Missing referenced local assets: none.
- Images missing `alt`: none.
- `_blank` links missing `noopener`: none.
- Buttons missing `type`: none.
- `node --check assets/js/modern.js`: pass.
- CSS parser errors in `modern.css`: none.
- CSS parser errors in `v16-polish.css`: none.
- Browser console/page errors during automated interaction checks: none.

## Visual QA performed

Key sections were rendered at phone and desktop widths for manual inspection:

- Hero
- ERP architecture map
- Centaiva interactive product screen
- Delivery/approach flow
- Advisory section
- Booking dialog

## Production-only checks still required after IIS deployment

- Verify real HTTPS certificate/binding and redirect behavior.
- Verify Formspree accepts submissions from the production domain.
- Add and test real public scheduler URLs if desired.
- Complete one genuine scheduling/payment flow before advertising instant paid booking.
- Test real iPhone/Safari and Android/Chrome hardware.
- Run Lighthouse against the deployed HTTPS URL.
