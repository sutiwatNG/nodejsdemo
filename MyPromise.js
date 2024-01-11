// สร้าง promise

const connect = true // เช็คว่าต่อเน็ต
const url1 = "demo.dev/file1.json"
const url2 = "demo.dev/file2.json"
const url3 = "demo.dev/file3.json"

function downloading(url){  //สร้างfunction
    return new Promise(function(resolve,reject){     // return Promise (ระบุฟังก์ชั่น callback ที่มีparamiter 2 ตัว คือ resolve และ reject)
        console.log(`กำลังโหลดไฟล์!`)
        setTimeout(() => {
            if (connect) {                               // กำหนดเงื่อนไขว่าตัว แปรconnect เป็นจริงหรือไม่
                resolve(`ดาวน์โหลด ${url} เรียบร้อย!`)  // ถ้าเป็นจริงแสดงข้อความว่า เรียบร้อบ
            }else{
                reject(`เกิดข้อผิดพลาด`)              // ถ้าไม่ให้แสดงข้อความว่า เกิดข้อผิดพลาด
            }
        }, 3000)
    })
}

//Async & Await

async function start () {
    console.log(await downloading(url1))
    console.log(await downloading(url2))
    console.log(await downloading(url3))
}

start()

/* 
downloading(url1).then(function(result) {
    console.log(result)
    downloading(url2).then(function(result) {
        console.log(result)
        downloading(url3).then(function(result) {
            console.log(result)
        })
    })
})

downloading(url1).then(function(result) {
    console.log(result)
    return downloading(url2)
}).then(function(result) {
    console.log(result)
    return downloading(url3)
}).then(function(result) {
    console.log(result)
}) */


