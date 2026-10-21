const adjustThermostat = require('../adjustThermostat.js');

test('adjustThermostat(32, 0) should return "Hold"', () => {
    expect(adjustThermostat(32, 0)).toBe("Hold")
})

test('adjustThermostat(70, 25) should return "Heat: 7.0 degrees Fahrenheit"', () => {
    expect(adjustThermostat(70, 25)).toBe("Heat: 7.0 degrees Fahrenheit")
})

test('adjustThermostat(72, 18) should return "Cool: 7.6 degrees Fahrenheit"', () => {
    expect(adjustThermostat(72, 18)).toBe("Cool: 7.6 degrees Fahrenheit")
})

test('adjustThermostat(212, 100) should return "Hold"', () => {
    expect(adjustThermostat(212, 100)).toBe("Hold")
})

test('adjustThermostat(59, 22) should return "Heat: 12.6 degrees Fahrenheit"', () => {
    expect(adjustThermostat(59, 22)).toBe("Heat: 12.6 degrees Fahrenheit")
})
