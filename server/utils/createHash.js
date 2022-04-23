const crypto = require('crypto');

function createHash(data) {
  const hash = crypto.createHash('sha256').update(data).digest('hex');
  return hash;
}

module.exports = createHash;
