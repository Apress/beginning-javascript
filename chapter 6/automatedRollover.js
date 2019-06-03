ro={
	rollClass:'roll',
	overSrcAddOn:'_on',
	preLoads:[],
	init:function(){
		var oversrc;
		var imgs=document.images;
		for(var i=0;i<imgs.length;i++){
			if(!DOMhelp.cssjs('check',imgs[i],ro.rollClass)){continue;}
			oversrc=imgs[i].src.toString().replace('.',ro.overSrcAddOn+'.');
			ro.preLoads[i] = new Image();
			ro.preLoads[i].src = oversrc;
			DOMhelp.addEvent(imgs[i],'mouseover',ro.roll,false);
			DOMhelp.addEvent(imgs[i],'mouseout',ro.roll,false);
		}
	},
	roll:function(e){
		var t=DOMhelp.getTarget(e);
		var s=t.src; 
		if(e.type=='mouseover'){
			t.src=s.replace('.',ro.overSrcAddOn+'.');
		} 
		if(e.type=='mouseout'){
			t.src=s.replace(ro.overSrcAddOn+'.','.');
		}
	}
}		
DOMhelp.addEvent(window,'load',ro.init,false);
