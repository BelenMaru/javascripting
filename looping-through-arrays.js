// jshint esversion:6

//  Accessing and manipulating a list of values in an array
const pets = ['cat', 'dog', 'rat'];
for(i = 0; i < pets.length; i++){
  pets[i] = pets[i] + 's';
}
console.log(pets);