export function pangrams(s) {
   let alphabet = "abcdefghijklmnopqrstuvwxyz";
   let regex = /\s/g;
   let lowercase = s.toLowerCase().replace(regex, "");
  
   for(let i = 0; i < alphabet.length; i++){
    if(lowercase.indexOf(alphabet[i]) === -1){
      console.log("No es un pangrama")
      return false;
    }
   }
  console.log("Es un pangrama")
  return true;
}