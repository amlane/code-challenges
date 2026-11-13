const generateSignature = require("../generateSignature.js");

test('generateSignature("Quinn Waverly", "Founder and CEO", "TechCo") should return "--Quinn Waverly, Founder and CEO at TechCo"', () => {
  expect(generateSignature("Quinn Waverly", "Founder and CEO", "TechCo")).toBe(
    "--Quinn Waverly, Founder and CEO at TechCo",
  );
});

test('generateSignature("Alice Reed", "Engineer", "TechCo") should return ">>Alice Reed, Engineer at TechCo"', () => {
  expect(generateSignature("Alice Reed", "Engineer", "TechCo")).toBe(
    ">>Alice Reed, Engineer at TechCo",
  );
});

test('generateSignature("Tina Vaughn", "Developer", "example.com") should return "::Tina Vaughn, Developer at example.com"', () => {
  expect(generateSignature("Tina Vaughn", "Developer", "example.com")).toBe(
    "::Tina Vaughn, Developer at example.com",
  );
});

test('generateSignature("B. B.", "Product Tester", "AcmeCorp") should return ">>B. B., Product Tester at AcmeCorp"', () => {
  expect(generateSignature("B. B.", "Product Tester", "AcmeCorp")).toBe(
    ">>B. B., Product Tester at AcmeCorp",
  );
});

test('generateSignature("windstorm", "Cloud Architect", "Atmospheronics") should return "::windstorm, Cloud Architect at Atmospheronics"', () => {
  expect(
    generateSignature("windstorm", "Cloud Architect", "Atmospheronics"),
  ).toBe("::windstorm, Cloud Architect at Atmospheronics");
});
