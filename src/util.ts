function image2Base64(img:any) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx!.drawImage(img, 0, 0, img.width, img.height);
    var ext = img.src.substring(img.src.lastIndexOf(".") + 1).toLowerCase();
    var dataURL = canvas.toDataURL("image/" + ext);
    return dataURL;
}
export async function getBase64Image(src:string):Promise<string>{
    var base64="";

    var img = new Image();
    img.src=src;
    img.onload=await function(){
        base64 = image2Base64(img);
        console.log(base64);
    }
    return base64;
    // new Promise((resolve) => {
    //     const image = new Image();
    //     image.src = src;
    //     image.onload = function () {
    //       resolve(getBase64Image(src))
    //     }});
    // return getBase64Image(src);
}
