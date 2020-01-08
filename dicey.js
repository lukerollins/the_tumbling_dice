
const stayClassy = document.getElementById('classy');
const tenor = document.getElementById('roll_me');
const resulting_modal = document.getElementById('resulting-modal');
 /* const dee4 = document.getElementById('d4');
 dee100.addEventListener('click', dice100); */
 stayClassy.addEventListener('click', getDifficulty);
 tenor.addEventListener('click', theTumblingDice);
//resulting_modal.addEventListener('click', toggleModal);

 const number_modal = document.getElementById('number-modal');
 var result
/* Here's the corresponding JavaScript for the "Storytelling" dice roller */
function getDifficulty() {
    let e = document.getElementById("difficulty");
    let diffOf = e.options[e.selectedIndex].value;
    let roll = Math.floor(Math.random() * 10) + 1;
    
  	//let result;
    if(roll >= diffOf) {
        result = "Sucess!"
    } else if (roll === 1) {
        result = "Botch!"
    } else {
        result = "Failure!"
    };
    
  console.log(result); 
   let listed = document.createElement("li");
   listed.textContent = result;
    document.getElementById("listy").appendChild(listed);
    toggleModal();
    setTimeout(toggleModal, 300);

}

function toggleModal() {
    let stat = resulting_modal.style.display;

    if (stat === "none") {
        resulting_modal.style.display = "block";
    } else {
        resulting_modal.style.display = "none";
    }
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
}*/
getDifficulty.toggleModal;




