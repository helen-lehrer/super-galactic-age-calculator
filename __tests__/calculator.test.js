import { Age } from './../src/js/calculator.js';

describe('Age', () => {
  let age;

  beforeEach(() => {
    age = new Age(27, 0, 0, 0, 0);
  });

  test ('should create an age object with 5 planet properties', () => {
    expect(age.earth).toEqual(27);
    expect(age.mercury).toEqual(0);
    expect(age.venus).toEqual(0);
    expect(age.mars).toEqual(0);
    expect(age.jupiter).toEqual(0);
  });

  test ('should calculate planet ages', () =>
  {
    age.calculatePlanetaryAges();
    expect(age.earth).toEqual(27);
    expect(age.mercury).toEqual(113);
    expect(age.venus).toEqual(44);
    expect(age.mars).toEqual(14);
    expect(age.jupiter).toEqual(2);

  });

});