import { Age } from './../src/js/calculator.js';
import { LifeExpectancy } from './../src/js/calculator.js';

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

describe('LifeExpectancy', () => {
  let lifeExpectancy; 
  
  beforeEach(() => { 
    lifeExpectancy = new LifeExpectancy(1, 2, 3);
  });
  

  test('should create a life expectancy object with demographic properties', () => {
    expect(lifeExpectancy.lifestyle).toEqual(1);
    expect(lifeExpectancy.countryOfResidence).toEqual(2);
    expect(lifeExpectancy.activityLevel).toEqual(3);
  });

  test('should calculate a persons life expectancy on planet earth as 85(medium) based on lifeExpectancy property values', () => {
    expect(lifeExpectancy.calculateLifeExpectancy()).toEqual(90);
  });

  test('should calculate a persons life expectancy on planet earth as 85(medium) based on lifeExpectancy property values', () => {
    let lifeExpectancy = new LifeExpectancy(2, 2, 1);
    expect(lifeExpectancy.calculateLifeExpectancy()).toEqual(85);
  });

});