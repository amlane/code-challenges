/*
Email Signature Generator
Given strings for a person's name, title, and company, return an email signature as a single string using the following rules:

The name should appear first, preceded by a prefix that depends on the first letter of the name. For names starting with (case-insensitive):
A-I: Use >> as the prefix.
J-R: Use -- as the prefix.
S-Z: Use :: as the prefix.
A comma and space (, ) should follow the name.
The title and company should follow the comma and space, separated by " at " (with spaces around it).
For example, given "Quinn Waverly", "Founder and CEO", and "TechCo" return "--Quinn Waverly, Founder and CEO at TechCo".

Tests:
generateSignature("Quinn Waverly", "Founder and CEO", "TechCo") should return "--Quinn Waverly, Founder and CEO at TechCo".
generateSignature("Alice Reed", "Engineer", "TechCo") should return ">>Alice Reed, Engineer at TechCo".
generateSignature("Tina Vaughn", "Developer", "example.com") should return "::Tina Vaughn, Developer at example.com".
generateSignature("B. B.", "Product Tester", "AcmeCorp") should return ">>B. B., Product Tester at AcmeCorp".
generateSignature("windstorm", "Cloud Architect", "Atmospheronics") should return "::windstorm, Cloud Architect at Atmospheronics".
*/

/*
Same tradeoff here as yesterday's challenge as far as regex vs char code.
Could be solved both ways. Using char code would be slightly more performant but at the cost of readability.
*/

function generateSignature(name, title, company) {
  let prefix = "";
  let first = name[0];

  if (/[a-iA-I]/.test(first)) prefix = ">>";
  if (/[j-rJ-R]/.test(first)) prefix = "--";
  if (/[s-zS-Z]/.test(first)) prefix = "::";

  return `${prefix}${name}, ${title} at ${company}`;
}

module.exports = generateSignature;
