# Umar Jamal — Premium Enterprise Portfolio V17

Responsive static portfolio focused on Epicor ERP, C#/.NET, SQL Server, Xero/finance integrations, enterprise architecture, identity, API delivery and technical advisory.

## V17 mobile UX + visual system

- Replaced the very long mobile ERP node stack with a **one-tap system explorer**. Business, Technical and Security modes now show only the relevant layers and update one focused detail card.
- Added a **Next layer** interaction so a client can understand the system flow without scrolling through every node.
- Reworked mobile booking into a **one-click session picker** for Free / 30 / 60 / 90 minute sessions, with the form shown immediately instead of placing a large advisory sidebar before it.
- Unified the site around a neutral **white / cool-slate / deep-teal** enterprise palette with one restrained primary accent.
- Kept the Epicor core and architecture detail panel high-contrast while removing mismatched green/amber/blue washes.
- Reworked Centaiva mobile controls so **all seven internal layers are visible** without horizontal clipping or hidden overflow.
- Increased small technical metadata sizes and kept 44px-class touch targets for important controls.
- Preserved reduced-motion behavior, keyboard interaction, booking fallbacks and the desktop interactive map.
- Added `assets/css/v17-premium.css` and `assets/js/v17-ui.js` as isolated final layers so the new mobile behavior does not destabilize the existing desktop implementation.
- Updated the visible build tag to V17.

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

## GitHub Pages

All website asset paths are relative, so the project remains compatible with a project site such as `username.github.io/repository/`.

## Deployment targets

Plain HTML/CSS/JavaScript. Suitable for IIS, GitHub Pages, Netlify, Cloudflare Pages and similar static hosting.
