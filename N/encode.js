module.exports = {
  convert: (obj) => {
    const NodeEncodingMap = {
      UTF_8: 'utf8',
      BASE_16: 'hex',
      // TO DO add base32
      BASE_32: 'base64',
      BASE_64: 'base64',
      // TO DO add base64 URL safe
      BASE_64_URL_SAFE: 'base64',
      HEX: 'hex',
    };
    const inputBuffer = Buffer.from(obj.string, NodeEncodingMap[obj.inputEncoding]);
    return inputBuffer.toString(NodeEncodingMap[obj.outputEncoding]);
  },
  Encoding: {
    UTF_8: 'UTF_8',
    BASE_16: 'BASE_16',
    BASE_32: 'BASE_32',
    BASE_64: 'BASE_64',
    BASE_64_URL_SAFE: 'BASE_64_URL_SAFE',
    HEX: 'HEX',
  },

};
