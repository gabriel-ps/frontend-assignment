
export default class Company {
  constructor(data = null) {
    this.name = '';
    this.spend = '';
    this.spend_ability = '';
    this.notes = '';

    if (data) {
      this.bind(data);
    }
  }

  bind(data) {
    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        this[key] = data[key];
      }
    }
  }
}
