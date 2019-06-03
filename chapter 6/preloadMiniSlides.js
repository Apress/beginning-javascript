minislides={
	// CSS classes
	triggerClass:'minislides',
	largeImgClass:'photo',
	// text added to the title attribute of the big picture
	alternativeText:' large view',
	preloadLinkText:'preload images',
	loaderMessage:'<img src="indicator_snake.gif" alt="loading">',

	init:function(){
		if(!document.getElementById || !document.createTextNode){return;}
		var lists=document.getElementsByTagName('ul');
		for(var i=0;i<lists.length;i++){
			if(!DOMhelp.cssjs('check',lists[i],minislides.triggerClass)){continue;}
			minislides.initShow(lists[i]);
		}
	},	
	initShow:function(o){
		var links=o.getElementsByTagName('a');
		for(i=0;i<links.length;i++){
			DOMhelp.addEvent(links[i],'click',minislides.showPic,false);
			links[i].onclick=DOMhelp.SafariClickFix;
		}
		var newli=document.createElement('li');
		var preloadLink=DOMhelp.createLink('#',minislides.preloadLinkText);
		DOMhelp.addEvent(preloadLink,'click',minislides.preloadPics,false);
		preloadLink.onclick=DOMhelp.SafariClickFix;
		newli.appendChild(preloadLink);
		DOMhelp.cssjs('add',newli,minislides.largeImgClass);
		o.appendChild(newli);
	},
	preloadPics:function(e){
		var pics=new Array();
		var t=DOMhelp.getTarget(e);
		if(t.nodeName.toLowerCase()!='a'){t=t.parentNode;}
		t.innerHTML=minislides.loaderMessage;
		var parentList=t.parentNode.parentNode;	
		var links=parentList.getElementsByTagName('a');
		for(var i=0;i<links.length-1;i++){
			pics[i]=new Image();
			pics[i].src=links[i].getAttribute('href');
		}
		minislides.addPic(t);
	},
	addPic:function(o){
		var parentList=o.parentNode.parentNode;	
		var newimg=document.createElement('img');
		o.parentNode.appendChild(newimg);
		var firstPic=parentList.getElementsByTagName('img')[0];
		var alt=firstPic.getAttribute('alt');
		newimg.setAttribute('alt',alt);
		newimg.setAttribute('title',alt+minislides.alternativeText);
		parentList.photo=newimg;
		newimg.setAttribute('src',parentList.getElementsByTagName('a')[0].href);
		o.parentNode.removeChild(o);
	},
	showPic:function(e){
		var t=DOMhelp.getTarget(e);
		var parentList=t.parentNode.parentNode.parentNode;
		if(!parentList.photo){
			var links=parentList.getElementsByTagName('a');
			minislides.addPic(links[links.length-1]);
		}
		var oldimg=parentList.photo;
		oldimg.setAttribute('alt',t.getAttribute('alt'));
		oldimg.setAttribute('title',t.getAttribute('alt')+minislides.alternativeText);
		oldimg.setAttribute('src',t.parentNode.getAttribute('href'));
		DOMhelp.cancelClick(e);
	}	
}	
DOMhelp.addEvent(window,'load',minislides.init,false);
