# Umar Jamal — Premium Enterprise Portfolio V16

Responsive static portfolio focused on Epicor ERP, C#/.NET, SQL Server, Xero/finance integrations, enterprise architecture, identity, API delivery and technical advisory.

## V16 stability + UI polish

- Added a final override layer in `assets/css/v16-polish.css` so earlier version patches cannot re-introduce color, touch-target or responsive regressions.
- Unified the site around white/soft-sage surfaces, graphite text and one restrained enterprise-green family.
- Reworked ERP map semantic colors into coordinated green/sage/slate tones instead of unrelated blue/amber accents.
- Increased very small map/product labels and improved mobile readability.
- Added 44px minimum touch targets to Centaiva tabs and key external reference actions.
- Fixed a 320px Centaiva browser-bar clipping issue by shortening the internal address label and hiding the desktop-only browser action on phones.
- Improved the Centaiva product demo with complete tab semantics (`aria-controls`, `aria-labelledby`), pressed-state semantics for clickable cards and an internal selected-detail inspector.
- Fixed fast tab switching so a delayed previous render can no longer overwrite the newest selected Centaiva layer.
- Clicking KPI/detail cards no longer destroys the layer summary; the selected item is shown in a dedicated inspector.
- Preserved keyboard tab navigation with Arrow keys, Home and End.
- Preserved Business / Technical / Security ERP map modes and mode-specific default selections.
- Added safer section scroll margins for the fixed header.
- Tightened booking-dialog scrolling, focus styles and mobile form behavior.
- Updated the visible build tag to V16.

## Booking

See `BOOKING-SETUP.md`.

The site works without a scheduler account. Add only public Cal.com, Google Calendar, TidyCal or another scheduling URL to `assets/js/booking-config.js`; configured sessions automatically expose the live-booking action.

## Run locally

```bash
python -m http.server 8080
```

Open `http://localhost:8080`.

## IIS deployment

The project includes `web.config`. Copy the folder to the IIS site root and enable IIS Static Content. Configure the production HTTPS binding/redirect after the certificate is installed.

## Deployment targets

Plain HTML/CSS/JavaScript. Suitable for IIS, GitHub Pages, Netlify, Cloudflare Pages and similar static hosting.
