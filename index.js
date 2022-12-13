/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const btn= document.getElementById("convert-btn")




btn.addEventListener("click",function(){
    meterFeet()
    litersGallons()
    kilogransPounds()
})

function meterFeet(){
    const value = +document.getElementById("value").value
    const para = document.getElementById("meter-feet")
    const feet = value*3.281
    const meters = value /3.281
    para.innerText = `${value} meters = ${feet.toFixed(3)} feet| ${value} feet = ${meters.toFixed(3)} meters`
}

function litersGallons(){
    const value = +document.getElementById("value").value
    const para = document.getElementById("liter-gallon")
    const gallon = value * 0.264
    const  liter = value /0.264
    para.innerText = `${value} liters = ${gallon.toFixed(3)} gallons| ${value} gallons = ${liter.toFixed(3)} liters`
}

function kilogransPounds (){
    const value = +document.getElementById("value").value
    const para = document.getElementById("kilogram-pound")
    const kilo = value / 2.204
    const pound = value * 2.204
    para.innerText = `${value} kilograms = ${pound.toFixed(3)} pounds| ${value} pounds = ${kilo.toFixed(3)} kilograms`
}