function decomp() {
 
  if (nb < 2 || !Number(nb)){
    console.log("Erreur ! Veuillez saisir un nombre au moins supérieur ou égal à 2. N'écrivez pas votre nombre en toute lettre.");
    } else {
      
  var primeNumber = [];
  var i
  
  for (i = 2; i <= nb; i++){
    while (nb % i === 0){
      primeNumber.push(i);
      nb = nb/i;
    }
  }
  return primeNumber;
  }
}

nb  = prompt("Veuillez saisir un nombre")
decomp(nb);
