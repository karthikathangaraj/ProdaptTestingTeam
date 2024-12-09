//Mapping 
const ary1=[1,2,3,4,5,6,7,8,9,10]
const sqrt=ary1.map(num =>num*num)
const even=ary1.filter(x =>x%2==0);
const sum=ary1.reduce((tot,num) => tot+num,0)
console.log(even)
console.log(sqrt)
console.log(sum)