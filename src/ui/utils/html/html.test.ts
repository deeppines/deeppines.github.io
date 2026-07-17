/**
 * @jest-environment jsdom
 */

import { escapeHtml, sanitizeRichHtml, sanitizeTarget, sanitizeUrl } from './html';

describe('html utils', () => {
  test('escapeHtml escapes special characters', () => {
    expect(escapeHtml(`<script>"x"&'y'</script>`)).toBe(
      '&lt;script&gt;&quot;x&quot;&amp;&#39;y&#39;&lt;/script&gt;'
    );
  });

  test('sanitizeTarget returns only allowed targets', () => {
    expect(sanitizeTarget('_blank')).toBe('_blank');
    expect(sanitizeTarget('_self')).toBe('_self');
    expect(sanitizeTarget('_evil')).toBeUndefined();
    expect(sanitizeTarget()).toBeUndefined();
  });

  test('sanitizeUrl allows only safe protocols and local links', () => {
    expect(sanitizeUrl('/docs/cv.pdf')).toBe('/docs/cv.pdf');
    expect(sanitizeUrl('#contacts')).toBe('#contacts');
    expect(sanitizeUrl('https://example.com')).toBe('https://example.com');
    expect(sanitizeUrl('mailto:test@example.com')).toBe('mailto:test@example.com');
    expect(sanitizeUrl('javascript:alert(1)')).toBe('#');
    expect(sanitizeUrl('not-a-url')).toBe('#');
  });

  test('sanitizeRichHtml strips unsafe tags and attributes', () => {
    const unsafeHtml =
      '<p>Hello</p><script>alert(1)</script><a href="javascript:alert(1)" target="_evil">Link</a>';

    const result = sanitizeRichHtml(unsafeHtml);

    expect(result).toContain('<p>Hello</p>');
    expect(result).not.toContain('<script>');
    expect(result).toContain('href="#"');
    expect(result).not.toContain('target="_evil"');
  });
});
