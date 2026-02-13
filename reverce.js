const sentence = "I am learning web Dev.";


let reverse = "";

for(const letter of sentence) {
    console.log(letter)

    reverse =  letter + reverse;
}

console.log(reverse)

let rev = '';
for(let i  = 0; i < sentence.length; i ++) {
    const letter = sentence[i];
    rev = letter + rev;
}

console.log(rev)


const reverse2 = sentence.split("");
console.log(reverse2.reverse().join(''))