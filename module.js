//Blocking
const fs = require('fs')

//อ่านไฟล์ input.txt
const data =  fs.readFileSync('NodejsBasic/myFile/input.txt','utf-8')
console.log(data)
console.log("จบการทำงาน")

//เขียนไฟล์
const outputtext = `Hello node.js\n${data}\nไฟล์ถูกเขียนเมื่อ ${new Date()}`
fs.writeFileSync("NodejsBasic/myFile/output.txt",outputtext)
console.log("เขียนไฟล์เรียบร้อย")