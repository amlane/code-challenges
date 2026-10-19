/*
HTML Attribute Extractor
Given a string of a valid HTML element, return the attributes of the element using the following criteria:

- You will only be given one element.
- Attributes will be in the format: attribute="value".
- Return an array of strings with each attribute property and value, separated by a comma, in this format: ["attribute1, value1", "attribute2, value2"].
- Return attributes in the order they are given.
- If no attributes are found, return an empty array.

Tests:
extractAttributes('<span class="red"></span>') should return ["class, red"].
extractAttributes('<meta charset="UTF-8" />') should return ["charset, UTF-8"].
extractAttributes("<p>Lorem ipsum dolor sit amet</p>") should return [].
extractAttributes('<input name="email" type="email" required="true" />') should return ["name, email", "type, email", "required, true"].
extractAttributes('<button id="submit" class="btn btn-primary">Submit</button>') should return ["id, submit", "class, btn btn-primary"]. 

Edge Cases:
extractAttributes('<p>1+2=3</p>') should return []. 
extractAttributes('<code>&lt;div class="container"&gt;Content&lt;/div&gt;</code>') should return []. 
*/

// could use dependency like "cheerio" or "jsdom" to parse HTML strings but this solution is how to do it without relying on external libraries

function extractAttributes(element) {
  const openTag = element.slice(element.indexOf(" "), element.indexOf(">"));
  let result = [];

  let startIndex = openTag.indexOf(" ") + 1;
  let equalsIndex = openTag.indexOf("=");

  while (equalsIndex !== -1) {
    let key = openTag.slice(startIndex, equalsIndex);

    let attr = openTag.slice(
      equalsIndex + 2,
      openTag.indexOf('"', equalsIndex + 2, openTag.indexOf('"')),
    );

    startIndex = openTag.indexOf(" ", equalsIndex + 1) + 1;
    equalsIndex = openTag.indexOf("=", equalsIndex + 1);

    result.push(`${key}, ${attr}`);
  }

  return result;
}

module.exports = extractAttributes;
