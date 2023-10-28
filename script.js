//Q1.Do the below programs in anonymous function & IIFE function

//a.)Print odd numbers in an array
//answer;

//Anonymous function;
var a=[1,4,2,3,7,6,18,19,21,31,9,20];
var oddnum=[];
var odd=function(x){
    for(i= 0;i<x.length;i++){
        if(x[i]%2!==0){
            oddnum.push(x[i])
        }
        
    }
    return oddnum;

}
console.log(odd(a))

//IIFE function;

var b=[23,35,62,100,2,20,23];
var oddnum=[];
(function(n){
    for(i= 0;i<n.length;i++){
        if(n[i]%2!==0){
            oddnum.push(n[i])
        }
     }
    console.log(oddnum)
})(b)

//c.)Sum of all numbers in an array
//answer;

//Anonymous function;
var y=[3,4,5,6];
var sum=0;
var add=function(arr){
    for(i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    return sum;
}
console.log(add(y));

//IIFE function;

var y=[3,4,5,6];
var sum=0;
(function(arr){
    for(i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    console.log(sum);
})(y)

//d.)Return all the prime numbers in an array
//answer;

//Anonymous function;
var arr=[1,2,3,4,5,6,7,8,9,10];
var prime=function(num){
for(i=2;num>i;i++){
    if(num%i==0){
        return false;
    }
}
return num>1;
}
console.log(arr.filter(prime))
  

//IIFE function;
var arr=[1,2,3,4,5,6,7,8,9,10];
(function(num){
for(i=2;num>i;i++){
    if(num%i==0){
        return false;
    }
    else{
        return num>1;
    }
}
console.log(arr.filter(prime))
})(arr)


//e.)Return all the palindromes in an array
//answer;

//Anonymous function;
var words=["civic","dad","even","pop","nope"]

var ans=[];
var palindromes=function(array){
    for(i=0;i<array.length;i++){
        strReverse=array[i].split("").reverse().join("");
        if(strReverse==array[i]){
            ans.push(array[i])
        }
    }
    return ans;
}
console.log(palindromes(words))


//IIFE function;
var words=["civic","dad","even","pop","nope"]

var ans=[];
(function(array){
    for(i=0;i<array.length;i++){
        strReverse=array[i].split("").reverse().join("");
        if(strReverse==array[i]){
            ans.push(array[i])
        }
    }
    console.log(ans);
})(words)



//g.)Remove duplicates from an array
//answer;

//Anonymous function;

var array = [1, 2, 3, 2, 3];
var uniqueArr = [];
var remove=function (arr){
    
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    return uniqueArr;
}

console.log(remove(array));


//IIFE function;
var array = [1, 2, 3, 2, 3];
var uniqueArr = [];
(function (arr){
    
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
})(array)



//h.)Rotate an array by k times
//answer;

//Anonymous function;
var number=[1,2,3,4,5];
var k=3;
var rotateArray1 = function(ar, k) {

    for (let i = 0; i < k; i++) {
        ar.unshift(ar.pop());
    }
  
    return ar;
  }
  console.log(rotateArray1(number,3))

//IIFE function;
var number=[1,2,3,4,5];
(function(ar, k) {

    for (let i = 0; i < k; i++) {
        ar.unshift(ar.pop());
    }
  
    console.log(ar);
  })(number,4)
  

//Q2.Do the below programs in arrow functions.
// a.)Print odd numbers in an array
//answer;
//arrow functions.
var n=[1,4,2,3,7,6,18,19,21,31,9,20];
var oddnum=[];
var odd=(x)=>{
    for(i= 0;i<x.length;i++){
        if(x[i]%2!==0){
            oddnum.push(x[i])
        }
        
    }
    return oddnum;

}
console.log(odd(n))

// b.)Convert all the strings to title caps in a string array
//answer;
//arrow functions.


// c.)Sum of all numbers in an array
//answer;
//arrow functions.
var y=[3,4,5,6];
var sum=0;
var add=(arr)=>{
    for(i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    return sum;
}
console.log(add(y));
// d.)Return all the prime numbers in an array
//answer;
//arrow functions.
var arr=[1,2,3,4,5,6,7,8,9,10];
var prime=(num)=>{
for(i=2;num>i;i++){
    if(num%i==0){
        return false;
    }
}
return num>1;
}
console.log(arr.filter(prime))

// e.)Return all the palindromes in an array
//answer;
//arrow functions.
var words=["civic","dad","even","pop","nope"]

var ans=[];
var palindromes=(array)=>{
    for(i=0;i<array.length;i++){
        strReverse=array[i].split("").reverse().join("");
        if(strReverse==array[i]){
            ans.push(array[i])
        }
    }
    return ans;
}
console.log(palindromes(words))










