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
    for(let i=0;i<n;i++){
        
    }
console.log(timeSlot);
return[]
}

console.log(freeTimeSlotCalculator([[10, 12], [14, 15], [16, 20]]));
