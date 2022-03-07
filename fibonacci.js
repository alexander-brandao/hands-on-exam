function fibonacci(){
    var term = parseInt(document.getElementById('numero').value);
    var answer = document.getElementById('answer');
    var penultimate=0, ultimo=1;
    var numero;
  
    if(term<=2)
     numero = term-1;
    else
     for(var count=3 ; count<=term ; count++){
      numero = ultimo + penultimate;
      penultimate = ultimo;
      ultimo = numero;
     }
  
    answer.innerHTML=numero;
  }