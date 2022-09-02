import { Age } from './../src/js/calculator.js';
import { LifeExpectancy } from './../src/js/calculator.js';

describe('Age', () => {
  let age;
  let lifeExpectancy; 

  beforeEach(() => {
    age = new Age(27, 0, 0, 0, 0);
    lifeExpectancy = new LifeExpectancy(1, 2, 3);
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

  test ('should assign key-value pairs for each property equal to how many years a user has left to live on each planet.', () => 
  {
    age.calculateRemainingLife();
    expect(age.earth[0]).toEqual(63);
    expect(age.mercury[0]).toEqual(262);
    expect(age.venus[0]).toEqual(101);
    expect(age.mars[0]).toEqual(34);
    expect(age.jupiter[0]).toEqual(6);
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

  test('should calculate a persons life expectancy on planet earth as 70 based on lifeExpectancy property values', () => {
    let lifeExpectancy = new LifeExpectancy(1, 2, 1);
    expect(lifeExpectancy.calculateLifeExpectancy()).toEqual(70);
  });

  test('should calculate a persons life expectancy on planet earth as 85 based on lifeExpectancy property values', () => {
    let lifeExpectancy = new LifeExpectancy(2, 2, 1);
    expect(lifeExpectancy.calculateLifeExpectancy()).toEqual(85);
  });

  test('should calculate a persons life expectancy on planet earth as 90 based on lifeExpectancy property values', () => {
    expect(lifeExpectancy.calculateLifeExpectancy()).toEqual(90);
  });


  test('should calculate a persons life expectancy on planet earth as 100 based on lifeExpectancy property values', () => {
    let lifeExpectancy = new LifeExpectancy(3, 3, 2);
    expect(lifeExpectancy.calculateLifeExpectancy()).toEqual(100);
  });

  test('should calculate a persons life expectancy on planet earth as 100 based on lifeExpectancy property values', () => {
    let lifeExpectancy = new LifeExpectancy(3, 1, 3);
    expect(lifeExpectancy.calculateLifeExpectancy()).toEqual(100);
  });

});