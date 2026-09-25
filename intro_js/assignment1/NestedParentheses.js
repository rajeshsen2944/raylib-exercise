function addParentheses(number)
{
    if( number === 0 )
        return "";

    return "(" + addParentheses(number-1) + ")";
}

console.log(addParentheses(5));