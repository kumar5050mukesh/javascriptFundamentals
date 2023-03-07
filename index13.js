// <!-- 13. Bill splitter
// A restaurant wants to calculate the total bill for a table based on the cost of each dish and the number of
// people sharing it. They require a function that takes in the cost of each dish and the number of people sharing
// it and returns an object that contains the total bill and the bill to be paid by each person in the group. -->


const arr= [10,56,45,34,23,67]
const y=arr.reduce((prev,curr)=>
    prev+curr,0)

    
console.log(y)


let numofpeople=5
bill=y/5
console.log(bill)