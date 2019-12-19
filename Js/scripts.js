var blackOliveCrust =document.getElementById("blackOliveCrust").value;
function blackOlive (){
   blackOliveSize = prompt("What size of pizza/n" + " S-Small M-Medium L-Large")
   alert(blackOliveSize);
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
