
var sizes = ["Random","Small","Medium","Large"]
var sizePrice = [0,500,700,1000]
var crustPrizes = [100,200,100,150,200]
var crustNames = ["Random","Thick","Thin","Deep","Stuffed"]
function blackOlive(){
   blackOliveSize =parseInt(prompt("Size: "+ " 1-Small(Ksh.500) 2-Medium(Ksh.700) 3-Large(Ksh.1000)"))
   blackOliveCrust = parseInt(prompt("Crust: " + "1-Thick(Ksh.200) 2-Thin(KSh.100) 3-Deep(Ksh.150) 4-Stuffed(Ksh.200)"))
   blackOliveQuantity = parseInt(prompt("Quantitiy "))
   totalCost = crustPrizes[blackOliveCrust] + sizePrice[blackOliveSize] * blackOliveQuantity
   alert("Order is " + blackOliveQuantity + " of " + sizes[blackOliveSize] + " size " + crustNames[blackOliveCrust] + " crust" + " @" + crustPrizes[blackOliveCrust] + " " )
   document.getElementById("blackOliveOrder").innerHTML = blackOliveQuantity + " " + sizes[blackOliveSize] + "/" + crustNames[blackOliveCrust] + " crust" + " @" + totalCost
}
function mushroom(){
    mushroomSize = parseInt(prompt("Size: "+ " 1-Small(Ksh.500) 2-Medium(Ksh.700) 3-Large(Ksh.1000)"))
    mushroomCrust = parseInt(prompt("Crust: " + "1-Thick(Ksh.200) 2-Thin(KSh.100) 3-Deep(Ksh.150) 4-Stuffed(Ksh.200)"))
    mushroomQuantity = parseInt(prompt("Quantity: "))
    alert("Order is " + mushroomQuantity + " of " + sizes[mushroomSize] + " size" + crustNames[mushroomCrust] + " crust " + "@" + crustPrizes[mushroomCrust])
}
function pepperoni(){
    pepperoniSize = parseInt(prompt("Size: "+ " 1-Small(Ksh.500) 2-Medium(Ksh.700) 3-Large(Ksh.1000)"))
    pepperoniCrust = parseInt(prompt("Crust: " + "1-Thick(Ksh.200) 2-Thin(KSh.100) 3-Deep(Ksh.150) 4-Stuffed(Ksh.200)"))
    pepperoniQuantity = parseInt(prompt("Quantity"))
    
    

}
function onion(){
    onionSize = parseInt(prompt("Size: "+ " 1-Small(Ksh.500) 2-Medium(Ksh.700) 3-Large(Ksh.1000)"))
    onionCrust = parseInt(prompt("Crust: " + "1-Thick(Ksh.200) 2-Thin(KSh.100) 3-Deep(Ksh.150) 4-Stuffed(Ksh.200)"))
    onionQuantity = parseInt(prompt("Quantity ?"))
}
function extraCheese(){
    extraCheeseSize = parseInt(prompt("Size: "+ " 1-Small(Ksh.500) 2-Medium(Ksh.700) 3-Large(Ksh.1000)"))
    extraCheeseCrust = parseInt(prompt("Crust: " + "1-Thick(Ksh.200) 2-Thin(KSh.100) 3-Deep(Ksh.150) 4-Stuffed(Ksh.200)"))
    extraCheeseQuantity = parseInt(prompt("Quantity?"))

}
function pineapple(){
    pineapplesize = parseInt(prompt("Size: "+ " 1-Small(Ksh.500) 2-Medium(Ksh.700) 3-Large(Ksh.1000)"))
    pineappleCrust = parseInt(prompt("Crust: " + "1-Thick(Ksh.200) 2-Thin(KSh.100) 3-Deep(Ksh.150) 4-Stuffed(Ksh.200)"))
    pineappleQuantity = parseInt(prompt("Quantity ? "))
}
$(document).ready(function(){
    $("button").click(function(){
        $("#sadchef").fadeToggle("slow")
        $("#chef2").fadeToggle("slow")
        $("#deliver").fadeToggle("slow")
        $("#pick").fadeToggle("slow")
    });
})
/*function pizza (size,topping,crust){
    this.size = size
    this.topping=topping
    this.crust=crust
}*/