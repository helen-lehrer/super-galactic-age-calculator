import { GalacticCalculator } from './../src/js/calculator.js';
import { LifeExpectancy } from './../src/js/calculator.js';

describe('galacticCalculator', () => {
  let galacticCalculator; 

  beforeEach(() => {
    galacticCalculator = new GalacticCalculator();
  });

  test ('should create an galacticCalculator object with planet properties equal to empty objects', () => {
    expect(galacticCalculator.earth).toEqual({});
    expect(galacticCalculator.mercury).toEqual({});
    expect(galacticCalculator.venus).toEqual({});
    expect(galacticCalculator.mars).toEqual({});
    expect(galacticCalculator.jupiter).toEqual({});
  });

  test ('should calculate planet ages', () =>
  {
    galacticCalculator.calculatePlanetaryAges(27);
    expect(galacticCalculator.earth["age"]).toEqual(27);
    expect(galacticCalculator.mercury["age"]).toEqual(113);
    expect(galacticCalculator.venus["age"]).toEqual(44);
    expect(galacticCalculator.mars["age"]).toEqual(14);
    expect(galacticCalculator.jupiter["age"]).toEqual(2);
  });

  test ('should assign key-value pairs for each property equal to how many years a user has left to live on each planet.', () => 
  {
    galacticCalculator.calculatePlanetaryAges(27);
    galacticCalculator.calculateRemainingLife(90);
    expect(galacticCalculator.earth["remaining-life"]).toEqual(63);
    expect(galacticCalculator.mercury["remaining-life"]).toEqual(262);
    expect(galacticCalculator.venus["remaining-life"]).toEqual(101);
    expect(galacticCalculator.mars["remaining-life"]).toEqual(34);
    expect(galacticCalculator.jupiter["remaining-life"]).toEqual(6);
  });

  test ('should return an array with years lived past Earth, Mercury, Venus, Jupiter, and Mars life expectancy', () => 
  {
    galacticCalculator.calculatePlanetaryAges(500);
    expect(galacticCalculator.calculateRemainingLife(75)).toEqual(["You have lived 425 year(s) past your life expectancy on Earth! ", "You have lived 1770 year(s) past your life expectancy on Mercury! ",  "You have lived 685 year(s) past your life expectancy on Venus! ", "You have lived 226 year(s) past your life expectancy on Mars! ", "You have lived 36 year(s) past your life expectancy on Jupiter! "]);
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