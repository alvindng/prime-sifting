$(document).ready(function(){
  $("#input").submit(function(event){
    event.preventDefault();
    var upper = parseInt($("#dividend").val());

    var dividends = [];
    var divisors = [];
    var primePotentials = [];

    for(i=2; i <= upper; i++) {
      dividends.push(i);
      divisors.push(i);
      
      divisors.forEach(function(divisor){
        dividends.forEach(function(dividend){
          if(dividend % divisor !== 0) {
            primePotentials.push(dividend);
          }
        });
      });
    }
    console.log(dividends);
    console.log(divisors);


    console.log(primePotentials);

  });
});
