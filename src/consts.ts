// Site-wide settings — edit these to make the template your own.
export const SITE_TITLE = 'Hen0xcc';
export const SITE_TAGLINE = 'CYBERSECURITY RESEARCH // RED TEAM // BLUE TEAM // AI';
export const SITE_DESCRIPTION =
  'Investigación en ciberseguridad ofensiva y defensiva, análisis de malware, threat hunting e inteligencia artificial.';
export const SITE_VERSION = '1.0.0';

// Fictional terminal manufacturer, shown on the boot screen, the 404 page
// and the private-mode gate.
export const SITE_VENDOR = 'Hen0xcc Labs';
export const SITE_SYSTEM = 'Research Terminal';
export const SITE_MODEL = 'Try Harder';

// Sound files, one per signal. Anything left out is synthesized instead
// (see scripts/sfx.ts), so this map can be empty. Only use audio you have
// the rights to.
export const SFX_SAMPLES: Partial<
  Record<'hover' | 'select' | 'deny' | 'grant' | 'key' | 'power', string>
> = {
  deny: '/sounds/deny.ogg',
};

// Decorative only — shown in the header next to VER.
export const SITE_BUILD_ID = 'Break it. Detect it. Defend it. Prove it.';

// When true, a hacking minigame gates the site on the first visit of a
// session. The site is static, so this is a cosmetic lock rather than real
// protection: the content ships in the HTML either way.
export const PRIVATE_MODE = false;
