
export default class Company {
  constructor(data = null) {
    this.name = '';
    this.spend = 0;
    this.spendAbility = {
      minimum: 0,
      maximum: 0,
    };
    this.notes = '';

    if (data) {
      this.bind(data);
    }

    if (!this.id) {
      this.id = this.generateUniqueId();
    }
  }

  bind(data) {
    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        this[key] = data[key];
      }
    }
  }

  generateUniqueId() {
    // Simulate an unique ID
    return Object.values(this).join();
  }
}
