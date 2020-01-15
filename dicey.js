
const stayClassy = document.getElementById('classy');
const tenor = document.getElementById('rolling');
 /* const dee4 = document.getElementById('d4');
 dee100.addEventListener('click', dice100); */
 stayClassy.addEventListener('click', getDifficulty);
 tenor.addEventListener('click', theTumblingDice);
 var resultingModal 
 var result
 var classyModal = document.getElementById('botch');
    var numModal = document.getElementById('num');
    var roll_me
    var keep_on_rolling

/* Here's the corresponding JavaScript for the "Storytelling" dice roller */
function getDifficulty() {
    let eh = document.getElementById("difficulty");
    let diffOf = eh.options[eh.selectedIndex].value;
    let roll = Math.floor(Math.random() * 10) + 1;
    
  	//let result;
    if(roll >= diffOf) {
        result = "Success!"
    } else if (roll === 1) {
        result = "Botch!" 
    } else {
        result = "Failure!" 
    };
    
  console.log(result); 
   let listed = document.createElement("li");
   listed.textContent = result;
    document.getElementById("listy").appendChild(listed);
  
    if(result === "Success!") {
        rslts = 'Success!'
    } else if (result === "Botch!") {
        rslts = 'Botch!'
    } else {
        rslts = 'failure!'
    };
    /* Though I'd show how I came up with the code for the toggleModal function */
    /*mdlresult.querySelector('h1').innerHTML = rslts;
    mdlresult.style.display = mdlresult.style.display === "block" ? "none" : "block";
    setTimeout(() => {
        mdlresult.style.display = mdlresult.style.display === "block" ? "none" : "block";;
    }, 1000);*/
    toggleModal();
}



/* Here's the DRY-er version of the dice roller to get a number */
function theTumblingDice() {
   let dees = document.getElementById('dix');
   let num_dees = dees.options[dees.selectedIndex].value;
   roll_me = Math.floor(Math.random() * num_dees) + 1;
   console.log(roll_me);
   keep_on_rolling = document.createElement("li");
   keep_on_rolling.textContent = roll_me;
   document.getElementById("listed").appendChild(keep_on_rolling);
    toggleModal();
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


function toggleModal() {
    console.log(event.currentTarget.id)
    if(event.currentTarget.id === 'classy') {
        classyModal.querySelector('h1').innerHTML = rslts;
        classyModal.style.display = classyModal.style.display === "block" ? "none" : "block";
        setTimeout(() => {
            classyModal.style.display = classyModal.style.display === "block" ? "none" : "block";;
        }, 1000);
        
    }   
    
    if(event.currentTarget.id === 'rolling') {
        numModal.querySelector('h1').innerHTML = roll_me;
        numModal.style.display = numModal.style.display === "block" ? "none" : "block";
        setTimeout(() => {
        numModal.style.display = numModal.style.display === "block" ? "none" : "block";
        }, 1000);
}
    
   
}



