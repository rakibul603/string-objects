const school = "Raj UK Uttara Model School";


const subject = "Chemistry";
const book = "chemistry";

console.log(subject.toLowerCase() === book.toLowerCase())

if(subject.toUpperCase() === book.toUpperCase()) {
    console.log("I am reading book")
}

else{
    console.log("no reading book")
}

// console.log(school.toLowerCase())


const drink = "Water";


const liquid = "  water";

if(drink.trim().toUpperCase() === liquid.trim().toUpperCase()) {
    console.log("pani is life")
}
else{
    console.log('pani nai ')
}