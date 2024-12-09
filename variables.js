// a1=NaN
// console.log(typeof(a1))
// console.log(a1)
// a1='kavi'
// a2=`welcomnamee ${a1} to Prodapt`
// console.log(typeof(a1))
// console.log(a2)
// s1=`welcome
//         heloo
//         good morning` 
// console.log(s1)

// b1=true,10
// b2=false

// console.log(typeof(b1))
// console.log((b1[0]))
// a=null 
// console.log(typeof(a))
// let b=Symbol("b")
// b="90"

// console.log(typeof(b))
// console.log(b)


let person={name: "John",
         age:21
        ,city:"chennai"}
console.log(person.age)

let p1=new Object();
p1.name="John";
p1.city="chennai";
console.log(p1) 

function p3(name,city)
{
    this.name=name;
    this.city=city;
}
const a1=new p3("anithan",22); 

console.log(a1["name"])



let student={
    name:"john",
    age:21,
    city:"chennai",
    getDetails:function()
    {
        console.log(`name:${this.name},age:${this.age},city:${this.city}`)
    }
}

student.getDetails()




