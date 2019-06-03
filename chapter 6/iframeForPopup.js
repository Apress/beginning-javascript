pop={
	triggerClass:'iframepop',
	popupClass:'popup',
	openPopupLinkClass:'popuplink',
	displayPrefix:'Hide ',
	ifrContainer:null,
	init:function(){
		if(!document.getElementById || !document.createTextNode){return;}
		var allLinks=document.getElementsByTagName('a');
		for(var i=0;i<allLinks.length;i++){
			if(!DOMhelp.cssjs('check',allLinks[i],pop.triggerClass)){continue;}
			DOMhelp.addEvent(allLinks[i],'click',pop.openPopup,false);			
			allLinks[i].preset=allLinks[i].innerHTML;
			allLinks[i].onclick=DOMhelp.safariClickFix;
		}
	},
	openPopup:function(e){
		var t=DOMhelp.getTarget(e);
		if(t.nodeName.toLowerCase()!='a'){
			t=t.parentNode;	
		}
		if(pop.ifrContainer){
			pop.killPopup();
			t.innerHTML=t.preset;
			DOMhelp.cssjs('remove',t,pop.openPopupLinkClass);
		} else {		
			DOMhelp.cssjs('add',t,pop.openPopupLinkClass);
			t.innerHTML=pop.displayPrefix+t.preset;
			pop.ifrContainer=document.createElement('div');
			DOMhelp.cssjs('add',pop.ifrContainer,pop.popupClass);
			var ifr=document.createElement('iframe');
			pop.ifrContainer.appendChild(ifr);
			ifr.setAttribute('src',t.getAttribute('href'));
			document.body.appendChild(pop.ifrContainer);
			pop.positionPopup(t);
		}
		DOMhelp.cancelClick(e);
	},
	positionPopup:function(o){
		var x=0;
		var y=0;
		var h=o.offsetHeight;
		while (o != null){
			x += o.offsetLeft;
			y += o.offsetTop;
			o = o.offsetParent;
		}
		pop.ifrContainer.style.left=x+'px';
		pop.ifrContainer.style.top=y+h+'px';
	},
	killPopup:function(e){
		pop.ifrContainer.parentNode.removeChild(pop.ifrContainer);
		pop.ifrContainer=null;
		DOMhelp.cancelClick(e);
	}
}
DOMhelp.addEvent(window,'load',pop.init,false);			
