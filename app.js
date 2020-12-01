const fs=require('fs')
if(fs.existsSync('log.text')){
  fs.appendFile('log.text','\n'+new Date().getHours()+':'+new Date().getMinutes(),()=>{})
}else{
  fs.writeFileSync('log.text','\n'+new Date().getHours()+':'+new Date().getMinutes())
}