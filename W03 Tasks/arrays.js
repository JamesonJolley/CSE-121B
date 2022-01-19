//1
const array = ['one', 'two', 'three']
const new_array = array.map(function (thing){
    // return element for new_array
    //console.log(`<li>${thing}</li>`)
    return`<li>${thing}</li>`;
});
string = new_array.join()
//console.log(string)

document.querySelector('#myList').innerHTML=string

//2
const letters=['A', 'B', 'A'];
const GpointA = letters.map((letter)=>{
    if (letter == 'A'){
        return 4;
    } 
    else if(letter == 'B'){
        return 3;
    }
})
console.log('raw gpa:',GpointA) 

//3
const reducer = (previousValue, currentValue) => previousValue + currentValue;
const gpa = GpointA.reduce(reducer)/letters.length

console.log('gpa:',gpa) 

//4
const words = ["watermelon", "peach", "apple", "tomato", "grape"];
const short = words.filter((word) => word.length < 6);

console.log('durty:',words)
console.log('F:',short)

//5

num = [12, 34, 21, 54]
luckNumber = 21
luckNumberIndex = num.indexOf(luckNumber)

console.log(luckNumberIndex)