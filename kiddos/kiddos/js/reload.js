
var d = new Date();
var n = d.getTime();
var r = d.getTime();
while(true){
    r = new Date();
    if(r.getTime()-n>=5000){
        console.log("reload");
        break;
    }
}