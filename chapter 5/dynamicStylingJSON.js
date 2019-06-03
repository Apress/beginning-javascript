sc={
  init:function(){
    if(!document.getElementById || !document.createElement){return;}    
 
    DOMhelp.cssjs('add',document.body,css['dynamic scripting enabled']);
   
    sc.head=document.getElementsByTagName('h3')[0];
    if(!sc.head){return;}      
    sc.ad=DOMhelp.closestSibling(sc.head,1);
   
    DOMhelp.cssjs('add',sc.ad,css['hide elements']);
   
    var t=DOMhelp.getText(sc.head);
    var collapseLink=DOMhelp.createLink('#',t);
    sc.head.replaceChild(collapseLink,sc.head.firstChild);
    DOMhelp.addEvent(collapseLink,'click',sc.peekaboo,false)
    collapseLink.onclick=function(){return;} // Safari fix
  },
  peekaboo:function(e){
    if(DOMhelp.cssjs('check',sc.ad,css['hide elements'])){
       DOMhelp.cssjs('remove',sc.ad,css['hide elements']);
    } else {
       DOMhelp.cssjs('add',sc.ad,css['hide elements']);
    }
    DOMhelp.cancelClick(e);    // more code snipped
  }
}
DOMhelp.addEvent(window,'load',sc.init,false);
