//lesson 4, osa 1
// const tegelane = {
//     eesnimi: 'Harry',
//     perekonnanimi: 'Potter',
//     vanus: 17,
//     linn: 'London',
// };

// // const firstName = tegelane.eesnimi
// // const lastName = tegelane.perekonnanimi
// // const age = tegelane.vanus

// // console.log(firstName)

// const { eesnimi: firstName, perekonnanimi: lastName, vanus: age } = tegelane;

// tegelane.perekonnanimi = 'Plotter'

// console.log(`First name: ${firstName}, last name: ${lastName}, age: ${age}`);
// console.log(tegelane)

//lesson 4, osa 2
// const tegelane = {
//     isiklikudAndmed: {
//         eesnimi: "Harry",
//         perekonnanimi: "Potter",
//         vanus: 17,
//         linn: "London"
//     },
//     eriala: "Nõiduskunst"
//   };

// const {isiklikudAndmed: {perekonnanimi: lastName, vanus: age}, eriala: profession} = tegelane

// console.log(`Last name: ${lastName}, age: ${age}, profession: ${profession}`)
// // console.log(isiklikudAndmed)
// // console.log(eriala)

//lesson 4, osa 3
// const numbrid = [1, 2, 3, 4, 5]

// const [first, second, third, fourth, fifth] = numbrid
// // const firstElement = numbrid[0]
// // const lastElement = numbrid[numbrid.length-1]
// const [firstElement,,,, lastElement] = numbrid
// console.log(firstElement, lastElement)

// console.log(first, second, third, fourth, fifth)

const kool = {
    nimi: 'Hogwarts',
    asukoht: {
        linn: 'Hogsmeade',
        maakond: 'Šoti Kõrge-Šotimaa',
        riik: 'Suurbritannia',
    },
    õpilased: [
        {
            eesnimi: 'Harry',
            perenimi: 'Potter',
            majad: ['Gryffindor', 'Kolmas aasta'],
        },
        {
            eesnimi: 'Hermione',
            perenimi: 'Granger',
            majad: ['Gryffindor', 'Kolmas aasta'],
        },
        {
            eesnimi: 'Ronald',
            perenimi: 'Weasley',
            majad: ['Gryffindor', 'Kolmas aasta'],
        },
    ],
};

const { õpilased: students } = kool;
//console.log(õpilased)

const [harry, hermione, ronald] = students;

console.log(harry);
//console.log(hermione)

const { eesnimi: harryFirstName } = harry;
const { eesnimi: hermioneFirstName } = hermione;

console.log(`${harryFirstName} and ${hermioneFirstName} are friends`);
