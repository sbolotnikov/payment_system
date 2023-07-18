const sharp = require('sharp');
export function resizeImage(path:string){
    sharp(path)
    .resize(200)
    .jpeg({ mozjpeg: true })
    .toBuffer()
    .then((result: Object) =>{
        console.log(result); 
    })
    .catch((error: Object) => {
      console.error(error)
    })
}