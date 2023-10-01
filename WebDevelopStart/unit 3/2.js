const person = {
  name: 'Kiryl',
  roles: ['dev', 'HR'],
  toString() {
    return `Сотрудник${this.roles.length > 0 ? '' : 'у'} ${this.name} ${
      this.roles.length > 0
        ? 'занимает следующие позиции в компании: ' + this.roles.join(', ')
        : 'не назначены роли'
    }.`
  },
}

const staff = {
  __proto__: person,
}

console.log(person.toString())
