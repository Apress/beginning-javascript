newshl={
  // CSS classes
  overClass:'over', // rollover effect
  hideClass:'hide', // hide things
  currentClass:'current', // open item
  
  init:function(){
  var ps,i,hl;
  if(!document.getElementById || !document.createTextNode){return;}
    var newsList=document.getElementById('news');
    if(!newsList){return;}
    var newsItems=newsList.getElementsByTagName('li');
    for(i=0;i<newsItems.length;i++){
      hl=newsItems[i].getElementsByTagName('a')[0];
      hl.addEventListener('click',newshl.toggleNews,false);
      hl.addEventListener('mouseover',newshl.hover,false);
      hl.addEventListener('mouseout',newshl.hover,false);
    }
    var ps=newsList.getElementsByTagName('p');
    for(i=0;i<ps.length;i++){
      DOMhelp.cssjs('add',ps[i],newshl.hideClass);
    }
  },
  toggleNews:function(e){
    var section=e.target.parentNode.parentNode;
    var first=section.getElementsByTagName('p')[0];
    var action=DOMhelp.cssjs('check',first,newshl.hideClass)?'remove':'add';
    var sectionAction=action=='remove'?'add':'remove';
    var ps=section.getElementsByTagName('p');
    for(var i=0;i<ps.length;i++){
      DOMhelp.cssjs(action,ps[i],newshl.hideClass);
    }
    DOMhelp.cssjs(sectionAction,section,newshl.currentClass);
    e.preventDefault();
    e.stopPropagation();
  },
  hover:function(e){
    var hl=e.target.parentNode.parentNode;
    var action=e.type=='mouseout'?'remove':'add';
    DOMhelp.cssjs(action,hl,newshl.overClass);
  }
}
window.addEventListener('load',newshl.init,false);
