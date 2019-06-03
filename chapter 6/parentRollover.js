pr={
	navId:'nav',
	navHeight:50,
	currentLink:'current',
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
		var pos;
		var t=DOMhelp.getTarget(e);
		while (t.nodeName.toLowerCase()!='li' 
		       && t.nodeName.toLowerCase()!='body'){
			t=t.parentNode;
		} 
		pos=e.type=='mouseover'?t.index:pr.current;
		pos=pos*pr.navHeight;
		pr.nav.style.backgroundPosition='0 -'+pos+'px';
	}
}
DOMhelp.addEvent(window,'load',pr.init,false);