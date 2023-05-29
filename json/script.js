fetch("details.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const targetPerson = prompt("Enter the name of the person:");

    for (let person of data) {
      const name = person.name;
      const age = person.age;
      if (name === targetPerson) {
        document.querySelector(".name").textContent = `NAME: ${name}`;

        document.querySelector(".age").textContent = `AGE: ${age}`;
        break;
      }
    }
  });
