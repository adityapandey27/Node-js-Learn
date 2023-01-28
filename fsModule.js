const fs = require('fs');
// fs.readFile("text.txt","utf8",(err,data)=>{
//     console.log(err,data);
// })

// const a=fs.readFileSync('text.txt')
// console.log(a);
// console.log(a.toString());
// console.log("Read File Sync")

fs.writeFile("text2.txt","I am writing some data",()=>{
    console.log("The data is written");
})