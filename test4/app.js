// ТЕСТ 4

const people = [
    { name: 'Jonny Walker', birthDate: '1995-12-17' },
    { name: 'Andrew', birthDate: '2001-10-29' },
    { name: 'Viktor', birthDate: '1998-11-09' },
    { name: 'Andrew', birthDate: '2011-05-09' },
]

// const index = people.find(people => people.name === 'Andrew')

// console.log(index)
// console.log(people[index])

// let findedPerson
// for (const person of people) {

//     if (person.name === 'Andrew') {
//         findedPerson = person
//     }
// }

// console.log(findedPerson)


const person = people.find(function(person) {
    return person.name === 'Andrew'
})
console.log(person)