 let message="The child walk to the market";
let result = message.charAt(0).toUpperCase()+message.slice(1);
console.log(result);

let charToAdd = 'R';
let newMessage=message.slice(0, 3)+ charToAdd + message.slice(3);
console.log(newMessage);

let greetings="hello world,hello Javascript!";
let count =(greetings.match(/hello/g) || []).length;
console.log({count});

let lastChar=message.slice(-3);
console.log(lastChar);

let firstchar=message.slice(0,3);
console.log(firstchar);

let sorted= message.split('').sort().join('');
console.log(sorted);

let whitespace=message.replace(/\s+/g ,'');
console.log(whitespace);



let string="greeting";
let stringIndex= string.indexOf('t');
console.log(stringIndex);


let deletion=message.slice(2);
console.log(deletion);

let lastDel=message.slice(0,-2);
console.log(lastDel);





