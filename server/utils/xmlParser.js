const { XMLParser } = require('fast-xml-parser');

const parseXML = (xmlData) => {
  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '@_',
  });
  return parser.parse(xmlData);
};

module.exports = parseXML;
