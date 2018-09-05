/**
 * Return a Netsuite XML Module
 *
 * @classDescription XML object
 * @constructor
 * @returns {N/Module}
 */

var node = (options) => ({ options });

var xPathSelect = (options) => {
  var xNode = options.node.options.text;
  var xPath = options.xpath;

  var parser = new DOMParser();
  var xmlDoc = parser.parseFromString(xNode, 'text/xml');
  return xmlDoc.getElementsByTagName(xPath);
};


var parser = () => ({
  fromString: options => node(options),
});

module.exports = {
  Parser: parser(),
  XPath: { select: xPathSelect }
};
