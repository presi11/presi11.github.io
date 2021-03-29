export function bisiesto(n){
    if (((n % 4 == 0) && (n % 100 != 0 )) || (n % 400 == 0)){
      console.log("Es un año bisiesto")  
      return true;
       
      }
      else {
        console.log("No es un año bisiesto")
        return false;
      }
}