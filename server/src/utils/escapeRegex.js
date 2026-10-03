/**
 * Escapes special characters for use in regular expressions.
 * Prevents ReDoS and invalid regular expression syntax errors.
 */
export const escapeRegex = (string) => {
  if (typeof string !== 'string') return '';
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

export default escapeRegex;
