// import employee class
const Employee = require("../lib/Employee");

// start test
describe("employee", () => {
  it("should display name, id and email", () => {
    const employee = new Employee("Bob Boberson", 52, "bob_b@gmail.com");

    expect(employee.name).toEqual("Bob Boberson");
    expect(employee.id).toEqual(52);
    expect(employee.email).toEqual("bob_b@gmail.com");
  });
});

describe("getName", () => {
  it("should return the employees name", () => {
    const employee = new Employee("Bob Boberson", 52, "bob_b@gmail.com");

    expect(employee.getName()).toEqual("Bob Boberson");
  });
});

describe("getId", () => {
  it("should return the employees name", () => {
    const employee = new Employee("Bob Boberson", 52, "bob_b@gmail.com");

    expect(employee.getId()).toEqual(52);
  });
});

describe("getEmail", () => {
  it("should return the employees name", () => {
    const employee = new Employee("Bob Boberson", 52, "bob_b@gmail.com");

    expect(employee.getEmail()).toEqual("bob_b@gmail.com");
  });
});

describe("getRole", () => {
  it("should return the employees name", () => {
    const employee = new Employee("Bob Boberson", 52, "bob_b@gmail.com");

    expect(employee.getRole()).toEqual("employee");
  });
});
