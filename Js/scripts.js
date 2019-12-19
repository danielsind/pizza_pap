var balckOliveSize = parseInt(document.getElementsByTagName("select")[0].value);
var blackOliveCrust =document.getElementsByTagName("select")[1].value
function blackOlive (){
    alert(balckOliveSize + blackOliveCrust)
}
$(document).ready(function(){
    $("h1").click(function(){
        alert("A tilte")
    });
})
function pizza (size,topping,crust){
    this.size = size
    this.topping=topping
    this.crust=crust
}
