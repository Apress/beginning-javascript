minislides={
	// CSS classes
	triggerClass:'minislides',
	largeImgClass:'photo',
	// text added to the title attribute of the big picture
	alternativeText:' large view',

	init:function(){
		if(!document.getElementById || !document.createTextNode){return;}
		var lists=document.getElementsByTagName('ul');
		for(var i=0;i<lists.length;i++){
			if(!DOMhelp.cssjs('check',lists[i],minislides.triggerClass)){continue;}
			minislides.initShow(lists[i]);
		}
	},	
	initShow:function(o){
		var newli=document.createElement('li');
		var newimg=document.createElement('img');
		newli.appendChild(newimg);
		DOMhelp.cssjs('add',newli,minislides.largeImgClass);
		o.appendChild(newli);
		var firstPic=o.getElementsByTagName('img')[0];
		var alt=firstPic.getAttribute('alt');
		newimg.setAttribute('alt',alt);
		newimg.setAttribute('title',alt+minislides.alternativeText);
		var links=o.getElementsByTagName('a');
		for(i=0;i<links.length;i++){
			DOMhelp.addEvent(links[i],'click',minislides.showPic,false);
			
		}
		o.photo=newimg;
		newimg.setAttribute('src',o.getElementsByTagName('a')[0].href);
	},
	showPic:function(e){
		var t=DOMhelp.getTarget(e);
		var oldimg=t.parentNode.parentNode.parentNode.photo;
		oldimg.setAttribute('alt',t.getAttribute('alt'));
		oldimg.setAttribute('title',t.getAttribute('alt')+minislides.alternativeText);
		oldimg.setAttribute('src',t.parentNode.getAttribute('href'));
		DOMhelp.cancelClick(e);
	}	
}	
DOMhelp.addEvent(window,'load',minislides.init,false);
