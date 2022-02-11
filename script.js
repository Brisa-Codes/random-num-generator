const number = document.querySelector('.count-number');
const btn = document.querySelector('.generate');


btn.addEventListener('click', generateNumber);

function generateNumber() {
    const rand = Math.floor(Math.random() * 1000 + 1);
    //console.log(rand);
    number.innerHTML = rand;
}
generateNumber;

/*

//ASSIGNMENT
// Use the arrow function

const generateNumber = () => {
    const num = Math.floor(Math.random() * 1000 + 1);
    number.innerHTML = num;
}
btn.addEventListener('click', generateNumber);

*/