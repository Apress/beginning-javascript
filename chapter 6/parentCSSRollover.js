pr={
	navId:'nav',
	currentLink:'current',
	dynamicLink:'item',
	init:function(){
		if(!document.getElementById || !document.createTextNode){return;}
		pr.nav=document.getElementById(pr.navId);
		if(!pr.nav){return;}
		var lis=document.getElementsByTagName('li');
		for(var i=0;i<lis.length;i++){
			if(lis[i].getElementsByTagName('strong').length>0 || DOMhelp.cssjs('check',lis[i],pr.currentLink)){
				pr.current=i;
			}
			lis[i].index=i;
			DOMhelp.addEvent(lis[i],'mouseover',pr.roll,false);
			DOMhelp.addEvent(lis[i],'mouseout',pr.roll,false);
		}
	},
	roll:function(e){
		var t=DOMhelp.getTarget(e);
		while (t.nodeName.toLowerCase()!='li' 
		       && t.nodeName.toLowerCase()!='body'){
			t=t.parentNode;
		} 
		var action=e.type=='mouseover'?'add':'remove';
		DOMhelp.cssjs(action,pr.nav,pr.dynamicLink+(t.index+1));
	}
}
DOMhelp.addEvent(window,'load',pr.init,false);