export class galacticConverter {

  constructor(birthday) {
    this.birthday = birthday;
  }

  _calculateAge() {

  }

  yearsToSeconds(years) {
    return Math.round(years * 365.25 * 24 * 3600);
  }

  // earthYears() {
  //   return this.birthday + 10;
  // }

  // convert(planetFunction) {
  //   return this.planetFunction(this.birthday);
  // }


}
