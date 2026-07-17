import xss, { type IWhiteList } from 'xss';

const ALLOWED_TARGETS = new Set(['_blank', '_self', '_parent', '_top']);
const ALLOWED_PROTOCOLS = new Set(['http:', 'https:', 'mailto:']);

const richHtmlWhitelist: IWhiteList = {
  a: ['href', 'title', 'target', 'rel', 'class'],
  p: ['class'],
  div: ['class'],
  span: ['class'],
  ul: ['class'],
  li: ['class'],
  br: [],
  strong: [],
  em: [],
  b: [],
  i: [],
  code: ['class'],
  svg: [
    'class',
    'width',
    'height',
    'viewBox',
    'fill',
    'stroke',
    'stroke-width',
    'stroke-linecap',
    'stroke-linejoin',
    'xmlns',
  ],
  path: ['d', 'fill', 'stroke', 'stroke-width', 'stroke-linecap', 'stroke-linejoin'],
};

export const escapeHtml = (value: string): string => {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
};

export const sanitizeTarget = (target?: string): string | undefined => {
  if (!target) {
    return undefined;
  }

  return ALLOWED_TARGETS.has(target) ? target : undefined;
};

export const sanitizeUrl = (url: string): string => {
  if (url.startsWith('/')) {
    return url;
  }

  if (url.startsWith('#')) {
    return url;
  }

  try {
    const parsed = new URL(url);

    return ALLOWED_PROTOCOLS.has(parsed.protocol) ? url : '#';
  } catch {
    return '#';
  }
};

export const sanitizeRichHtml = (value: string): string => {
  return xss(value, {
    whiteList: richHtmlWhitelist,
    stripIgnoreTag: true,
    stripIgnoreTagBody: ['script', 'style'],
    onTagAttr: (tag, name, value) => {
      if (tag === 'a' && name === 'href') {
        return `href="${escapeHtml(sanitizeUrl(value))}"`;
      }

      if (tag === 'a' && name === 'target') {
        const safeTarget = sanitizeTarget(value);
        return safeTarget ? `target="${safeTarget}"` : '';
      }

      return undefined;
    },
  });
};
