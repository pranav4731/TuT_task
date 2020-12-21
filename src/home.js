console.log("hello");
//alert('yoo');


//var age = prompt('What is your age?');

//document.getElementById('something').innerHTML = age;

// var num = 5.7
// console.log(50/5)


//function
function greetings(yourName){ 
 var result = 'Hello ' + yourName;
 console.log(result);
}

var nameQ = prompt('What is your name?');
greetings(nameQ);


//how arguments work in function- it should be outside of a function!

function sum(a,b){
var result = a + b; 
console.log(result)

}

sum(10,20);

var num = 0;

while(num <10){
 num += 1
 console.log(num)
}