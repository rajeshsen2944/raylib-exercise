function pattren(n) {
  if (n <= 0) return "";
  return displayStar(n,1);
}
function displayStar(n,end) {
  if (n === 0) return "";
  
  return addStar(end)+"\n"+displayStar(n-1,end+1)+addStar(end-1)+"\n";
}
//---------------------------------
function addStar(number) {
  if (number === 0) return "";
  return "*" + addStar(number - 1);
}
console.log(pattren(3));

//---------------------------------
// function pattern(n) {
//   if (n === 0) {
//     return "";
//   }

//   if (n === 1) {
//     return "*";
//   }

//   return pattern(n - 1) + "\n" + addStar(n) + "\n" ;
// }





// function pattern (number)
// {
//     let n = number;
//     if(n >= number)
//     {

//     }
// }


