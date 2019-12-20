
var sizes = ["Random", "Small", "Medium", "Large"]
var sizePrice = [0, 500, 700, 1000]
var crustPrizes = [100, 200, 100, 150, 200]
var crustNames = ["Random", "Thick", "Thin", "Deep", "Stuffed"]
function blackOlive() {
    blackOliveSize = parseInt(prompt("Size: " + " 1-Small(Ksh.500) 2-Medium(Ksh.700) 3-Large(Ksh.1000)"))
    blackOliveCrust = parseInt(prompt("Crust: " + "1-Thick(Ksh.200) 2-Thin(KSh.100) 3-Deep(Ksh.150) 4-Stuffed(Ksh.200)"))
    blackOliveQuantity = parseInt(prompt("Quantitiy "))
    totalCost = crustPrizes[blackOliveCrust] + sizePrice[blackOliveSize] * blackOliveQuantity
    document.getElementById("blackOliveOrder").innerHTML = blackOliveQuantity + " Black Olive " + sizes[blackOliveSize] + "/" + crustNames[blackOliveCrust] + " crust" + " @" + totalCost
}
function mushroom() {
    mushroomSize = parseInt(prompt("Size: " + " 1-Small(Ksh.500) 2-Medium(Ksh.700) 3-Large(Ksh.1000)"))
    mushroomCrust = parseInt(prompt("Crust: " + "1-Thick(Ksh.200) 2-Thin(KSh.100) 3-Deep(Ksh.150) 4-Stuffed(Ksh.200)"))
    mushroomQuantity = parseInt(prompt("Quantity: "))
    totalCost = crustPrizes[mushroomCrust] + sizePrice[mushroomSize] * mushroomQuantity
    document.getElementById("mushroomOrder").innerHTML = mushroomQuantity + " Mushroom " + sizes[mushroomSize] + "/" + crustNames[mushroomCrust] + " crust" + " @" + totalCost    
}
function pepperoni() {
    pepperoniSize = parseInt(prompt("Size: " + " 1-Small(Ksh.500) 2-Medium(Ksh.700) 3-Large(Ksh.1000)"))
    pepperoniCrust = parseInt(prompt("Crust: " + "1-Thick(Ksh.200) 2-Thin(KSh.100) 3-Deep(Ksh.150) 4-Stuffed(Ksh.200)"))
    pepperoniQuantity = parseInt(prompt("Quantity"))
    totalCost = crustPrizes[pepperoniCrust] + sizePrice[pepperoniSize] * pepperoniQuantity
    document.getElementById("pepperoniOrder").innerHTML = pepperoniQuantity + " Pepperoni " + sizes[pepperoniSize] + "/" + crustNames[pepperoniCrust] + " crust" + " @" + totalCost
    



}
function onion() {
    onionSize = parseInt(prompt("Size: " + " 1-Small(Ksh.500) 2-Medium(Ksh.700) 3-Large(Ksh.1000)"))
    onionCrust = parseInt(prompt("Crust: " + "1-Thick(Ksh.200) 2-Thin(KSh.100) 3-Deep(Ksh.150) 4-Stuffed(Ksh.200)"))
    onionQuantity = parseInt(prompt("Quantity ?"))
    totalCost = crustPrizes[onionCrust] + sizePrice[onionSize] * onionQuantity
    document.getElementById("onionOrder").innerHTML = onionQuantity + " Onion " + sizes[onionSize] + "/" + crustNames[onionCrust] + " crust" + " @" + totalCost
}
function extraCheese() {
    extraCheeseSize = parseInt(prompt("Size: " + " 1-Small(Ksh.500) 2-Medium(Ksh.700) 3-Large(Ksh.1000)"))
    extraCheeseCrust = parseInt(prompt("Crust: " + "1-Thick(Ksh.200) 2-Thin(KSh.100) 3-Deep(Ksh.150) 4-Stuffed(Ksh.200)"))
    extraCheeseQuantity = parseInt(prompt("Quantity?"))
    totalCost = crustPrizes[extraCheeseCrust] + sizePrice[extraCheeseSize] * extraCheeseQuantity
    document.getElementById("extraCheeseOrder").innerHTML = extraCheeseQuantity + " Ex.Cheese " + sizes[extraCheeseSize] + "/" + crustNames[extraCheeseCrust] + " crust" + " @" + totalCost

}
function pineapple() {
    pineappleSize = parseInt(prompt("Size: " + " 1-Small(Ksh.500) 2-Medium(Ksh.700) 3-Large(Ksh.1000)"))
    pineappleCrust = parseInt(prompt("Crust: " + "1-Thick(Ksh.200) 2-Thin(KSh.100) 3-Deep(Ksh.150) 4-Stuffed(Ksh.200)"))
    pineappleQuantity = parseInt(prompt("Quantity ? "))
    totalCost = crustPrizes[pineappleCrust] + sizePrice[pineappleSize] * pineappleQuantity
    document.getElementById("pineappleOrder").innerHTML = pineappleQuantity + " Pineapple " + sizes[pineappleSize] + "/" + crustNames[pineappleCrust] + " crust" + " @" + totalCost
}
$(document).ready(function () {
    $("button").click(function () {
        $("#sadchef").fadeToggle("slow")
        $("#complete").fadeToggle("slow")
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