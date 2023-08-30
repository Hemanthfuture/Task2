
let submit=document.getElementById('submit');
let result=document.getElementById("result");
submit.addEventListener('click',function(){
    const tempNumber = document.getElementById("temp-number").value;
    // console.log(tempNumber);
    const tempFrom = document.getElementById("temp-from");
    const tempTo = document.getElementById("temp-to");
    let fromIndex = tempFrom.selectedIndex;
    let toIndex = tempTo.selectedIndex;
    
    function celToFah(tempNum){
        let res= Math.round((tempNum*9/5)+32);
        return res;
    }
    function celToKel(tempNum){
        let res= Math.round(JSON.parse(tempNum)+273.15);
        return res;
    }
    function celToRan(tempNum){
        let res= Math.round((JSON.parse(tempNum) + 273.15)*9/5);
        return res;
    }
    
    function fahToCel(tempNum){
        let res= Math.round((tempNum-32)*5/9);
        return res;
    }
    function fahToKel(tempNum){
        let res= Math.round(((tempNum-32)*5/9)+273.15);
        return res;
    }
    function fahToRan(tempNum){
        let res= Math.round(JSON.parse(tempNum) + 459.67);
        return res;
    }

    function kelToCel(tempNum){
        let res= Math.round(tempNum-273.15);
        return res;
    }
    function kelToFah(tempNum){
        let res= Math.round(((tempNum-273.15)*9/5)+32);
        return res;
    }
    function kelToRan(tempNum){
        let res= Math.round(tempNum*9/5);
        return res;
    }
    function ranToCel(tempNum){
        let res= Math.round((tempNum-491.67)*5/9);
        return res;
    }
    function ranToFah(tempNum){
        let res= Math.round(tempNum-459.67);
        return res;
    }
    function ranToKel(tempNum){
        let res= Math.round(tempNum*5/9);
        return res;
    }

    // console.log(valueIndex);
    // if(valueIndex===0){
    //     let newResult=celToFah(tempNumber);
    //     result.innerHTML=" = "+ newResult + "°Farenheit";
    // }else{
    //     let newResult=fahToCel(tempNumber);
    //     result.innerHTML=" = "+ newResult + "°Celsius";
    // }
    //next wave
    if(fromIndex===0 &&toIndex===1){
        let newResult=celToFah(tempNumber);
        result.innerHTML=" = "+ newResult + "°Fahrenheit";
    }
    else if(fromIndex===0 && toIndex===2){
        let newResult=celToKel(tempNumber);
        result.innerHTML=" = "+ newResult + "Kelvin";
    }
    else if(fromIndex===0 && toIndex===3){
        let newResult=celToRan(tempNumber);
        result.innerHTML=" = "+ newResult + "Rankine";
    }
    else if(fromIndex===1 && toIndex===0){
        let newResult=fahToCel(tempNumber);
        result.innerHTML=" = "+ newResult + "°Celsius";
    }
    else if(fromIndex===1 && toIndex===2){
        let newResult=fahToKel(tempNumber);
        result.innerHTML=" = "+ newResult + "Kelvin";
    }
    else if(fromIndex===1 && toIndex===3){
        let newResult=fahToRan(tempNumber);
        result.innerHTML=" = "+ newResult + "Rankine";
    }
    else if(fromIndex===2 && toIndex===0){
        let newResult=kelToCel(tempNumber);
        result.innerHTML=" = "+ newResult + "°Celsius";
    }
    else if(fromIndex===2 && toIndex===1){
        let newResult=kelToFah(tempNumber);
        result.innerHTML=" = "+ newResult + "°Fahrenheit";
    }
    else if(fromIndex===2 && toIndex===3){
        let newResult=kelToRan(tempNumber);
        result.innerHTML=" = "+ newResult + "Rankine";
    }
    else if(fromIndex===3 && toIndex===0){
        let newResult=ranToCel(tempNumber);
        result.innerHTML=" = "+ newResult + "°Celsius";
    }
    else if(fromIndex===3 && toIndex===1){
        let newResult=ranToFah(tempNumber);
        result.innerHTML=" = "+ newResult + "°Fahrenheit";
    }
    else if(fromIndex===3 && toIndex===2){
        let newResult=ranToKel(tempNumber);
        result.innerHTML=" = "+ newResult + "Kelvin";
    }
    else{
        alert("Same Temperature Types")
    }


    // let value = tempType.options[tempType.selectedIndex];
    // console.log(value);
    // result.textContent=tempNumber;
})