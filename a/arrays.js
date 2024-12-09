let f1=[1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f","g","h","i"]

console.log('Original Array:', f1[0], f1[1], f1[2],f1);
const f2 =new Array(1,2,3,4,5);
console.log('Original Array:', f2)
f2.push(99)
f2.pop()
f2.shift()
f2.unshift(99)
console.log('Original Array:', f2)
console.log(f2.includes(991))
console.log(f2.sort())
console.log(f2.reverse()) 
for(let i=0 ; i<f2.length ; i++)
{
        console.log(f2[i]* 2)
}
for(let i of f2)
    console.log(i* 2)