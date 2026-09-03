# V17 QA Checklist

## Responsive matrix
Browser layout/interaction QA was run at: **320, 360, 390, 430, 768, 820, 1024, 1440 and 1920 px**.

Results:
- 0px document-level horizontal overflow at every tested width.
- No visible elements escaping the viewport in the tested states.
- No browser console errors or page errors in the tested interactions.

## Mobile ERP system map
- Desktop node network is replaced at 700px and below by a compact one-tap system explorer.
- Business mode exposes Customer → CRM → Epicor ERP.
- Technical mode exposes Epicor ERP → .NET → REST API → Apps → SQL.
- Security mode exposes Identity → REST API → Apps → Epicor ERP.
- Layer chips update the explanation, focus, method and result in one tap.
- “Next layer” advances through the current mode without a long page scroll.
- Desktop/tablet interactive system map remains available above the mobile breakpoint.

## Booking dialog
- Mobile dialog fills the usable viewport without horizontal clipping.
- The long discovery/advisory sidebar is removed on mobile so the form is visible immediately.
- Free / 30 / 60 / 90 minute sessions are selectable with one tap.
- Session choice stays synchronized with the existing form `<select>` and live-booking configuration.
- 60-minute paid-session selection was explicitly tested.
- Form inputs remain 16px on mobile to avoid iOS auto-zoom.
- Dialog close control, internal scrolling and safe-area padding were checked at 320px and 390px.

## Centaiva interactive window
- All seven architecture layers are visible on mobile in a compact wrapped control grid.
- No hidden horizontal tab overflow.
- Identity tab interaction was tested and updates the product content in-place.
- Existing keyboard interaction remains intact.

## Static checks
- No duplicate HTML IDs.
- No missing local assets.
- No broken internal anchor targets.
- `modern.js` and `v17-ui.js` pass `node --check`.
- CSS brace counts are balanced for `modern.css`, `v16-polish.css` and `v17-premium.css`.

## Intentionally not tested
- Formspree submission was not sent to avoid creating a fake lead.
- External scheduler/payment flows remain dependent on public URLs configured in `assets/js/booking-config.js`.
- Production IIS/GitHub Pages cache and TLS behavior must be verified after deployment.
