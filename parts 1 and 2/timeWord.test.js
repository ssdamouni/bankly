const { timeWord } = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
  test('Works', () => {
    expect(timeWord('08:13')).toBe('eight thirteen AM');
  });
  test('Works for twelve AM', () => {
    expect(timeWord('00:13')).toBe('twelve thirteen AM');
  });
  test('Works for minutes above 20', () => {
    expect(timeWord('09:43')).toBe('nine forty three AM');
  });
  test('Works for noon', () => {
    expect(timeWord('12:00')).toBe('noon');
  });
  test('Works for midnight', () => {
    expect(timeWord('00:00')).toBe('midnight');
  });
  test('Works for PM times', () => {
    expect(timeWord('15:36')).toBe('three thirty six PM');
  });
});