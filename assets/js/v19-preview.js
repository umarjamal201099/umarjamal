(() => {
  'use strict';

  /* -------------------------------------------------------
     External-link policy
     - Every remote HTTP(S) URL opens in a new tab.
     - rel=noopener,noreferrer is enforced.
     - A screen-reader-only hint communicates the behavior.
     ------------------------------------------------------- */
  const externalLinks = [...document.querySelectorAll('a[href]')].filter((link) => {
    const raw = link.getAttribute('href') || '';
    if (!/^https?:/i.test(raw)) return false;
    try {
      return new URL(raw, window.location.href).origin !== window.location.origin;
    } catch {
      return false;
    }
  });

  externalLinks.forEach((link) => {
    link.target = '_blank';
    const rel = new Set((link.getAttribute('rel') || '').split(/\s+/).filter(Boolean));
    rel.add('noopener');
    rel.add('noreferrer');
    link.setAttribute('rel', [...rel].join(' '));
    link.classList.add('external-new-tab');

    if (!link.querySelector('[data-new-tab-hint]')) {
      const hint = document.createElement('span');
      hint.className = 'sr-only';
      hint.dataset.newTabHint = '';
      hint.textContent = ' (opens in a new tab)';
      link.append(hint);
    }
  });

  /* -------------------------------------------------------
     In-portfolio live website preview
     Only curated public links with data-site-preview receive the eye affordance.
     The normal href remains intact as a graceful fallback.
     Ctrl/Cmd/Shift/Alt click keeps standard new-tab behavior.
     ------------------------------------------------------- */
  const dialog = document.getElementById('site-preview-dialog');
  if (!dialog) return;

  const frame = dialog.querySelector('[data-site-preview-frame]');
  const loading = dialog.querySelector('[data-site-preview-loading]');
  const title = dialog.querySelector('[data-site-preview-title]');
  const kicker = dialog.querySelector('[data-site-preview-kicker]');
  const description = dialog.querySelector('[data-site-preview-description]');
  const domain = dialog.querySelector('[data-site-preview-domain]');
  const openLink = dialog.querySelector('[data-site-preview-open]');
  const closeButton = dialog.querySelector('[data-site-preview-close]');
  const reloadButton = dialog.querySelector('[data-site-preview-reload]');
  const previewCandidates = [...document.querySelectorAll('[data-site-preview]')];
  const triggers = previewCandidates.filter((trigger) => {
    const raw = trigger.getAttribute('href') || trigger.dataset.previewUrl || '';
    const hasLabel = Boolean((trigger.dataset.previewTitle || '').trim());
    if (!raw || !hasLabel) {
      trigger.removeAttribute('data-site-preview');
      return false;
    }
    try {
      const parsed = new URL(raw, window.location.href);
      if (!/^https?:$/.test(parsed.protocol)) {
        trigger.removeAttribute('data-site-preview');
        return false;
      }
      return true;
    } catch {
      trigger.removeAttribute('data-site-preview');
      return false;
    }
  });


  /* -------------------------------------------------------
     Preview affordance policy
     - Only links explicitly carrying data-site-preview receive an eye.
     - Private work, contact/social links, and ordinary external links do not.
     - The visual cue is injected here so the rule stays consistent site-wide.
     ------------------------------------------------------- */
  const eyeMarkup = `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M2.7 12s3.5-6 9.3-6 9.3 6 9.3 6-3.5 6-9.3 6-9.3-6-9.3-6Z"></path>
      <circle cx="12" cy="12" r="2.7"></circle>
    </svg>`;

  const decoratePreviewTrigger = (trigger) => {
    trigger.classList.add('site-preview-trigger');

    if (trigger.closest('.client-list')) {
      const tail = trigger.querySelector('i');
      if (tail) {
        tail.classList.add('site-preview-row-cue');
        tail.innerHTML = `${eyeMarkup}<span>Preview</span>`;
        return;
      }
    }

    if (!trigger.querySelector('.site-preview-eye-cue')) {
      const cue = document.createElement('span');
      cue.className = 'site-preview-eye-cue';
      cue.setAttribute('aria-hidden', 'true');
      cue.innerHTML = eyeMarkup;
      trigger.prepend(cue);
    }
  };

  triggers.forEach(decoratePreviewTrigger);

  let currentUrl = '';
  let lastTrigger = null;
  let loadTimer = 0;

  const showDialog = () => {
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else dialog.setAttribute('open', '');
    document.body.classList.add('site-preview-open');
  };

  const hideLoadingSoon = () => {
    window.clearTimeout(loadTimer);
    loadTimer = window.setTimeout(() => loading?.classList.add('is-complete'), 180);
  };

  const setFrameUrl = (url) => {
    if (!frame) return;
    loading?.classList.remove('is-complete');
    frame.title = `${title?.textContent || 'Live website'} preview`;
    frame.src = 'about:blank';
    // Allow the dialog paint/focus transition to complete before starting the remote page.
    window.requestAnimationFrame(() => {
      frame.src = url;
    });
  };

  const openPreview = (trigger) => {
    const url = trigger.getAttribute('href') || trigger.dataset.previewUrl || '';
    if (!url) return;

    let parsed;
    try { parsed = new URL(url, window.location.href); }
    catch { return; }

    currentUrl = parsed.href;
    lastTrigger = trigger;

    if (title) title.textContent = trigger.dataset.previewTitle || trigger.textContent.trim() || 'Live website';
    if (kicker) kicker.textContent = trigger.dataset.previewKicker || 'Live website preview';
    if (description) description.textContent = trigger.dataset.previewDescription || 'Explore the public website without leaving the portfolio.';
    if (domain) domain.textContent = parsed.hostname.replace(/^www\./, '');
    if (openLink) openLink.href = currentUrl;

    showDialog();
    setFrameUrl(currentUrl);
    window.setTimeout(() => closeButton?.focus({ preventScroll: true }), 0);
  };

  triggers.forEach((trigger) => {
    trigger.addEventListener('click', (event) => {
      // Preserve standard browser behavior for modified clicks and non-primary buttons.
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      openPreview(trigger);
    });
  });

  frame?.addEventListener('load', hideLoadingSoon);

  reloadButton?.addEventListener('click', () => {
    if (!currentUrl) return;
    setFrameUrl(currentUrl);
  });

  const closePreview = () => {
    document.body.classList.remove('site-preview-open');
    if (dialog.open && typeof dialog.close === 'function') dialog.close();
    else dialog.removeAttribute('open');
  };

  closeButton?.addEventListener('click', closePreview);

  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) closePreview();
  });

  dialog.addEventListener('close', () => {
    document.body.classList.remove('site-preview-open');
    window.clearTimeout(loadTimer);
    loading?.classList.remove('is-complete');
    if (frame) frame.src = 'about:blank';
    currentUrl = '';
    const restore = lastTrigger;
    lastTrigger = null;
    window.setTimeout(() => restore?.focus({ preventScroll: true }), 0);
  });
})();
