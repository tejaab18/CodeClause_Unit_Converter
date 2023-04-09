console.log("Unit conversions");
let kilometerBtn = document.querySelector(".km");
let meterBtn = document.querySelector(".m");
let centimeterBtn = document.querySelector(".cm");
let millimeterBtn = document.querySelector(".mm");
let mminput = document.getElementById("mminp");
let cminput = document.getElementById("cminp");
let minput = document.getElementById("minp");
let kminput = document.getElementById("kminp");
let result = document.getElementById("result");


millimeterBtn.addEventListener("click",function(){
    let cmToMm = cminput.value * 10;
    let mToMm = minput.value * 100 * 10;
    let kmToMm = kminput.value * 1000 * 100 * 10;
    let mmToMm = kminput.value;

 
    if(cminput.value){
        result.value= `${cmToMm}mm`;
        minput.value="";
        kminput.value="";
        mminput.value="";
    } 
    else if(minput.value){
        result.value= `${mToMm}mm`;
        cminput.value="";
        kminput.value="";
        mminput.value="";
    }
    else if(kminput.value){
        result.value= `${kmToMm}mm`;
        minput.value="";
        cminput.value="";
        mminput.value="";
    }
    else if(mminput.value){
        result.value= `${mmToMm}mm`;
        minput.value="";
        cminput.value="";
        kminput.value="";
    }

});
centimeterBtn.addEventListener("click",function(){
    let mmToCm = mminput.value / 10;
    let mToCm = minput.value * 100;
    let kmToCm = kminput.value * 1000 * 100;
    let cmToCm = kminput.value;

if(mminput.value){
        result.value= `${mmToCm}cm`;
        minput.value="";
        kminput.value="";
        cminput.value="";
    } 
    else if(minput.value){
        result.value= `${mToCm}cm`;
        mminput.value="";
        kminput.value="";
        cminput.value="";
    }
    else if(kminput.value){
        result.value= `${kmToCm}cm`;
        minput.value="";
        mminput.value="";
        cminput.value="";
    }
    else if(cminput.value){
        result.value= `${cmToCm}cm`;
        minput.value="";
        mminput.value="";
        kminput.value="";
    }
});
meterBtn.addEventListener("click",function(){
    let mmToM = mminput.value / 1000;
    let cmToM = minput.value / 100;
    let kmToM = kminput.value * 1000;
    let mToM = kminput.value;

if(mminput.value){
        result.value= `${mmToM}m`;
        cminput.value="";
        kminput.value="";
        minput.value="";
    } 
    else if(cminput.value){
        result.value= `${cmToM}m`;
        mminput.value="";
        kminput.value="";
        minput.value="";
    }
    else if(kminput.value){
        result.value= `${kmToM}m`;
        cminput.value="";
        mminput.value="";
        minput.value="";
    }
    else if(minput.value){
        result.value= `${mToM}m`;
        cminput.value="";
        mminput.value="";
        kminput.value="";
    }
});
kilometerBtn.addEventListener("click",function(){
    let mmToKm = mminput.value / 1000000;
    let cmToKm = minput.value / 100000;
    let mToKm = minput.value / 1000;
    let kmToKm = kminput.value;

if(mminput.value){
        result.value= `${mmToKm}km`;
        cminput.value="";
        minput.value="";
        kminput.value="";
    } 
    else if(cminput.value){
        result.value= `${cmToKm}km`;
        mminput.value="";
        minput.value="";
        kminput.value="";
    }
    else if(minput.value){
        result.value= `${mToKm}km`;
        cminput.value="";
        mminput.value="";
        kminput.value="";
    }
    else if(kminput.value){
        result.value= `${kmToKm}km`;
        minput.value="";
        cminput.value="";
        mminput.value="";
    }
});
