document.addEventListener("DOMContentLoaded",init,false);
function init(){
  var myLinkItem=document.getElementById('linkedItem');
  var first=firstSibling(myLinkItem.parentNode);
  var last=lastSibling(myLinkItem.parentNode);
  alert(getTextContent(first));
  alert(getTextContent(last));
}
function lastSibling(node){
  var tempObj=node.parentNode.lastChild;
  while(tempObj.nodeType!=1 && tempObj.previousSibling!=null){
    tempObj=tempObj.previousSibling;
  }
  return (tempObj.nodeType==1)?tempObj:false;
}
function firstSibling(node){
  var tempObj=node.parentNode.firstChild;
  while(tempObj.nodeType!=1 && tempObj.nextSibling!=null){
    tempObj=tempObj.nextSibling;
  }
  return (tempObj.nodeType==1)?tempObj:false;
}
function getTextContent(node){
  return node.firstChild.nodeValue;
}
