a={
    name:"karthika"
}
const m1=new Map(
    [
        ["name","karthika"],
        ["name","karthikaThangaraj"],
        ["age",25],
        ["city","chennai"]
        ,[1,"111"]
        ,["k",[1,2,3,4,5,6,7,8,9,10]]
    ])
    console.log(m1)
console.log(m1.get(1))
for(let[k,v] of m1)
{
    console.log(`${k} : ${v}`)
}
m1.forEach((k,v) => { console.log(k + ": " + v)})
console.log(m1.has("age"))
