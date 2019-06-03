sc={
  init:function(){
    if(!document.getElementById || !document.createElement){return;}    
    
   DOMhelp.cssjs('add',document.body,css.supported);
   
    sc.head=document.getElementsByTagName('h3')[0];
    if(!sc.head){return;}      
    sc.ad=DOMhelp.closestSibling(sc.head,1);
   
    DOMhelp.cssjs('add',sc.ad,css.hide);
   
    var t=DOMhelp.getText(sc.head);
    var collapseLink=DOMhelp.createLink('#',t);
    sc.head.replaceChild(collapseLink,sc.head.firstChild);
    DOMhelp.addEvent(collapseLink,'click',sc.peekaboo,false);
    collapseLink.onclick=function(){return;} // Safari fix
  },
  peekaboo:function(e){
    if(DOMhelp.cssjs('check',sc.ad,css.hide)){
       DOMhelp.cssjs('remove',sc.ad,css.hide);
    } else {
       DOMhelp.cssjs('add',sc.ad,css.hide);
    }
    DOMhelp.cancelClick(e);
  }
}
DOMhelp.addEvent(window,'load',sc.init,false);
