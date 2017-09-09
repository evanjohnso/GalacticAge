export class galacticConverter {

  constructor(birthday) {
    this.birthday = birthday;
  }

  _getTodaysDate() {
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth(); //returns 0-11 index
    let date = today.getDate();
    return `${year}-${month}-${date}`;
  }

  _calculateYears() {
    const todaysDate = this._getTodaysDate();
    let birthdaySplit = this.birthday.split("-");
    let dateSplit = todaysDate.split("-");
    let years = dateSplit[0] - birthdaySplit[0];
    let months = dateSplit[1] - birthdaySplit[1];
    let days = dateSplit[2] - birthdaySplit[2];
    if (months < 0 || months === 0 && days < 0) {
      years --;
    }
    return years; //earth years
  }
  calculateAgeByPlanet(planet) {
    let years = 0;
    if (planet === "mercury") {
      years = (this._calculateYears() / 0.24).toFixed(3);
    } else if (planet === "venus") {
      years = (this._calculateYears() / 0.62).toFixed(3);
    }  else if (planet === "mars") {
      years = (this._calculateYears() / 1.88).toFixed(3);
    } else if (planet === "jupiter") {
       years = (this._calculateYears() / 11.86).toFixed(3);
    } else {
      years = null;
    }
    return years;

  }

  yearsToSeconds(years) {
    const yearsMili = 31556926;
    const monthMili = 2629743;
    const dayMili = 86400;
    return Math.round(years * yearsMili);
  }
//General stats
  lifeExpectancy(age, gender, obese) {
    let avgLife = 75;
    if (obese === "true") {
      avgLife -=10;
    } else if (gender === "male") {
      avgLife -= 3;
    } else if (gender === "female") {
      avgLife += 2;
    }
    let lifeLeft = avgLife - age;
    //logic for how to handle negative. 0, and positive lifeLeft
    //will exist in front end
    return lifeLeft;
  }
}
