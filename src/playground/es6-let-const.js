var nameVar = 'Sambulo';
var nameVar = 'Mick';
console.log('nameVar', nameVar);

let namelet = 'Jan';
console.log('namelet', namelet);

const nameconst = 'Senda';
console.log('nameconst', nameconst);

// Block scoping
var fullName = 'Sambulo Senda';
if(fullName){
  var firstName = fullName.split(' ')[0];
  console.log(firstName);
}

