
function freeTimeSlotCalculator(timeSlot){
    let n=timeSlot.length
    timeSlot.sort((a,b)=>a[0]-b[0])
    let result=[]
 
    for(let i=0;i<n-1;i++){
        if(i==0 && timeSlot[0][0]>0){
            result.push([0,timeSlot[0][0]])
        }
        if(timeSlot[i][1]<timeSlot[i+1][0]){
         result.push([timeSlot[i][1],timeSlot[i+1][0]])
        }
        if(i==n-2 && timeSlot[n-1][1]<24){
            result.push([timeSlot[n-1][1],24])
        }
    }
   
return result
}

console.log(freeTimeSlotCalculator([[14, 15],[10, 12], [16, 20]]));
