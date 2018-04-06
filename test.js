var laptop = {
  color: 'black',
  form: 'square',
  manufacturer: 'DELL',
  getColor: function () {
    return this.color;
  },
  setColor: function(newColor) {
    this.color = newColor;
  },
  getForm: function () {
    return this.form;
  }
};

var pen = {
  color: 'blue',
  length: 15,
  type: 'auto',
  getType: function() {
    return this.type;
  },
  setColor: function(newPenColor) {
    this.color = newPenColor;
  }
};

var phone = {
  manufacturer: 'xiaomi',
  price: 3000,
  form: 'rectangle',
  battery: 4000
};

var plate = {
  form: 'circle',
  picture: 'lion',
  getPicture: function() {
    return this.picture;
  },
  setPicture: function(newPicture) {
    this.picture = newPicture;
  }
};

var cat = {
  name: 'Busia',
  breed: 'Maine Coon',
  age: 2,
  behavior: 'playful',
  setBehavior: function(newBehavior) {
    this.behavior = newBehavior;
  },
  getBehavior: function () {
    return this.behavior;
  }
};

var flat = {
  roooms: 2,
  floor: 5,
  isNew: true
};

class WebDeveloper {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  getName() {
    return this.name;
  }

  getSurname() {
    return this.surname;
  }

  getFullName() {
    return this.name + ' ' + this.surname;
  }

  setAge(age) {
    this.age = age;
  }

  getAge() {
    return this.age;
  }

  setJSLevel(percent) {
    this.percent = percent;

  }

  getJSLevel() {
    return this.percent;
  }
}

var JuniorVasia = new WebDeveloper('vasia', 'zotov');
console.log(debil.getName());
console.log(debil.getSurname());
console.log(debil.getFullName());
debil.setAge(31);
console.log(debil.getAge());
debil.setJSLevel(0);
console.log(debil.getJSLevel());




