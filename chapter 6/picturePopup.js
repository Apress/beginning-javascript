pop={
	popContainer:null,
	triggerClass:'picturepop',
	openPopupLinkClass:'popuplink',
	popupClass:'popup',
	displayPrefix:'Hide ',
	init:function(){
		if(!document.getElementById || !document.createTextNode){return;}
		var allLinks=document.getElementsByTagName('a');
		for(var i=0;i<allLinks.length;i++){
			if(!DOMhelp.cssjs('check',allLinks[i],pop.triggerClass)){continue;}
			DOMhelp.addEvent(allLinks[i],'click',pop.openPopup,false);			
			allLinks[i].onclick=DOMhelp.safariClickFix;
			allLinks[i].preset=allLinks[i].innerHTML;
		}
	},
	openPopup:function(e){
		var t=DOMhelp.getTarget(e);
		if(t.nodeName.toLowerCase()!='a'){
			t=t.parentNode;	
		}
		if(!pop.popContainer){
			t.innerHTML=pop.displayPrefix+t.preset;
			pop.popContainer=document.createElement('div');
			DOMhelp.cssjs('add',pop.popContainer,pop.popupClass);
			DOMhelp.cssjs('add',t,pop.openPopupLinkClass);
			var newimg=document.createElement('img');
			newimg.setAttribute('src',t.getAttribute('href'));
			pop.popContainer.appendChild(newimg);
			document.body.appendChild(pop.popContainer);
			pop.positionPopup(t);
		} else {		
			pop.killPopup();
			t.innerHTML=t.preset;
			DOMhelp.cssjs('remove',t,pop.openPopupLinkClass);
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
		pop.popContainer.style.left=x+'px';
		pop.popContainer.style.top=y+h+'px';
	},
	killPopup:function(e){
		pop.popContainer.parentNode.removeChild(pop.popContainer);
		pop.popContainer=null;
		DOMhelp.cancelClick(e);
	}
}
DOMhelp.addEvent(window,'load',pop.init,false);			
