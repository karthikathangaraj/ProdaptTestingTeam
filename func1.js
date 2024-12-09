//function declarations
function add(a,b)
{
    console.log(a+b)
}
// add("karthika","Thangaraj")
// add(9,8)
//function expressions
const grt=function(msg)
{
    return `hello ${msg}`
}
//console.log(grt("karthika"))

//arrow functions

const add1=()=>"x*y"

//console.log(add1());
;
//iife
(function(){console.log("hi")})();
//generate
function* demo()
{
    yield 12+8;
    yield 12-8;
    yield 12*8;
    yield "welcome";
} 
const g1= demo();
console.log(g1.next().value);
console.log(g1.next().value);
//constructor
function per(name,city)
{
   this.name = name;
   this.city = city;
}
const p1=new per("anu","chennai");
console.log(p1.name);
