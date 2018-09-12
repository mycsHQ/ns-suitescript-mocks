/**
 * Return a Netsuite XML Module
 *
 * @classDescription XML object
 * @constructor
 * @returns {N/Module}
 */

const node = options => ({ options });

const xPathSelect = (options) => {
  const xNode = options.node.options.text;
  const xPath = options.xpath;

  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xNode, 'text/xml');
  return xmlDoc.getElementsByTagName(xPath);
};


const parser = () => ({
  fromString: options => node(options),
});

module.exports = {
  Parser: parser(),
  XPath: { select: xPathSelect },
};
