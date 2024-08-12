// 4. Time slot calculator
// Write a function to calculate available time slots for the purpose of booking an
// appointment.I. Given an input which is an array of arrays of existing
// appointments, calculate the available time slots for the day. The input will be an
// array containing:
// [[from_time_1,to_time_1],[from_time_2,to_time_2],[from_time_3,to_time_3
// ]]
// The available time slots start from 0 hours to 24 hours. From and To times are
// always integers( not fraction and net floating point).
// Input (appointments)
// [[10, 12], [14, 15], [16, 20]]
// Which means there is an appointment from 10 to 12 & so on.
// Outputs (available slots)
// [[0, 10],[12, 14], [15, 16], [20, 24]]
// Now negating the input from 24 hours, you have four free time slots till the start of next day.


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
