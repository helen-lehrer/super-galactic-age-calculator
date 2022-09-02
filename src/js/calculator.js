export class galacticCalculator {
  constructor() {
    this.earth = {};
    this.mercury = {};
    this.venus = {};
    this.mars = {};
    this.jupiter = {};
  }

  calculatePlanetaryAges(earthAge) {
    this.earth["age"] = earthAge
    this.mercury["age"] = Math.round(earthAge / .24);
    this.venus["age"] = Math.round(earthAge / .62);
    this.mars["age"] = Math.round(earthAge / 1.88);
    this.jupiter["age"] = Math.round(earthAge / 11.86);
    return this
  }

  calculateRemainingLife(lifeExpectancy) {
    this.earth["remaining-life"] = lifeExpectancy - this.earth["age"];
    this.mercury["remaining-life"] = (lifeExpectancy / .24) - this.mercury["age"];
    this.venus["remaining-life"] = (lifeExpectancy / .62) - this.venus["age"];
    this.mars["remaining-life"] = (lifeExpectancy / 1.88) - this.mars["age"];
    this.jupiter["remaining-life"] = (lifeExpectancy / 11.86) - this.jupiter["age"];
    return this
  }
  
}

export class LifeExpectancy {
  constructor(lifestyle, countryOfResidence, activityLevel) {
    this.lifestyle = lifestyle;
    this.countryOfResidence = countryOfResidence;
    this.activityLevel = activityLevel;
  }

  calculateLifeExpectancy() {
    let lowLifeExpectancyArray = [];
    let mediumLifeExpectancyArray = [];
    let highLifeExpectancyArray = [];
 
    if (this.lifestyle === 1) {
      lowLifeExpectancyArray.push(1);
    }
    if (this.countryOfResidence === 1) {
      lowLifeExpectancyArray.push(1);
    }
    if (this.activityLevel === 1) {
      lowLifeExpectancyArray.push(1);
    }

    if (this.lifestyle === 2) {
      mediumLifeExpectancyArray.push(2);
    }
    if (this.countryOfResidence === 2) {
      mediumLifeExpectancyArray.push(2);
    }
    if (this.activityLevel === 2) {
      mediumLifeExpectancyArray.push(2);
    }
 
    if (this.lifestyle === 3) {
      highLifeExpectancyArray.push(3);
    }
    if (this.countryOfResidence === 3) {
      highLifeExpectancyArray.push(3);
    }
    if (this.activityLevel === 3) {
      highLifeExpectancyArray.push(3);
    }

    if (lowLifeExpectancyArray.length >= 2) {
      return 70;
    } else if (mediumLifeExpectancyArray.length >= 2) {
      return 85;
    } else if (highLifeExpectancyArray.length >= 2) {
      return 100;
    } else {
      return 90;
      }
  }
}

/*expect(age.earth[0]).toEqual(lifeExpectancy.calculateLifeExpectancy() - age.earth);
    expect(age.mercury[0]).toEqual((lifeExpectancy.calculateLifeExpectancy()) - age.mercury);
    expect(age.venus[0]).toEqual((lifeExpectancy.calculateLifeExpectancy()) - age.venus);
    expect(age.mars[0]).toEqual((lifeExpectancy.calculateLifeExpectancy()) - age.mars);
    expect(age.jupiter[0]).toEqual((lifeExpectancy.calculateLifeExpectancy()) - age.jupiter);
    */