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
    
  }
}
