# V20 QA Checklist

## Eye-screen preview fix

- [x] BankMind and other curated eye links no longer depend on third-party iframe permission.
- [x] Eye click opens a same-origin portfolio preview instead of a broken browser frame.
- [x] Real destination remains available through **Open live site** in a new tab.
- [x] External HTTP(S) links retain `noopener noreferrer`.
- [x] Preview title, description, context, tags and domain are populated from the selected project/link.
- [x] Preview iframe is hidden by default and can only be enabled explicitly with `data-preview-mode="live"`.
- [x] Close restores focus to the original eye trigger.
- [x] Modified Ctrl/Cmd/Shift/Alt clicks keep normal browser behavior.

## Static integrity

- [x] No duplicate IDs.
- [x] No missing local assets.
- [x] No broken internal anchors.
- [x] All curated preview links include valid preview metadata.
- [x] JavaScript syntax passes `node --check`.

## Hosting note

GitHub Pages is static hosting. It cannot override security headers sent by BankMind or another third-party destination. Live iframe mode should only be enabled for sites that explicitly allow your portfolio origin to frame them.
