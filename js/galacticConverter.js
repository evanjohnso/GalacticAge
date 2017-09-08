export class galacticConverter {

  constructor(birthday) {
    this.birthday = birthday;
  }

  getTodaysDate() {
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth(); //returns 0-11 index
    let date = today.getDate();
    return `${year}-${month}-${date}`;
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
