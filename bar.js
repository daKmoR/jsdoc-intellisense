/**
 * Returns the barnes itself.
 *
 * @param {string} name Your bar name
 * @param {boolean} [great] If you are feeling great today
 * @returns {string} The barnes itself
 */
export function bar(name, great = true) {
  return `You are ${name} van bar and you are feeling ${
    great ? "great" : "bad"
  } today.
  `;
}
