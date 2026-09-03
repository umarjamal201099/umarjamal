# V21 QA checklist

## Fixed from the reported mobile screenshot
- Replaced the floating circular eye + separate `Preview` label with one compact **eye + Preview pill**.
- Removed the generic circular dash from the private CRM row; it now uses a quiet **Private case** status.
- Removed the generic circular up-arrow from Epicor ERP Delivery; it now uses a clear **Experience →** action.
- Removed horizontal hover-shifting from Additional project work rows.
- Increased project title and metadata readability on mobile.
- Added stronger focus-visible treatment for keyboard users.
- Kept the full project row clickable, while keeping the action visually clear.
- At very narrow widths, the action remains in a controlled right column rather than floating above/below unpredictably.

## Preview policy
- Eye/Preview is rendered only on rows with valid `data-site-preview` metadata.
- Private/non-preview rows do not receive an eye.
- External links use `target="_blank"` with `noopener noreferrer`.
- Eye click continues to open the same-origin portfolio preview dialog; **Open live site** remains the external new-tab path.

## Static validation
- Duplicate IDs: 0
- Missing local assets: 0
- Broken internal anchors: 0
- External-link security errors: 0
- Legacy circular dash/up-arrow icons in Additional project work: 0
- JavaScript syntax: passed (`modern.js`, `v17-ui.js`, `v20-preview.js`)
- V21 CSS braces: balanced

See `QA-RESULTS.json` for the machine-readable checks.
