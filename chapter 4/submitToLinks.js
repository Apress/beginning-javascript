function submitToLinks(){
  if(!document.getElementById || !document.createTextNode){return;}
  var inputs,i,newLink,newText;
  inputs=document.getElementsByTagName('input');
  for (i=0;i<inputs.length;i++){
    if(inputs[i].getAttribute('type').toLowerCase()!='submit'){continue;i++}	
	newLink=document.createElement('a');
	newText=document.createTextNode(inputs[i].getAttribute('value'));
	newLink.appendChild(newText);
	newLink.setAttribute('href','javascript:document.forms[0].submit()');
	inputs[i].parentNode.replaceChild(newLink,inputs[i]);
  }
}
window.onload=submitToLinks;