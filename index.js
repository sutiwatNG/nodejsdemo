//เขียนโปรแกรมดาวน์โหลดไฟล์

const url1="suttiwat.dev/file1.json" //ประกาศค่า
const url2="suttiwat.dev/file2.json"
const url3="suttiwat.dev/file3.json"

function downloading(url,callback){             //เขียนฟังก์ชั้น downloading ที่มีตัวแปร url และ callback
    console.log( `กำลังดาวน์โหลดไฟล์จาก ${url}`)  // แสดงค่าของตัวแปร url
    setTimeout(()=>{                           
        callback(url)                          // setเวลารันตัวแปร 3 วิ จะส่งค่าcallback ตัวแปร url       
    },3000)
}


downloading(url1,function(result){              // เขียน แสดงผลลัพ 
    console.log(`ดาวน์โหลด ${result} เรียบร้อย!`)
    downloading(url2,function(result){
        console.log(`ดาวน์โหลด ${result} เรียบร้อย!`)
        downloading(url3,function(result){
            console.log(`ดาวน์โหลด ${result} เรียบร้อย!`)
        })
    })
})

