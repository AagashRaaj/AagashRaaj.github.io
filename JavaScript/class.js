class city {
  constructor(name) {
    this.cityname = name;
  }
  datetime(offset) {
    var b = new Date();
    var utc = b.getTime() + b.getTimezoneOffset() * 60000;
    var newdate = new Date(utc + 3600000 * offset);
    return newdate;
  }
  criteria(t) {
    if (t >= 23 && t <= 29) {
      return "assets/cloudyIcon.svg";
    } else if (t < 18) {
      return "assets/rainyIconBlack.svg";
    } else if (t >= 18 && t <= 22) {
      return "assets/windyIcon.svg";
    } else if (t > 29) {
      return "assets/sunnyIcon.svg";
    } else {
      return "";
    }
  }
  faren(t) {
    return t * 1.8 + 32;
  }
}
class indCity extends city {
  constructor() {}
}
