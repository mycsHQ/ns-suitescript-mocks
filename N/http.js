/**
 * Return a Netsuite HTTP Module
 *
 */

module.exports = {
  post: obj => ({ code: 200, body: JSON.stringify({ url: obj.url }) }),
  get: obj => ({ code: 200, body: JSON.stringify({ url: obj.url }) }),
  delete: obj => ({ body: JSON.stringify({ url: obj.url }), code: 200 }),
};
