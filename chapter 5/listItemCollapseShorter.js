newshl={
  // CSS classes
  overClass:'over', // rollover effect
  hideClass:'hide', // hide things
  currentClass:'current', // open item
  
  init:function(){
    var hl;
    if(!document.getElementById || !document.createTextNode){return;}
    var newsList=document.getElementById('news');
    if(!newsList){return;}
    var newsItems=newsList.getElementsByTagName('li');
    for(var i=0;i<newsItems.length;i++){
      hl=newsItems[i].getElementsByTagName('a')[0];
      DOMhelp.addEvent(hl,'click',newshl.toggleNews,false);
      DOMhelp.addEvent(hl,'mouseover',newshl.hover,false);
      DOMhelp.addEvent(hl,'mouseout',newshl.hover,false);
	  hl.onclick = DOMhelp.safariClickFix;
      DOMhelp.cssjs('add',newsItems[i],newshl.hideClass);
    }
  },
  toggleNews:function(e){
    var section=DOMhelp.getTarget(e).parentNode.parentNode;
	if(DOMhelp.cssjs('check',section,newshl.currentClass)){
      DOMhelp.cssjs('swap',section,newshl.currentClass,newshl.hideClass);
    }else{
      DOMhelp.cssjs('swap',section,newshl.hideClass,newshl.currentClass);
    }
    DOMhelp.cancelClick(e);
  },
  hover:function(e){
    var hl = DOMhelp.getTarget(e).parentNode.parentNode;
    var action = e.type == 'mouseout'?'remove':'add';
    DOMhelp.cssjs(action,hl,newshl.overClass);
  }
}
DOMhelp.addEvent(window,'load',newshl.init,false);
