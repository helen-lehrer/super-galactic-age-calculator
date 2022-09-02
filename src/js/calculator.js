export class Age {
  constructor(earth, mercury, venus, mars, jupiter) {
    this.earth = earth;
    this.mercury = mercury;
    this.venus = venus;
    this.mars = mars;
    this.jupiter = jupiter;
  }

  calculatePlanetaryAges() {
    this.mercury = Math.round(this.mercury + (this.earth / .24));
    this.venus = Math.round(this.venus + (this.earth / .62));
    this.mars = Math.round(this.mars + (this.earth / 1.88));
    this.jupiter = Math.round(this.jupiter + (this.earth / 11.86));
    return this
  }
}