//เขียนโปรแกรมดาวน์โหลดไฟล์

const url1="suttiwat.dev/file1.json"
const url2="suttiwat.dev/file2.json"
const url3="suttiwat.dev/file3.json"

function downloading(url,callback){
    console.log( `กำลังดาวน์โหลดไฟล์จาก ${url}`)
    setTimeout(()=>{
        callback(url)
    },3000)
}


downloading(url1,function(result){
    console.log(`ดาวน์โหลด ${result} เรียบร้อย!`)
    downloading(url2,function(result){
        console.log(`ดาวน์โหลด ${result} เรียบร้อย!`)
        downloading(url3,function(result){
            console.log(`ดาวน์โหลด ${result} เรียบร้อย!`)
        })
    })
})

