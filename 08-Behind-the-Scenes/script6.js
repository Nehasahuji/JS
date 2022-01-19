'use strict'

const jonas = {
    firstName:'jonas',
    year:1996,
  
    calAge :function(){
        console.log(this);
        console.log(2022-this.year);

        // // solution 1
        // const self=this;
        // const Millanior = function(){
        //     console.log(self);
        //     console.log(self.year>1998 && self.year<=2006);
        // }


         // // solution 2
      
        const Millanior = ()=>{
            console.log(self);
            console.log(self.year>1998 && self.year<=2006);
        }
       
        Millanior();

    },
  
  //  
    greet: ()=>{
     console.log(`Hi ${this.firstName}`);
    }
  
  };
  jonas.calAge();