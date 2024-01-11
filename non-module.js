//non-Blocking
const fs = require('fs')

//อ่านไฟล์ input.txt
fs.readFile("NodejsBasic/myFile/input.txt",'utf-8',(err,data)=>{
    if(err) return console.log("เกินข้อผิดพลาด",err)
    const outputtext = `aaHello node.js\n${data}\nไฟล์ถูกเขียนเมื่อ ${new Date()}`
    fs.writeFile("NodejsBasic/myFile/output.txt",outputtext,err=>{
        if(err) return console.log("เกินข้อผิดพลาด",err)
        console.log("เขียนไฟล์เรัยบร้้อย!")
    })
})

