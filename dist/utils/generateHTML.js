const generateManagerCard = function (manager) {
  return `
<div class="col">
    <div class="card" style="width: 18rem" id="managersCard">
        <div class="card-header" id="position">MANAGER</div>
        <div class="card-header" id="name">${manager.name}</div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item" id="id">${manager.id}</li>
            <li class="list-group-item" id="email">${manager.email}</li>
            <li class="list-group-item" id="office#">${manager.officeNumber}</li>
        </ul>       
    </div>
</div>`;
};

const generateEngineersCard = function (engineer) {
  return `
<div class="col">
    <div class="card" style="width: 18rem" id="engineersCard">
        <div class="card-header" id="position">ENGINEER</div>
        <div class="card-header" id="name">${engineer.name}</div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item" id="id">${engineer.id}</li>
            <li class="list-group-item" id="email">${engineer.email}</li>
            <li class="list-group-item" id="github">${engineer.github}</li>
        </ul>
    </div>
</div>`;
};

const generateInternCard = function (intern) {
  return `
<div class="col">
    <div class="card" style="width: 18rem" id="internsCard">
        <div class="card-header" id="position">INTERN</div>
        <div class="card-header" id="name">${intern.name}</div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item" id="id">${intern.id}</li>
            <li class="list-group-item" id="email">${intern.email}</li>
            <li class="list-group-item" id="school">${intern.school}</li>
        </ul>
    </div>
</div>`;
};

const generateTeamHTML = function (teamCards) {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Test Profile Generator</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="../dist/style/style.css" />
  </head>

  <body>
    <!-- header of page -->
    <header class="header">
      <nav class="title">
        <h1>My Team</h1>
      </nav>
    </header>
    <!-- cards to display users input -->
    <main>
      <section class="container text-center" id="mainContainer">
        <div class="row">
          ${teamCards}
        </div>
      </section>
    </main>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
`;
};

generateHTML = (data) => {
  employeeCardArray = [];
  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    if (role === "Manager") {
      const managerHTML = generateManagerCard(employee);
      employeeCardArray.push(managerHTML);
    }

    if (role === "engineer") {
      const engineerHTML = generateEngineersCard(employee);
      employeeCardArray.push(engineerHTML);
    }

    if (role === "intern") {
      const internHTML = generateInternCard(employee);
      employeeCardArray.push(internHTML);
    }
    const teamCards = employeeCardArray.join("");
    const generateTeam = generateTeamHTML(teamCards);
    return generateTeam;
  }
};

module.exports = generateHTML;
