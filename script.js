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

//b.)Convert all the strings to title caps in a string array
//Answer:
//Anonymous functions;
const titleCase=function(str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
console.log(titleCase("hello everyone"));

//IIFE function;
(function(num){
    var res=num.toString();
    var a=res.toLowerCase().split(" ");
   for(i=0;i<a.length;i++){
     a[i]=a[i].charAt(0).toUpperCase()+a[i].slice(1);
}
console.log(a.join(" "));

})(["hello everyone"])


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
        return false
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
        return num>1
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
    return ans
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

//f.)Return median of two sorted arrays of the same size.
//Answer:
//Anonymous functions;
var arr1=[1,2,3,4,5];
var arr2=[7,8,6,9];
var median=function(h,m){
var x1=arr1.concat(arr2)
x1.sort((a,b)=>a-b)
var n=x1.length;

if(n%2===0){
  return ((x1[n/2]+x1[n/2-1])/2)
  
}
else{
  return (x1[Math.floor(n/2)])
}
}

console.log(median(arr1,arr2))

//IIFE function;
var arr1=[1,2,3,4,5];
var arr2=[7,8,6,9];
(function(h,m){
var x1=arr1.concat(arr2)
x1.sort((a,b)=>a-b)
var n=x1.length;

if(n%2===0){
  console.log ((x1[n/2]+x1[n/2-1])/2);
  
}
else{
  console.log (x1[Math.floor(n/2)]); 
}
})(arr1,arr2)






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
var rotateArray1 = function(arr, k) {

  for(i=0;i<k;i++){
    arr.push(arr[i])
  }
  for(i=0;i<k;i++){
    arr.shift()
  }
  return arr
  }
  console.log(rotateArray1(number,3))

//IIFE function;
var number=[1,2,3,4,5];
(function(arr1, k) {

  for(i=0;i<k;i++){
    arr1.push(arr1[i])
  }
  for(i=0;i<k;i++){
    arr1.shift()
  }
  console.log(arr1)
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
var upper=(val)=>{
    var res=val.toString();
    var ans=res.toLowerCase().split(" ");
   for(i=0;i<ans.length;i++){
     ans[i]=ans[i].charAt(0).toUpperCase()+ans[i].slice(1);
}
return ans.join(" ");
}
console.log(upper(["hI eveRyonE"]))



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










