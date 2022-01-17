'use strict';
// javascipt looking in the current scpe then search in parent scope

// we can define same varibale name with same name

function calAge(birthYear) {
  const age = 2022 - birthYear;
  let output = "Name";
  
  function printAge(){
    console.log(`${firstName} age is ${age}`);
    if(birthYear>=1981 && birthYear<=1996){
        var millonier = true;  //var have function block
        const str = `Oh you are an millionier ${firstName}`;
        console.log(str);

        function add(a,b){
            return a+b;
        } 

        output='New Output';
    }

    console.log(output);

    // add(2,3); functions are also block scope
   console.log(millonier); 

  }
 

  printAge();

  return age;
}


const firstName = 'Jonas';
calAge(1992);
// printAge();  child variable can acess parent but parent can not called child