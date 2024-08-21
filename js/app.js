const summ = (a, b) => a + b;

summ(2, 3);

class Hero {
  constructor(name) {
    this.name = name;
  }
  get name() {
    return this.name;
  }

  set name(newName) {
    this.name = newName;
  }
}
