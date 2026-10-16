/*
Tests:
validate("a@b.cd") should return true.
validate("hell.-w.rld@example.com") should return true.
validate(".b@sh.rc") should return false.
validate("example@test.c0") should return false.
validate("freecodecamp.org") should return false.
validate("develop.ment_user@c0D!NG.R.CKS") should return true.
validate("hello.@wo.rld") should return false.
validate("hello@world..com") should return false.
validate("develop..ment_user@c0D!NG.R.CKS") should return false.
validate("git@commit@push.io") should return false. 
*/

const { validateWithRegex, validate } = require("../emailValidator.js");

test('validateWithRegex("a@b.cd") should return true', () => {
  expect(validateWithRegex("a@b.cd")).toBe(true);
});

test('validateWithRegex("hell.-w.rld@example.com") should return true', () => {
  expect(validateWithRegex("hell.-w.rld@example.com")).toBe(true);
});

test('validateWithRegex(".b@sh.rc") should return false', () => {
  expect(validateWithRegex(".b@sh.rc")).toBe(false);
});

test('validateWithRegex("example@test.c0") should return false', () => {
  expect(validateWithRegex("example@test.c0")).toBe(false);
});

test('validateWithRegex("freecodecamp.org") should return false', () => {
  expect(validateWithRegex("freecodecamp.org")).toBe(false);
});

test('validateWithRegex("develop.ment_user@c0D!NG.R.CKS") should return true', () => {
  expect(validateWithRegex("develop.ment_user@c0D!NG.R.CKS")).toBe(true);
});

test('validateWithRegex("hello.@wo.rld") should return false', () => {
  expect(validateWithRegex("hello.@wo.rld")).toBe(false);
});

test('validateWithRegex("hello@world..com") should return false', () => {
  expect(validateWithRegex("hello@world..com")).toBe(false);
});

test('validateWithRegex("develop..ment_user@c0D!NG.R.CKS") should return false', () => {
  expect(validateWithRegex("develop..ment_user@c0D!NG.R.CKS")).toBe(false);
});

test('validateWithRegex("git@commit@push.io") should return false', () => {
  expect(validateWithRegex("git@commit@push.io")).toBe(false);
});

// 2nd solution with ruleset and engine

test('validate("a@b.cd") should return true', () => {
  expect(validate("a@b.cd")).toBe(true);
});

test('validate("hell.-w.rld@example.com") should return true', () => {
  expect(validate("hell.-w.rld@example.com")).toBe(true);
});

test('validate(".b@sh.rc") should return false', () => {
  expect(validate(".b@sh.rc")).toBe(false);
});

test('validate("example@test.c0") should return false', () => {
  expect(validate("example@test.c0")).toBe(false);
});

test('validate("freecodecamp.org") should return false', () => {
  expect(validate("freecodecamp.org")).toBe(false);
});

test('validate("develop.ment_user@c0D!NG.R.CKS") should return true', () => {
  expect(validate("develop.ment_user@c0D!NG.R.CKS")).toBe(true);
});

test('validate("hello.@wo.rld") should return false', () => {
  expect(validate("hello.@wo.rld")).toBe(false);
});

test('validate("hello@world..com") should return false', () => {
  expect(validate("hello@world..com")).toBe(false);
});

test('validate("develop..ment_user@c0D!NG.R.CKS") should return false', () => {
  expect(validate("develop..ment_user@c0D!NG.R.CKS")).toBe(false);
});

test('validate("git@commit@push.io") should return false', () => {
  expect(validate("git@commit@push.io")).toBe(false);
});
