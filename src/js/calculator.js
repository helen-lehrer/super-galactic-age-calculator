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
