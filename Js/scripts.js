
var sizes = ["Random","Small","Medium","Large"]
var crustPrizes = [100,200,100,150,200]
var crustNames = ["Random","Thick","Thin","Deep","Stuffed"]
function blackOlive (){
   blackOliveSize = prompt("Size: "+ " 1-Small(Ksh.500) 2-Medium(Ksh.700) 3-Large(Ksh.1000)")
   blackOliveCrust = prompt("Crust: " + "1-Thick(Ksh.200) 2-Thin(KSh.100) 3-Deep(Ksh.150) 4-Stuffed(Ksh.200)")
   blackOliveQuantity = parseInt(prompt("Quantitiy "))
   alert("Fisrst order is " + blackOliveQuantity + " of " + sizes[blackOliveSize] + " size " + crustNames[blackOliveCrust] + " @" + crustPrizes[blackOliveCrust] + " " )
}
$(document).ready(function(){
    $("h1").click(function(){
        alert("A tilte")
    });
})
/*function pizza (size,topping,crust){
    this.size = size
    this.topping=topping
    this.crust=crust
}*/