export class Age {
  constructor(earth, mercury, venus, mars, jupiter) {
    this.earth = earth;
    this.mercury = mercury;
    this.venus = venus;
    this.mars = mars;
    this.jupiter = jupiter;
  }

  calculatePlanetaryAges() {
    this.mercury = Math.round(this.earth / .24);
    this.venus = Math.round(this.earth / .62);
    this.mars = Math.round(this.earth / 1.88);
    this.jupiter = Math.round(this.earth / 11.86);
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

    if (this.lifestyle.value === 1 | this.countryOfResidence.value === 1 | this.activityLevel.value === 1) {
      lowLifeExpectancyArray.push(1);
    }
    if (this.lifestyle.value === 2 | this.countryOfResidence.value === 2 | this.activityLevel.value === 2) {
      mediumLifeExpectancyArray.push(2);
    }
    if (this.lifestyle.value === 3 | this.countryOfResidence.value === 3 | this.activityLevel.value === 3) {
      highLifeExpectancyArray.push(3)
    }

    if (lowLifeExpectancyArray.length === 2 | lowLifeExpectancyArray.length === 3) {
      return 70
    } else if (mediumLifeExpectancyArray.length === 2 | mediumLifeExpectancyArray.length === 3) {
      return 85
    } else if (highLifeExpectancyArray.length === 2 | highLifeExpectancyArray.length === 3) {
      return 100
    } else {
      return 85;
    }

  }
}
