// import employee and engineer class
const Manager = require("../lib/Manager");

// start test
describe("manager", () => {
  it("should display name, id and email and office #", () => {
    const manager = new Manager("Bob Boberson", 52, "bob_b@gmail.com", 54321);

    expect(manager.name).toEqual("Bob Boberson");
    expect(manager.id).toEqual(52);
    expect(manager.email).toEqual("bob_b@gmail.com");
    expect(manager.officeNum).toEqual(54321);
  });
});

describe("getName", () => {
  it("should return the managers name", () => {
    const manager = new Manager("Bob Boberson", 52, "bob_b@gmail.com", 54321);

    expect(manager.getName()).toEqual("Bob Boberson");
  });
});

describe("getId", () => {
  it("should return the managers ID", () => {
    const manager = new Manager("Bob Boberson", 52, "bob_b@gmail.com", 54321);

    expect(manager.getId()).toEqual(52);
  });
});

describe("getEmail", () => {
  it("should return the managers email", () => {
    const manager = new Manager("Bob Boberson", 52, "bob_b@gmail.com", 54321);

    expect(manager.getEmail()).toEqual("bob_b@gmail.com");
  });
});

describe("getofficeNum", () => {
  it("should return the managers office #", () => {
    const manager = new Manager("Bob Boberson", 52, "bob_b@gmail.com", 54321);

    expect(manager.getofficeNum()).toEqual(54321);
  });
});

describe("getRole", () => {
  it("should return manager", () => {
    const manager = new Manager("Bob Boberson", 52, "bob_b@gmail.com", 54321);

    expect(manager.getRole()).toEqual("manager");
  });
});
