//grabbing value from user input
let inputNum = document.getElementById("number")

const meterFeet = document.getElementById("meter-feet")
const litreGallons = document.getElementById("litres-gallons")
const kilogramsPounds = document.getElementById("kilograms-pounds")

const convertBtn = document.getElementById("convert-Btn")



//button event listener
convertBtn.addEventListener("click", function(){

    const unitVal = inputNum.value

    const metersToFeet =  (unitVal * 3.281).toFixed(3)
    const feetToMeters = (unitVal / 3.282).toFixed(3)
   

//volume calculations

    const litresToGallons = (unitVal  * 0.264).toFixed(3)
    const gallonsToLitres = (unitVal / 0.264).toFixed(3)
   

//mass calculations

    const kilogramsToPounds = (unitVal * 2.204).toFixed(3)
    const poundsToKilograms = (unitVal / 2.204).toFixed(3)
  

    
    
    
        meterFeet.innerHTML = `${unitVal} meters = ${metersToFeet} feet | ${unitVal} feet = ${feetToMeters} meters`
        litreGallons.innerHTML = `${unitVal} litres = ${litresToGallons} gallons | ${unitVal} gallons = ${gallonsToLitres} litres`
        kilogramsPounds.innerHTML = `${unitVal} kilograms = ${kilogramsToPounds} pounds | ${unitVal} pounds = ${poundsToKilograms} kilograms`

    
})

    
