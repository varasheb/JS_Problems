

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