const path = require('path');
const fs = require('fs');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question(`Introduce la ruta que quieres analizar:`, lepath => {

    

    lepath = lepath.replace(/\\/g, '/');
    readline.close();

    let files = fs.readdirSync(lepath);
    let results = {
        images: 0,
        texts: 0,
        videos: 0,
        directories: 0
    };
    


    routeAnalyzer(files, lepath, results);

    printResults(results);


});

function routeAnalyzer(files, lepath, results){
    

    files.forEach(file => {
        if(path.extname(file)){
          //console.log(`el archivo ${file} con extensión: ${path.extname(file)}`);
        if (path.extname(file).match(".jpg" || ".png" || ".jpeg")){
            results.images++;
        }
        if(path.extname(file).match(".txt" || ".pdf" || ".docx")){
        results.texts++;
        }
        if(path.extname(file).match(".mov" || ".mp4" || ".avi")){
        results.videos++;
        }
        }else{
            let newpath = lepath+"/"+file;
            if(fs.statSync(newpath).isDirectory()){
                results.directories++;
                let subfile = fs.readdirSync(newpath);
                routeAnalyzer(subfile, newpath, results);
            }
        }
    });
    
    return results;
};

function printResults(results){
    console.log(`Hay ${results.images} imágene(s)`);
    console.log(`Hay ${results.texts} texto(s)`);
    console.log(`Hay ${results.videos} video(s)`);
    console.log(`Hay ${results.directories} subdirectorio(s)`);
}
