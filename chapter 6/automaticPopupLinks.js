poplinks={
	triggerClass:'popup',
	popupLabel:' (opens in a new window)',
	windowProps:'width=200,height=200,top=100,left=100',
	init:function(){
		if(!document.getElementById || !document.createTextNode){return;}
		var label;
		var allLinks=document.getElementsByTagName('a');
		for(var i=0;i<allLinks.length;i++){
			if(!DOMhelp.cssjs('check',allLinks[i],poplinks.triggerClass)){continue;}
		    label=document.createTextNode(poplinks.popupLabel)
			allLinks[i].appendChild(label);
			DOMhelp.addEvent(allLinks[i],'click',poplinks.openPopup,false);			
			allLinks[i].onclick=DOMhelp.safariClickFix;
		}
	},
	openPopup:function(e){
		var t=DOMhelp.getTarget(e);
		if(t.nodeName.toLowerCase()!='a'){
			t=t.parentNode;	
		}
		var win=window.open(t.getAttribute('href'),'',poplinks.windowProps);
		DOMhelp.cancelClick(e);
	}
}
DOMhelp.addEvent(window,'load',poplinks.init,false);			