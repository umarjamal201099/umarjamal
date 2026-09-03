# Umar Jamal — Premium Enterprise Portfolio V19

Responsive static portfolio focused on Epicor ERP, C#/.NET, SQL Server, Xero/finance integrations, enterprise architecture, identity, API delivery and technical advisory.

## V19 curated live-preview + external-link UX

- Expanded the browser-style **live website preview** to every curated public project/reference link that has preview data: Xero, Scalar, BankMind, Bahria Town, Galvin, Caterlink, C & W Services, United Fasteners, MIT Semiconductor and Orbital UAV.
- The eye affordance appears **only** on links with preview data. Private work, contact/social links and ordinary external links do not show an eye.
- Reload, Close and **Open new tab** remain available in the preview window, with mobile/fullscreen-safe sizing and focus restoration.
- Enforced `target="_blank"` plus `rel="noopener noreferrer"` for all external HTTP(S) links, including dynamically configured URLs.
- Uses `assets/css/v19-preview.css` and `assets/js/v19-preview.js` as isolated enhancement layers.
- Updated the visible build tag to V19.

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
