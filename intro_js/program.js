//                                  Q1
// const width = 10;
// const height = 5;
// const area= 5 * 10;

// console.log( area );

//                                  Q2
// let score = 0;

// score = 10;
// console.log( score );

// score= 25;
// console.log(score);

// score= 40;
// console.log(score);

//                                  Q3
// const s=0;
// let s=9;

// SyntaxError: Identifier 's' has already been declared

//                                  Q4
// let number =20;

// number=30;
// number=40;
// number=50;
// number=360;

// console.log(number);

// let number;

// SyntaxError: Identifier 'number' has already been declared

//                                  Q5
// const number=20;

// if(number%2==0)
//     console.log("EVEN");

// if(number!=0)
//     console.log("ODD");

//                                  Q6
// const number = 0;

// if(number>0)
//     console.log("positive");

// if(number<0)
//     console.log("negative");

// if(number === 0)
//     console.log("zero");
//-----------------------------
// const number = -1;
// const zeroFlag=number===0;
// const sign=!zeroFlag ? number>0? "Positive" : "Neative" : "Zero";
// console.log(sign);
//----------------------------
// const number=-1;
// const sign=number===0?"Zero":number>0?"Positive":"negative";
// console.log(sign);

//                                  Q7
// const age = 18;

// if(age>=18)
//     console.log("Adult");
// else
//     console.log("Minor");

// -------------------
// const age = 18;

// if (age >= 18)
//     console.log("Adult");
// if (age < 18 && age > 0)
//     console.log("Minor");

//                                  Q8

// let number=50;
// let grade = number>28?"Pass" :"Fail";
// console.log(grade);

//                                  Q9

//     const
//     /   \
// total    +
//         / \
//        10  5

//      let
//     /   \
// score    +
//        /  \
//     score  10

//Different:-
// const cannot reassigned but let can reassigned
//lookup table change for score variable,dont change for total variable

//                                  Q10

// let score = 10;
// let bonus = 5;

// score = score + bonus;  //1
// bonus = score * 2;      //2
// score = score + bonus;  //3

// console.log(score);

//lookuptable
//     score   |     bonus
// -------------------------
// 1| 15       |    5      |
// 2| 15       |   30      |
// 3| 45       |   30      |

// total = 10;
// console.log( total = 2 * 10 + total );
let a=10;
let b=20;
console.log(a=b=40);
console.log(a);
console.log(b);