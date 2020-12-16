var stringArray = [
  'Pippo',
  'Franco',
  'Franchi',
  'Pluto',
  'Ingrassia',
  'Alloro',
  'Brasile',
  'Bibbio',
  'Gubbio',
  'Rosa',
];

// works with uppercase first character and strings - no numbers
// var input = prompt('Inserisci qualcosa');
// console.log(array);
// if (input) {
//   stringArray.push(input);
//   stringArray.sort();
// }
// console.log(stringArray);

// lowercase first character - toUpperCase()/toLowerCase() methods does not change the original string
// trying to put each stringArray elements, and transform it to lowercase, inside another Array and after sort() it
var input = prompt('Inserisci qualcosa');
stringArray.push(input);
// stringArray lowercase transform
var lowerCaseArray = [];
for (i = 0; i < stringArray.length; i++) {
  lowerCaseArray.push(stringArray[i].toLowerCase());
};
lowerCaseArray.sort();
console.log(lowerCaseArray);
