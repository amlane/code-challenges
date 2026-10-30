const navigate = require("../navigate.js");

test('navigate(["Visit About Us", "Back", "Forward"]) should return "About Us"', () => {
  expect(navigate(["Visit About Us", "Back", "Forward"])).toBe("About Us");
});

test('navigate(["Forward"]) should return "Home"', () => {
  expect(navigate(["Forward"])).toBe("Home");
});

test('navigate(["Back"]) should return "Home"', () => {
  expect(navigate(["Back"])).toBe("Home");
});

test('navigate(["Visit About Us", "Visit Gallery"]) should return "Gallery"', () => {
  expect(navigate(["Visit About Us", "Visit Gallery"])).toBe("Gallery");
});

test('navigate(["Visit About Us", "Visit Gallery", "Back", "Back"]) should return "Home"', () => {
  expect(navigate(["Visit About Us", "Visit Gallery", "Back", "Back"])).toBe(
    "Home",
  );
});

test('navigate(["Visit About", "Visit Gallery", "Back", "Visit Contact", "Forward"]) should return "Contact"', () => {
  expect(
    navigate([
      "Visit About",
      "Visit Gallery",
      "Back",
      "Visit Contact",
      "Forward",
    ]),
  ).toBe("Contact");
});

test('navigate(["Visit About Us", "Visit Visit Us", "Forward", "Visit Contact Us", "Back"]) should return "Visit Us"', () => {
  expect(
    navigate([
      "Visit About Us",
      "Visit Visit Us",
      "Forward",
      "Visit Contact Us",
      "Back",
    ]),
  ).toBe("Visit Us");
});
