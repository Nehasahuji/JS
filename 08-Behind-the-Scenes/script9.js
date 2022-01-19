
// primivtive type
let lastName='williams';
let oldLastName=lastName;
lastName='Davis';
console.log(lastName,oldLastName);

// refrence type
const jassica = {
  firstName:'jesica',
  lastName:'willians',
  age:27,
};

const marriedJAsica = jassica;
marriedJAsica.lastName='Davis';
console.log('Before marrige: ',jassica );
console.log('after marrige: ',marriedJAsica );

// copy objects
const jassica2 = {
    firstName:'jesica',
    lastName:'willians',
    age:27,
    family:['mona','seena']
  };

  const jassicaCopy = Object.assign({},jassica2);
  jassicaCopy.lastName='Davis';

  jassicaCopy.family.push('Mary');
console.log('Before marrige: ',jassica2 );
console.log('after marrige: ',jassicaCopy );