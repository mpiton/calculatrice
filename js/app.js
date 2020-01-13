let operande1 = "0";
let operateur = "+";
let test = false;


function calculer( g, v )
{
  console.log( g, v );
  let ecran = document.querySelector( "#ecran" );
  switch ( g )
  {
  case "ch":
    if ( test )
    {
      ecran.value = "";
      test = false;
    }
    if ( ecran.value == "0" ) ecran.value = "";
    ecran.value += v;
    break;

  case "dec":
    if ( ecran.value.indexOf( "." ) == -1 )
      ecran.value += ".";
    break;

  case "op":
    calculer( "eg" );
    operande1 = ecran.value;
    operateur = v;
    test = true;
    break;

  case "eg":
    switch ( operateur )
    {
    case "+":
      ecran.value = parseFloat( ecran.value ) + parseFloat( operande1 );
      break;

    case "-":
      ecran.value = operande1 - ecran.value;
      break;

    case "/":
      ecran.value = operande1 / ecran.value;
      break;

    case "x":
      ecran.value = operande1 * ecran.value;
      break;
    }
    break;

  case "sp":
    ecran.value = 0;
    if ( v == "ce" ) operande1 = 0;
    break;
  }
}