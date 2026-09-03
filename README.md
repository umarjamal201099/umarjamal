# Umar Jamal — Premium Enterprise Portfolio V21

Responsive static portfolio focused on Epicor ERP, C#/.NET, SQL Server, Xero/finance integrations, enterprise architecture, identity, API delivery and technical advisory.

## V21 — reliable eye-screen website previews

- Curated links still use the portfolio **eye** affordance, but the eye screen no longer tries to iframe third-party websites by default.
- The eye now opens a reliable same-origin **portfolio preview** with the project context, technology/role tags and the real destination domain.
- **Open live site** always opens the real external website in a new tab.
- This avoids the broken-page icon caused when external sites send `X-Frame-Options` or CSP `frame-ancestors` rules that prohibit embedding.
- Optional iframe mode is still supported by `assets/js/v20-preview.js` for a destination explicitly marked `data-preview-mode="live"` after verifying that the destination permits framing.
- Eye cues appear only on links with preview metadata. Private work, contact/social links and ordinary external links do not show an eye.
- All external HTTP(S) links use `target="_blank"` plus `rel="noopener noreferrer"`.
- Uses `assets/css/v20-preview.css` and `assets/js/v20-preview.js` as isolated enhancement layers.

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
