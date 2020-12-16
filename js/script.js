var array = [
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

// works with uppercase first character
var input = prompt('Inserisci qualcosa');
array.push(input);
// console.log(array);
if (input) {
  array.sort();
}
console.log(array);

// lowercase first character
