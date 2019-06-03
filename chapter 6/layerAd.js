ad={
	adID:'layerad',
	adDynamicClass:'dyn',
	closeLinkClass:'adclose',
	closeLinkLabel:'close',
	init:function(){
		if(!document.getElementById || !document.createTextNode){return;}
		ad.offer=document.getElementById(ad.adID);
		if(!ad.offer){return;}
		DOMhelp.cssjs('add',ad.offer,ad.adDynamicClass);
		var closeLink=DOMhelp.createLink('#',ad.closeLinkLabel);
		DOMhelp.cssjs('add',closeLink,ad.closeLinkClass);
		DOMhelp.addEvent(closeLink,'click',ad.killAd,false);
		closeLink.onclick=DOMhelp.safariClickFix;
		ad.offer.insertBefore(closeLink,ad.offer.firstChild)
	},
	killAd:function(e){
		ad.offer.parentNode.removeChild(ad.offer);
		DOMhelp.cancelClick(e);	
	}	
}
DOMhelp.addEvent(window,'load',ad.init,false);