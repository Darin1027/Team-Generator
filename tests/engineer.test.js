// import employee and engineer class
const employee = require("../lib/employeeClass");
const engineer = require("../lib/engineerClass");

// start test
describe("engineer", () => {
  it("should display name, id and email and github name", () => {
    const engineer = new Engineer(
      "Bob Boberson",
      52,
      "bob_b@gmail.com",
      "BobsGithub"
    );

    expect(engineer.name).toEqual("Bob Boberson");
    expect(engineer.id).toEqual(52);
    expect(engineer.email).toEqual("bob_b@gmail.com");
    expect(engineer.github).toEqual("BobsGithub");
  });
});

describe("getName", () => {
  it("should return the engineers name", () => {
    const engineer = new Engineer(
      "Bob Boberson",
      52,
      "bob_b@gmail.com",
      "BobsGithub"
    );

    expect(engineer.getName()).toEqual("Bob Boberson");
  });
});

describe("getId", () => {
  it("should return the engineers ID", () => {
    const engineer = new Engineer(
      "Bob Boberson",
      52,
      "bob_b@gmail.com",
      "BobsGithub"
    );

    expect(engineer.getId()).toEqual(52);
  });
});

describe("getEmail", () => {
  it("should return the engineers Email", () => {
    const engineer = new Engineer(
      "Bob Boberson",
      52,
      "bob_b@gmail.com",
      "BobsGithub"
    );

    expect(engineer.getEmail()).toEqual("bob_b@gmail.com");
  });
});

describe("getGithub", () => {
  it("should return the engineers github account", () => {
    const engineer = new Engineer(
      "Bob Boberson",
      52,
      "bob_b@gmail.com",
      "BobsGithub"
    );

    expect(engineer.getGithub()).toEqual("BobsGithub");
  });
});

describe("getRole", () => {
  it("should return employee", () => {
    const engineer = new Engineer(
      "Bob Boberson",
      52,
      "bob_b@gmail.com",
      "BobsGithub"
    );

    expect(engineer.getRole()).toEqual("employee");
  });
});
