
let fruits = ['Karpuz', 'Vişne', 'Elma', 'Kavun'];

console.log(fruits);

fruits.splice(1, 2);
console.log(fruits);

fruits.push('Bende Armut Memnun oldum')
console.log(fruits);

fruits.unshift('sort');
console.log(fruits);

let items = [10, 20, 30, 40]
console.log(items + " items, ilk hali ")


items.pop()
console.log(items + " son elemanı silen pop ")

items.shift();
console.log(items + "ilk elemanı sildi")


items.push('Bende numarayım ')
console.log(items + "item eklleme,")

items.unshift('pepe');
console.log(items + ",Başa item eklendi ,")

items.splice(0, 1)
items.splice(0, 1)

items.push('50', 20, 30, 'elma');

items.reverse();


let femaleUser = ['Hilal', 'Zehra', 'Seda', 'Nimet']

let completed = [items + " " + femaleUser]

var samples = ['futbol', 'voleybol', 'yüzme']
samples[2] = 'judo';

var samples = {
    name: 'Kaan',
    surname: 'Yapar',
    age: 23,
    introduce: () => {
        return `My name is ${samples.name} ${samples.surname} , I'm ${samples.age} yo.`
    },
}
console.log(samples.introduce())

let btn = document.getElementById('btn');

btn = (e) => {
    e.preventdefault()
}