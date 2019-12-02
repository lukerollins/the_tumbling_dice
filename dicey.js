

 const stayClassy = document.getElementById('classy');
 const tenor = document.getElementById('roll_me')
 //const dee4 = document.getElementById('d4');
 //const dee6 = document.getElementById('d6');
 //const dee8  = document.getElementById('d8');
 //const dee12  = document.getElementById('d12');
 //const dee20  = document.getElementById('d20');
 //const dee100  = document.getElementById('d100');
 //dee4.addEventListener('click', dice4);
 //dee6.addEventListener('click', dice6);
 //dee8.addEventListener('click', dice8);
 //dee12.addEventListener('click', dice12);
 //dee20.addEventListener('click', dice20);
 //dee100.addEventListener('click', dice100); 
 stayClassy.addEventListener('click', getDifficulty);
 tenor.addEventListener('click', theTumblingDice);

/* Here's the corresponding JavaScript for the "Storytelling" dice roller */
 function getDifficulty() {
    let e = document.getElementById("difficulty");
    let diffOf = e.options[e.selectedIndex].value;
    let roll = Math.floor(Math.random() * 10) + 1;
  	let result;
    if(roll >= diffOf) {
        result = "Sucess!"
    } else if (roll === 1) {
        result = "Botch!"
    } else {
        result = "Failure!"
    };
    
  console.log(result);
   //document.getElementById('listy').innerHTML = result; 
   let listed = document.createElement("li");
   listed.textContent = result;
    document.getElementById("listy").appendChild(listed);
   //document.body.appendChild(listed);
    /*let lies = document.createElement("LI");
    lies.innerText = result;
    document.getElementById('listy').appendChild(lies);*/
    
}
/* Here's the DRY-er version of the dice roller to get a number */
function theTumblingDice() {
   let dees = document.getElementById('dix');
   let num_dees = dees.options[dees.selectedIndex].value;
   let roll_me = Math.floor(Math.random() * num_dees) + 1;
   console.log(roll_me);
   let keep_on_rolling = document.createElement("li");
   keep_on_rolling.textContent = roll_me;
   document.getElementById("listed").appendChild(keep_on_rolling);
   }
   
   

/*

You know that lengthy comment I made in the HTML file? Well here's the corresponding JavaScript to go with it.

function dice100() {
    let roll100 = Math.floor(Math.random() * 100) + 1;
    console.log(roll100);
    let roller100 = document.createElement("li");
    roller100.textContent = roll100;
    document.getElementById("d100list").appendChild(roller100);
}
/*function grandTotal() {
    let e = document.getElementById("numDiff");
    let diffOf = e.options[e.selectedIndex].value;
    let tD = document.getElementById("numDice");
    let rollingD = tD.options[tD.selectedIndex].value;
    let roll = Math.floor(Math.random() * 10) + 1;
    


}

function grandTotal() {
let rollingD = 3;

 let total = [...Array(rollingD)].map(() => Math.floor(Math.random() * 10) + 1); ===>>> To get an Array of randomly generated numbers
  
  console.log(total);
}*/

/* pseudocode
    tumbling() {
        dD = seletct.dice_number;
        return Math.floor(Math.random() * dD) + 1;

    } */



