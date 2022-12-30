function ROWP(num) {
    document.getElementById("Quantity" + num).value = parseInt(document.getElementById("Quantity" + num).value) + 1
    let qty = document.getElementById("Quantity" + num).value * parseInt(document.getElementById("Price" + num).innerText)
    document.getElementById("total" + num).innerText = qty
    GTOTAL()
}
function ROWM(num) {
    document.getElementById("Quantity" + num).value = parseInt(document.getElementById("Quantity" + num).value) - 1

    let qty = document.getElementById("Quantity" + num).value * parseInt(document.getElementById("Price" + num).innerText)
    document.getElementById("total" + num).innerText = qty
    GTOTAL()
}

function GTOTAL(){
    let payment1 = parseInt( document.getElementById("total1").innerText)
    let payment2 = parseInt( document.getElementById("total2").innerText)
    let payment3 = parseInt( document.getElementById("total3").innerText)
    let totalpayment = payment1 + payment2 + payment3
    document.getElementById("totalG").innerText=totalpayment
    
}
function like1 (){
    document.getElementById("heart1").style.color="red"
}
function like2 (){
    document.getElementById("heart2").style.color="red"
}
function like3 (){
    document.getElementById("heart3").style.color="red"
}

function Delete1 () {
    let DEL1 = document.getElementById("delete1") 
    let payment1 = parseInt( document.getElementById("total1").innerText)
    document.getElementById("totalG").innerText=parseInt(document.getElementById("totalG").innerText) - payment1


    DEL1.parentElement.parentElement.style='display:none'
}

function Delete2 () {
    let DEL2 = document.getElementById("delete2") 
    let payment2 = parseInt( document.getElementById("total2").innerText)
    document.getElementById("totalG").innerText=parseInt(document.getElementById("totalG").innerText) - payment2

    DEL2.parentElement.parentElement.style='display:none'
}

function Delete3 () {
    let DEL3 = document.getElementById("delete3") 
    let payment3 = parseInt( document.getElementById("total3").innerText)
    document.getElementById("totalG").innerText=    parseInt(document.getElementById("totalG").innerText) - payment3

    DEL3.parentElement.parentElement.style='display:none'
}


