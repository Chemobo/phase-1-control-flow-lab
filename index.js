function scuberGreetingForFeet(someValue) {

  let scuberGreetingForFeet

 if (someValue <=400) {
  scuberGreetingForFeet = 'This one is on me!';
  return scuberGreetingForFeet
 } else if (someValue >2000 && someValue <2500 ) {
  scuberGreetingForFeet = 'I will gladly take your thirty bucks.';
 return scuberGreetingForFeet
} else if (someValue >2500) {
  scuberGreetingForFeet = 'No can do.'
  return scuberGreetingForFeet
}
}

function ternaryCheckCity(city){
  return city==='NYC' ? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(tip){
  if (tip==='generous'){
    return 'Thank you so much.'
  }
  else if(tip=== 'not as generous'){
    return 'Thank you.';

  } else {
    return 'Bye.';
  }
}