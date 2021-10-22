const username: string = 'Jorge Taberoa';
const sum = (a: number, b: number): number => {
  return a + b;
}

sum(1, 2);

class Person {
  constructor(public age: number, public lastName: string) {}
}

const jor = new Person(21, 'Taberoa');
jor.age;
