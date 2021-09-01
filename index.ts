// Import stylesheets
import './style.css';

// Write TypeScript code!
function groupArrayOfObjects(list, key) {
  return list.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    // console.log(rv);
    return rv;
  }, {});
}

const people = [
  { sex: '1', name: 'Jeff' },
  { sex: '2', name: 'Megan' },
  { sex: '1', name: 'Taylor' },
  { sex: '2', name: 'Madison' },
  { sex: '3', name: 'dev' }
];
var groupedPeople = groupArrayOfObjects(people, 'sex');
//console.log(groupedPeople[0]); //will be the Males
// for (const child of groupedPeople) {
//   console.log(child);
// }

function groupBy(list, keyGetter) {
  const map = new Map();
  list.forEach(item => {
    const key = keyGetter(item);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });
  return map;
}

const pets: Pet[] = [
  { type: 'Dog', name: 'Spot', children: [] },
  { type: 'Cat', name: 'Tiger', children: undefined },
  { type: 'Dog', name: 'Rover', children: undefined },
  { type: 'Cat', name: 'Leo', children: undefined },
  { type: 'Cat', name: 'tes', children: undefined },
  { type: 'Cow', name: 'muratucalli', children: undefined }
];

const grouped = groupBy(pets, pet => pet.type);
//console.log(grouped);

grouped.forEach((value: any[], key: string) => {
  console.log(key);
  value.forEach(x => {
    console.log(x);
  });
});

console.log(grouped.entries());

// let petNode: Pet[] = [];
// for (let key of grouped.keys()) {
//   let pet: Pet = { type: key, name: '', children: [] };

//   pet.children.push(grouped.get(key));
//   petNode.push(pet);
// }

//console.log(petNode);

// console.log(grouped.keys());

// console.log(grouped.get('Dog')); // -> [{type:"Dog", name:"Spot"}, {type:"Dog", name:"Rover"}]
// console.log(grouped.get('Cat'));

// var cars = [
//     { make: 'audi', model: 'r8', year: '2012' },
//     { make: 'audi', model: 'rs5', year: '2013' },
//     { make: 'ford', model: 'mustang', year: '2012' },
//     { make: 'ford', model: 'fusion', year: '2015' },
//     { make: 'kia', model: 'optima', year: '2012' }
//   ],
//   result = cars.reduce(function(r, a) {
//     r[a.make] = r[a.make] || [];
//     r[a.make].push(a);
//     return r;
//   }, Object.create(null));

// console.log(result);

// const array1 = ['a', 'b', 'c'];

// array1.forEach(element => console.log(element));

// console.log(groupedPeople);

// let scores: { [key: string]: number } = {};
// scores.bill = 10;
// scores.shiv = 20;

//scores.containsKey('bill');

//console.log(groupedPeople.Female); //will be the Females

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

export class Pet {
  type: string;
  name: string;
  children: Pet[];
}

// interface IDictionary {
//   add(key: string, value: any): void;
//   remove(key: string): void;
//   containsKey(key: string): boolean;
//   keys(): string[];
//   values(): any[];
// }

// class Dictionary {

//   _keys: string[] = [];
//   _values: any[] = [];

//   constructor(init: { key: string; value: any; }[]) {

//       for (var x = 0; x < init.length; x++) {
//           this[init[x].key] = init[x].value;
//           this._keys.push(init[x].key);
//           this._values.push(init[x].value);
//       }
//   }

//   add(key: string, value: any) {
//       this[key] = value;
//       this._keys.push(key);
//       this._values.push(value);
//   }

//   remove(key: string) {
//       var index = this._keys.indexOf(key, 0);
//       this._keys.splice(index, 1);
//       this._values.splice(index, 1);

//       delete this[key];
//   }

//   keys(): string[] {
//       return this._keys;
//   }

//   values(): any[] {
//       return this._values;
//   }

//   containsKey(key: string) {
//       if (typeof this[key] === "undefined") {
//           return false;
//       }

//       return true;
//   }

//   toLookup(): IDictionary {
//       return this;
//   }
// }
