import { Age } from './../src/js/calculator.js';

describe('Age', () => {

  test ('should create an age object with 5 planet properties', () => {
    const age = new Age(27, 113, 44, 14, 2);
    expect(age.earth).toEqual(27);
    expect(age.mercury).toEqual(113);
    expect(age.venus).toEqual(44);
    expect(age.mars).toEqual(14);
    expect(age.jupiter).toEqual(2);
  });
  
});