export function getFirstNames(people) {
  return people.map((person) => person.firstName);
}

export function getFullNames(people) {
  return people.map((person) => person.firstName + " " + person.lastName);
}

export function getNameAndAge(people) {
  return people.map((person) => {
    return { firstName: person.firstName, age: person.age };
  });
}

export function getPeopleByAge(people, age) {
  return people.find((arr) => {
    return arr.age === age;
  });
}

export function getPeopleNamesOlderThan(people, age) {
  return people
    .filter((arr) => {
      return arr.age > age;
    })
    .map((arr) => {
      return arr.firstName + " " + arr.lastName;
    });
}

export function getPeopleByLastName(people, lastName) {
  return people.find((arr) => {
    return arr.lastName === lastName;
  });
}

export function findPersonById(people, id) {
  return people.find((arr) => {
    return arr.id === id;
  });
}

export function isAnyoneOlderThan(people, age) {
  return people.some((arr) => {
    return arr.age > age;
  });
}

export function getFullNamesSortedByAge(people) {
  return people
    .slice()
    .sort((a, b) => {
      return a.age - b.age;
    })
    .map((person) => {
      return person.firstName + " " + person.lastName;
    });
}

const lol = "lol";
console.log(lol);

const lel = "lel";
console.log(lel);

const sonsOfTheForest = "Die Welle";
console.log(sonsOfTheForest);

const praiseLordGaben = "Gabe Newell";
console.log(praiseLordGaben);
