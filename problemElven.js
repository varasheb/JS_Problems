/**
 * 11. Reverse Polish Notation (PostFix)
Write a function to calculate reverse polish notations or postfix notation. In reverse Polish
notation, the operators follow their operands; for instance, to add 3 and 4 together, one would
write 3 4 + rather than 3 + 4. If there are multiple operations, operators are given immediately
after their second operands, so the expression written 3 - 4+5 in conventional notation would be
written 3 4 - 5 + in reverse polish notation.
Note : You can consider only simple binary operators(+,-,*,/) for this question and no
parenthesis and functions in your input
3 4 + means 4+4
3 5 + 7 2 means (3+5)*(7-2)
3 4 + 5 * means (3+4)* 5
Function calculateRPN(exp){
—------------
—----------
}
 */


function calculateRPN(exp){
     arr=exp.split(' ')
     let stack=[]
     for (ele of arr) {
        if(ele>'1' && ele<'9'){
            stack.push(parseInt(ele))
        }else{
         let a=stack.pop()
         let b=stack.pop()
         let result
         switch(ele){
            case '+': result=a+b 
            break;
            case '-': result=a-b;
            break;
            case '*': result=a*b;
            break;
            case '/': result=b/a;
            break;

         }
         stack.push(result)
        }
     }
     return stack.pop()
    }

let ans=calculateRPN("3 5 + 7 * 8 /")
console.log(ans);