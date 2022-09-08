const path = require('path');
const fs = require('fs');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`Route to analyze:`, lepath => {

  let noimages = 0, notexts = 0, novideos = 0, nodirectories = 0;
  
  lepath = lepath.replace(/\\/g, '/');
  readline.close();

  let files = fs.readdirSync(lepath);

  files.forEach(file => {
    if(path.extname(file)){
      //console.log(`el archivo ${file} con extensión: ${path.extname(file)}`);
      if (path.extname(file).match(".jpg" || ".png" || ".jpeg")){
        noimages++;
      }
    if(path.extname(file).match(".txt" || ".pdf" || ".docx")){
      notexts++;
    }
    if(path.extname(file).match(".mov" || ".mp4" || ".avi")){
      novideos++;
    }
    }else{
      nodirectories++;
      //console.log("No es un archivo");
    }
});

console.log("el numero de imagenes es "+noimages);
console.log("el numero de documentos es "+notexts);
console.log("el numero de videos es "+novideos);
console.log("el numero de directorios es "+nodirectories);

});

