function createWeights(theObj){
  var callerForm=theObj.form;

  if(!gIsNumber(callerForm.PWeight.value,35,180)){
    alert("Lütfen  gebelik öncesi kilonuz için 35 ile  180 arası bir rakam giriniz");
    callerForm.PWeight.focus();
    callerForm.PWeight.select();
    return false;
  }
  if(!gIsNumber(callerForm.CWeight.value,35,180)){
    alert("Lütfen  şimdiki kilonuz için 35 ile  180 arası bir rakam giriniz");
    callerForm.CWeight.focus();
    callerForm.CWeight.select();
    return false;
  }
   
  var pWeight=parseInt( stripLeadingZeros( callerForm.PWeight.value ) );
  var cWeight=parseInt( stripLeadingZeros( callerForm.CWeight.value ) );
  var theWeek=0;

  for(i=0;i<callerForm.Week.options.length;i++){
    if(callerForm.Week.options[i].selected==true){
      theWeek=parseInt(callerForm.Week.options[i].value);
    }
  }

  if(theWeek<8){
	  var lowWeight=0+pWeight;
	  var upWeight=0+pWeight;
	} else if(theWeek>=8 && theWeek <= 15){
      var lowWeight=Math.round(0.453*((-0.002604*Math.pow(theWeek,3))+(0.1517857*Math.pow(theWeek,2))-(1.81994*Math.pow(theWeek,1))+6.4178571) +pWeight);
      var upWeight=Math.round(0.453*((0.0130208*Math.pow(theWeek,3))-(0.379464*Math.pow(theWeek,2))+(4.0550595*Math.pow(theWeek,1))-12.58214) +pWeight);
   } else if(theWeek>=16 && theWeek <= 31){
        var lowWeight=Math.round(0.453*((0.000342*Math.pow(theWeek,3))-(0.041126*Math.pow(theWeek,2))+(2.3628096*Math.pow(theWeek,1))-23.16739) +pWeight);
        var upWeight=Math.round(0.453*((-0.000789*Math.pow(theWeek,3))+(0.0324675*Math.pow(theWeek,2))+(1.1341089*Math.pow(theWeek,1))-14.778114) +pWeight);
   } else if(theWeek>=32){
        var lowWeight=Math.round(0.453*((0.0052083*Math.pow(theWeek,3))-(0.616071*(Math.pow(theWeek,2)))+(24.33631*Math.pow(theWeek,1))-297.05) +pWeight);
        var upWeight=Math.round(0.453*((-4.9*Math.pow(10,-16))*Math.pow(theWeek,3)-(0.040179*Math.pow(theWeek,2))+(3.3303571*Math.pow(theWeek,1))-36.45) +pWeight);
   }

   callerForm.Pound1.value=lowWeight-pWeight;
   callerForm.Pound2.value=upWeight-pWeight;
   callerForm.GWeight.value=cWeight-pWeight;
}


function stripLeadingZeros( number ) {

  // convert to string
  number = "" + number;

  // strip out any leading zeros that might be interpreted as octal
  if ( number.indexOf("0") != -1 ) { //if it includes a 0 test:
    while ( number.indexOf("0") == 0 ) {
      number = number.substring( 1 );
    }
  }

  return number;

}


