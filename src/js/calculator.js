export class GalacticCalculator {
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
    let mercuryLifeExpectancy = Math.round(lifeExpectancy / .24);
    let venusLifeExpectancy = Math.round(lifeExpectancy / .62);
    let marsLifeExpectancy = Math.round(lifeExpectancy / 1.88);
    let jupiterLifeExpectancy = Math.round(lifeExpectancy / 11.86);
    this.earth["remaining-life"] = Math.round(lifeExpectancy - this.earth["age"]);
    this.mercury["remaining-life"] = mercuryLifeExpectancy - this.mercury["age"];
    this.venus["remaining-life"] =  venusLifeExpectancy - this.venus["age"];
    this.mars["remaining-life"] = marsLifeExpectancy - this.mars["age"];
    this.jupiter["remaining-life"] = jupiterLifeExpectancy - this.jupiter["age"];

    /*
    if (this.earth["age"] > lifeExpectancy) {
      return "You have lived" + (this.earth["age"] - lifeExpectancy).toString() + "earth year(s) past your life expectancy!"
    } 
    
    if (this.mercury["age"] > mercuryLifeExpectancy) {
      return "You have lived" + (this.mercury["age"] - mercurylifeExpectancy) + "year(s) past your life expectancy!"
    }
    if (this.venus["age"] > venusLifeExpectancy) {
      return "You have lived" + (this.venus["age"] - venuslifeExpectancy) + "year(s) past your life expectancy!"
    }
    if (this.mars["age"] > marsLifeExpectancy) {
      return "You have lived" + (this.mars["age"] - marslifeExpectancy) + "year(s) past your life expectancy!"
    }
    if (this.jupiter["age"] > jupiterLifeExpectancy) {
      return "You have lived" + (this.jupiter["age"] - jupiterlifeExpectancy) + "year(s) past your life expectancy!"
    } 
  */
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
