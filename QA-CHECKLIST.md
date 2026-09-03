# V19 QA Checklist

## Live website preview
- Curated public project/reference links with preview data use the in-portfolio browser-style preview dialog on a normal click.
- Eye indicators are rendered only on `data-site-preview` links; private work, social/contact and ordinary external links have no eye.
- Ctrl/Cmd/Shift/Alt-click keeps native browser behavior and opens the original URL normally.
- The preview keeps a permanent **Open new tab** action for sites that block iframe embedding.
- Reload and Close controls are keyboard-focusable and meet mobile touch-target sizing.
- Closing the dialog restores focus to the trigger that opened the preview.
- Closing also removes the body scroll-lock class immediately.
- The iframe is reset to `about:blank` after close so remote pages do not continue running in the background.

## External links
- Every static external HTTP(S) link has `target="_blank"`.
- Every static external HTTP(S) link has `rel="noopener noreferrer"`.
- V19 JavaScript also enforces the same policy at runtime for external links configured dynamically.
- Runtime external links receive an accessible “opens in a new tab” hint for screen readers.

## Preview-data policy
- 13 public project/reference link instances currently carry preview metadata.
- Each preview instance has a valid HTTP(S) URL, title and description.
- The eye cue is generated only after that data validates in JavaScript.
- Links without preview data keep normal external-link behavior and show no eye.
- The modal itself retains the responsive V18/V17 layout foundation; re-check the deployed build on real devices because third-party iframe behavior cannot be fully validated from static QA.

## Static checks
- No duplicate HTML IDs.
- No missing local assets.
- No broken internal anchor targets.
- `modern.js`, `v17-ui.js`, and `v19-preview.js` pass `node --check`.
- CSS brace counts are balanced for `modern.css`, `v16-polish.css`, `v17-premium.css`, and `v19-preview.css`.

## Important deployment note
Any previewed public page is a third-party origin. If its production server sends `X-Frame-Options` or a CSP `frame-ancestors` rule that disallows embedding, browsers may refuse to render it inside an iframe. V19 deliberately keeps **Open new tab** visible as the reliable fallback. This restriction cannot be bypassed safely from a static portfolio.

## Not submitted during QA
- Formspree booking requests were not sent, to avoid creating a fake lead.
- Scheduler/payment flows still depend on public URLs configured in `assets/js/booking-config.js`.
