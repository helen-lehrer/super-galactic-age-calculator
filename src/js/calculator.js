export class GalacticCalculator {
  constructor() {
    this.earth = {};
    this.mercury = {};
    this.venus = {};
    this.mars = {};
    this.jupiter = {};
  }

  calculatePlanetaryAges(earthAge) {
    this.earth["age"] = earthAge;
    this.mercury["age"] = Math.round(earthAge / .24);
    this.venus["age"] = Math.round(earthAge / .62);
    this.mars["age"] = Math.round(earthAge / 1.88);
    this.jupiter["age"] = Math.round(earthAge / 11.86);
    return this;
  }

  calculateRemainingLife(lifeExpectancyResults) {
    let mercuryLifeExpectancy = Math.round(lifeExpectancyResults / .24);
    let venusLifeExpectancy = Math.round(lifeExpectancyResults / .62);
    let marsLifeExpectancy = Math.round(lifeExpectancyResults / 1.88);
    let jupiterLifeExpectancy = Math.round(lifeExpectancyResults / 11.86);
    this.earth["life-expectancy"] = lifeExpectancyResults;
    this.mercury["life-expectancy"] = mercuryLifeExpectancy;
    this.venus["life-expectancy"] = venusLifeExpectancy;
    this.mars["life-expectancy"] = marsLifeExpectancy;
    this.jupiter["life-expectancy"] = jupiterLifeExpectancy;
    this.earth["remaining-life"] = Math.round(lifeExpectancyResults - this.earth["age"]);
    this.mercury["remaining-life"] = mercuryLifeExpectancy - this.mercury["age"];
    this.venus["remaining-life"] =  venusLifeExpectancy - this.venus["age"];
    this.mars["remaining-life"] = marsLifeExpectancy - this.mars["age"];
    this.jupiter["remaining-life"] = jupiterLifeExpectancy - this.jupiter["age"];

    let answerArray = [];
    if (this.earth["age"] > lifeExpectancyResults) {
      answerArray.push("You have lived " + (this.earth["age"] - lifeExpectancyResults) + " Earth year(s) past your life expectancy! ");
    } 
    if (this.mercury["age"] > mercuryLifeExpectancy) {
      answerArray.push("You have lived " + (this.mercury["age"] - mercuryLifeExpectancy) + " Mercury year(s) past your life expectancy! ");
    }
    if (this.venus["age"] > venusLifeExpectancy) {
      answerArray.push("You have lived " + (this.venus["age"] - venusLifeExpectancy) + " Venus year(s) past your life expectancy! ");
    }
    if (this.mars["age"] > marsLifeExpectancy) {
      answerArray.push("You have lived " + (this.mars["age"] - marsLifeExpectancy) + " Mars year(s) past your life expectancy! ");
    }
    if (this.jupiter["age"] > jupiterLifeExpectancy) {
      answerArray.push("You have lived " + (this.jupiter["age"] - jupiterLifeExpectancy) + " Jupiter year(s) past your life expectancy! ");
    } 
    if (!(this.earth["age"] > lifeExpectancyResults) & !(this.mercury["age"] > mercuryLifeExpectancy) & !(this.venus["age"] > venusLifeExpectancy) & !(this.mars["age"] > marsLifeExpectancy) & !(this.jupiter["age"] > jupiterLifeExpectancy)) {
      answerArray.push("You have not yet reached your life expectancy on any planet. ");
    }
    return answerArray;
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
