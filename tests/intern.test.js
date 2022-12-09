// import employee and engineer class
const Intern = require("../lib/Intern");

// start test
describe("intern", () => {
  it("should display name, id and email and school name", () => {
    const intern = new Intern(
      "Bob Boberson",
      52,
      "bob_b@gmail.com",
      "Gotham University"
    );

    expect(intern.name).toEqual("Bob Boberson");
    expect(intern.id).toEqual(52);
    expect(intern.email).toEqual("bob_b@gmail.com");
    expect(intern.school).toEqual("Gotham University");
  });
});

describe("getName", () => {
  it("should return the interns name", () => {
    const intern = new Intern(
      "Bob Boberson",
      52,
      "bob_b@gmail.com",
      "Gotham University"
    );

    expect(intern.getName()).toEqual("Bob Boberson");
  });
});

describe("getId", () => {
  it("should return the interns ID", () => {
    const intern = new Intern(
      "Bob Boberson",
      52,
      "bob_b@gmail.com",
      "Gotham University"
    );

    expect(intern.getId()).toEqual(52);
  });
});

describe("getEmail", () => {
  it("should return the interns email", () => {
    const intern = new Intern(
      "Bob Boberson",
      52,
      "bob_b@gmail.com",
      "Gotham University"
    );

    expect(intern.getEmail()).toEqual("bob_b@gmail.com");
  });
});

describe("getSchool", () => {
  it("should return the interns school name", () => {
    const intern = new Intern(
      "Bob Boberson",
      52,
      "bob_b@gmail.com",
      "Gotham University"
    );

    expect(intern.getSchool()).toEqual("Gotham University");
  });
});

describe("getRole", () => {
  it("should return employee", () => {
    const intern = new Intern(
      "Bob Boberson",
      52,
      "bob_b@gmail.com",
      "Gotham University"
    );

    expect(intern.getRole()).toEqual("intern");
  });
});
