import {pangrams} from "./Modules/pangram.js"
import {bisiesto} from "./Modules/bisiesto.js"
import { romanNumerals } from "./Modules/roman.js"
import {unicos} from "./Modules/unicos.js";


const biciestoText=document.getElementById("biciesto");
const biciestoResult= document.getElementById("resultBiciesto")
const biciestoBtn= document.getElementById("biciestoButton")
biciestoBtn.onclick = function(){resultBiciesto()};

const pangramText=document.getElementById("pangram");
const pangramBtn= document.getElementById("pangramButton")
pangramBtn.onclick = function(){resultPangram()};
const pangramResult= document.getElementById("resultPangram")

const romanoText=document.getElementById("romano");
const romanoBtn= document.getElementById("romanoButton")
romanoBtn.onclick = function(){resultRomano()};
const romanoResult= document.getElementById("resultRomano")

const unicosText=document.getElementById("unicos");
const unicosBtn= document.getElementById("unicosButton")
unicosBtn.onclick = function(){resultUnicos()};
const unicosResult= document.getElementById("resultUnicos")

function resultBiciesto(){
    const result = bisiesto(biciestoText.value)
    if(result){
        biciestoResult.innerHTML="Es un año bisiesto"
    }else
    {
        biciestoResult.innerHTML="No es un año bisiesto"
    }    
}

function resultPangram(){
    const result = pangrams(pangramText.value)
    if(result){
        pangramResult.innerHTML="Es un pangrama"
    }else
    {
        pangramResult.innerHTML="No es un pangrama"
    }    
}

function resultRomano(){
    const result = romanNumerals(romanoText.value)
    romanoResult.innerHTML = result;

}

function resultUnicos(){
    const result = unicos(unicosText.value)
    unicosResult.innerHTML = result;

}