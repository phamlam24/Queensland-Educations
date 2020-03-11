
function getApi(){
    var email = document.getElementById("input").innerHTML;
    var x = "http://192.168.1.50/apispam/?email="+email;
    var a = new XMLHttpRequest();
    a.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(a.response);
        }
      };
    a.open("GET",x,true);
    a.send();
}
