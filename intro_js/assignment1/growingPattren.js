// function pattren(n) {
//   if (n <= 0) return "";
//   return displayIncreaseStar(n) + displayDecreaseStar(n - 1);
// }
// function displayIncreaseStar(n) {
//   if (n === 0) return "";
//   return displayIncreaseStar(n - 1) + "\n" + addStar(n);
// }

// function displayDecreaseStar(n) {
//   if (n <= 0) return "";
//   return "\n" + addStar(n) + displayDecreaseStar(n - 1);
// }

function addStar(number) {
  if (number === 0) return "";
  return "*" + addStar(number - 1);
}

console.log(pattren(2));


function pattren(n)
{
  if (n === 1)
{}  
}