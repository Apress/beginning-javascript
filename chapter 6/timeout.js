warn={
	init:function(){
		if(!document.getElementById || !document.createTextNode){return;}
		warn.w=document.getElementById('warning');
		if(!warn.w){return;}
		DOMhelp.cssjs('add',warn.w,'warning');
		var temp=DOMhelp.createLink('#','remove warning');
		DOMhelp.addEvent(temp,'click',warn.removeWarning,false);
    	temp.onclick=DOMhelp.safariClickFix;
		warn.w.appendChild(temp);
		warn.timer=window.setTimeout('warn.removeWarning()',5000)
	},
	removeWarning:function(e){
		warn.w.parentNode.removeChild(warn.w);
		window.clearTimeout(warn.timer);
		DOMhelp.cancelClick(e);
	}
}	
DOMhelp.addEvent(window,'load',warn.init,false)
