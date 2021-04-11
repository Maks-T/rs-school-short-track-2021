/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const str = String(email.match(/@\w+.+/gi));
  return String(str.match(/\w+.+/gi));
}

module.exports = getEmailDomain;
