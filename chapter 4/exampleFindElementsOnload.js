function findElements()
{
  var listElements = document.getElementsByTagName('li');
  var paragraphs = document.getElementsByTagName('p');
 var classes = document.getElementsByClassName("paraStyle");

  var msg = 'This document contains ' + listElements.length + ' list items\n';
  msg += 'and ' + paragraphs.length + ' paragraphs.';
  alert(msg); 
//console.log(classes[0].nodeName);
}
document.addEventListener("DOMContentLoaded",findElements,true);
