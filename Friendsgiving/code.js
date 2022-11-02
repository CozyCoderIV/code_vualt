/* Attributes */
let start;
let randNum;
const a = document.getElementById('name');
const button = document.getElementById('name_picker');
const nameArray = ['Otis', 'Sophie', 'Mario', 'Hunter', 'Jaden', 'Isabella', 'Jackie', 'Joanne', 
                    'Holly', 'Tania', 'Ilkhomjon', 'William', 'Valeria', 'Keith', 'Fidan', 'Cecilia',
                    'Dylan', 'Aimee', 'Kandice'];
let fillArray = [];


/* Functions */
const generateRandom = () => {
   return Math.floor(Math.random() * nameArray.length);
}
if(nameArray.length <= 0){
    a.innerText = "All Finished!"
}
a.innerText = "Let's Start!"
button.addEventListener("click", () => {
    randNum = generateRandom();
    a.innerText = nameArray[randNum];
    start = nameArray[randNum];

    // Until Fill Array is full -> push value gotten from nameArray to Fill Array
    if(fillArray.length != 19){
        fillArray.push(nameArray[randNum]);
    }
    // Delete element whose index is generated from geterateRandom()
    nameArray.splice(randNum, 1);

    // If We assigned everyone a partner -> display All Finished
    if(nameArray.length <= 0){
        a.innerText = "All Finished!"
    }

    // Debug Methods
    console.log("Total # Print Desk Employees: " + nameArray.length);
    console.log("Total # Assigned Employees: " + fillArray.length);
    console.log(`Fill Array: ${fillArray}`);
    console.log(`Name Array: ${nameArray}`);
})


