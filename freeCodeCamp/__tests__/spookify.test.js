const spookify = require("../spookify.js");

test('spookify("hello_world") should return "HeLlO~wOrLd"', () => {
  expect(spookify("hello_world")).toBe("HeLlO~wOrLd");
});

test('spookify("Spooky_Case") should return "SpOoKy~CaSe"', () => {
  expect(spookify("Spooky_Case")).toBe("SpOoKy~CaSe");
});

test('spookify("TRICK-or-TREAT") should return "TrIcK~oR~tReAt"', () => {
  expect(spookify("TRICK-or-TREAT")).toBe("TrIcK~oR~tReAt");
});

test('spookify("c_a-n_d-y_-b-o_w_l") should return "C~a~N~d~Y~~b~O~w~L"', () => {
  expect(spookify("c_a-n_d-y_-b-o_w_l")).toBe("C~a~N~d~Y~~b~O~w~L");
});

test('spookify("thE_hAUntEd-hOUsE-Is-fUll_Of_ghOsts") should return "ThE~hAuNtEd~HoUsE~iS~fUlL~oF~gHoStS"', () => {
  expect(spookify("thE_hAUntEd-hOUsE-Is-fUll_Of_ghOsts")).toBe(
    "ThE~hAuNtEd~HoUsE~iS~fUlL~oF~gHoStS",
  );
});
