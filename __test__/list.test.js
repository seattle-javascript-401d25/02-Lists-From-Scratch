//test push
describe('testing push', () => {
  test('arg should increase array length', () => {
    expect(push(arg).toBe(arg.length + 1));
  });
});

//test map
describe('testing map to take an array argument', () => {
  test('map should be null when not given an array argument', () => {
    expect(typeof 'value').toBe('array');
    expect(map('')).toBe(null);
    expect(map(3)).toBe(null)
  }); 
});

describe('testing map to return an array', () => {
  test('map should return an array', () => {
    expect(map().toReturn(typeof value)).toBe('array');
  }); 
});
