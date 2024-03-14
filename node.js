// const fs = require('node:fs/promises');


// fs.writeFile("message.txt","Umar Irshad","utf-8",()=>{
    
//         console.log("file seccesfull");
    
// })

// // fs.readFile("Message.txt", "Umar Irshad Bhatti", (err, data) => {
// //     if (err) {
// //       console.error(err);
// //       return;
// //     }
// //     console.log(data);
// //   });
// var generateName = require('sillyname');
import generateName from "sillyname";
var sillyName = generateName();

console.log("My nick Name is: "+sillyName);