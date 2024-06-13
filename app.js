// write code here
function filterOutOdds(...numbers) {
  return numbers.filter(num => num % 2 === 0);
}

console.log(filterOutOdds(1, 2, 3, 4, 5, 6)); 
console.log(filterOutOdds(7, 8, 9, 10, 11, 12)); 
console.log(filterOutOdds(15, 17, 19)); 
console.log(filterOutOdds()); 
