const str = "I really miss my home. It was such an amazing feeling to be home and it felt like heaven. I wish I could go back home one day.";

const newStr = str.replace('home', 'India'); //this only replaces the first occurrence of the word.

console.log(str);
console.log('REPLACED STRING:')
console.log(newStr);


const newAllStr = str.replaceAll('home','India' ); //can also pass regular expressions
console.log('STRING AFTER replaceAll:')
console.log(newAllStr);


console.log(str.replaceAll(new RegExp("home", "gi"), "cats")); //works regardless of casing. Dont forget the global flag as it will throw an error.
