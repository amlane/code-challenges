const complementaryDNA = require("../complementaryDNA.js");

test('complementaryDNA("ACGT") should return "TGCA"', () => {
  expect(complementaryDNA("ACGT")).toBe("TGCA");
});

test('complementaryDNA("ATGCGTACGTTAGC") should return "TACGCATGCAATCG"', () => {
  expect(complementaryDNA("ATGCGTACGTTAGC")).toBe("TACGCATGCAATCG");
});

test('complementaryDNA("GGCTTACGATCGAAG") should return "CCGAATGCTAGCTTC"', () => {
  expect(complementaryDNA("GGCTTACGATCGAAG")).toBe("CCGAATGCTAGCTTC");
});

test('complementaryDNA("GATCTAGCTAGGCTAGCTAG") should return "CTAGATCGATCCGATCGATC"', () => {
  expect(complementaryDNA("GATCTAGCTAGGCTAGCTAG")).toBe("CTAGATCGATCCGATCGATC");
});
