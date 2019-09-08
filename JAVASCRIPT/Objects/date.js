let today = new Date();

console.log(today);//Sun Sep 08 2019 09:44:11 GMT+0530 (India Standard Time)

//getDate()

console.log(today.getDate());//8
console.log(today.getDay());//0
console.log(today.getFullYear());//2019

console.log(today.getMonth());//8

console.log(today.getTime());//1567916263598-->calculates from the epoch time

console.log(today.getMinutes());//49

console.log(today.getMilliseconds());//467

console.log(today.getHours());//9

let epochTime = new Date(0);

console.log(epochTime);//Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)

let dt = '09/08/2019'
//Converts your string date to date object
let date = new Date(dt);

console.log(date);//Sun Sep 08 2019 00:00:00 GMT+0530 (India Standard Time)

//moment.js library is used to working with date effectively

//setter methods

let tmrw = today.setDate(9);

console.log(new Date(tmrw));//Mon Sep 09 2019 09:59:06 GMT+0530 (India Standard Time)




