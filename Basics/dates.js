let today = new Date();
console.log(today.getDate());  // 28
console.log(today.toString());  // Sun Sep 28 2025 04:31:25 GMT+0530 (India Standard Time)
console.log(today.toDateString());  // Sun Sep 28 2025
console.log(today.toLocaleString());  // 28/9/2025, 4:31:25 am

let myCreatedDate = new Date(2023, 0, 23, 5,3)
console.log(myCreatedDate.toLocaleString());

// to make timestamps

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate.getTime());  // in  milisec
console.log(Math.floor(Date.now()/1000));  // in sec

// another usecase

today.toLocaleString('default', {
  weekday: "long"
})     // to further customize it