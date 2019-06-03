function checkDate(){
  var dateField=document.getElementById('date');
  if(!dateField){return;}
  var errorContainer=dateField.parentNode.getElementsByTagName('span')[0];
  if(!errorContainer){return;}
  var checkPattern=new RegExp("\\d{2}/\\d{2}/\\d{4}");
  var errorMessage='';
  errorContainer.firstChild.nodeValue=' ';
  var dateValue=dateField.value;
  if(dateValue==''){
    errorMessage='Please provide a date.';
  } else if(!checkPattern.test(dateValue)){
    errorMessage='Please provide the date in the defined format.';
  }
  if(errorMessage!=''){
    errorContainer.firstChild.nodeValue=errorMessage;
    dateField.focus();
    return false;
  }else{
    return true;
  }
}
