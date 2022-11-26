class employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    // console.log(`The employees name is ${this.name}`);
    return this.name;
  }
  getId() {
    // console.log(`The employees ID is ${this.id}`);
    return this.id;
  }
  getEmail() {
    // console.log(`The employees email is ${this.email}`);
    return this.email;
  }
  getRole() {
    // console.log("The employees information is", + Employee);
    return "employee";
  }
}

module.exports = employee;
