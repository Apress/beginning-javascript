/*
	autoSlides
	Slideshow example of Chapter 6 of
	"Beginning JavaScript with DOM Scripting and AJAX" 
	by Christian Heilmann
	(c) Christian Heilmann and Apress
*/
autoSlides={

	// CSS classes
	slideClass:'slides',
	dynamicSlideClass:'dynslides',
	showClass:'show',
	slideCounterClass:'slidecounter',

	// labels 
	// play and stop links, you can use any HTML here
	playLabel:'<img src="control_play_blue.png" title="click to play slide show" alt="play" />',
	stopLabel:'<img src="control_stop_blue.png" title="click to stop slide show"alt="stop" />',
	// Counter text, # will be replaced by the current image count
	// and % by the number of all pictures
	counterLabel:'# of %', 

	// animation delay in milliseconds
	delay:1000,
	
	init:function(){
		if(!document.getElementById || !document.createTextNode){return;}
		var uls=document.getElementsByTagName('ul');
		autoSlides.slideLists=new Array();
		for(var i=0;i<uls.length;i++){
			if(!DOMhelp.cssjs('check',uls[i],autoSlides.slideClass)){continue;}
			DOMhelp.cssjs('swap',uls[i],autoSlides.slideClass,autoSlides.dynamicSlideClass);
			uls[i].currentSlide=0;	
			uls[i].showIndex=i;
			uls[i].photoCount=uls[i].getElementsByTagName('li').length;
			autoSlides.initSlideShow(uls[i]);
			autoSlides.slideLists.push(uls[i]);
		}
	},
	initSlideShow:function(o){
		var p,temp;	
		p=document.createElement('p');
		DOMhelp.cssjs('add',p,autoSlides.slideCounterClass);
		o.parentNode.insertBefore(p,o.nextSibling);
		o.play=DOMhelp.createLink('#',' ');
		o.play.innerHTML=autoSlides.playLabel;
		DOMhelp.addEvent(o.play,'click',autoSlides.playSlide,false);
		o.count=document.createElement('span');
		temp=autoSlides.counterLabel.replace(/#/,o.currentSlide+1);
		temp=temp.replace(/%/,o.getElementsByTagName('li').length);
		o.count.appendChild(document.createTextNode(temp));
		p.appendChild(o.count);
		p.appendChild(o.play);
		temp=o.getElementsByTagName('li')[o.currentSlide];
		DOMhelp.cssjs('add',temp,autoSlides.showClass);
		o.play.onclick=DOMhelp.safariClickFix;
	},
	playSlide:function(e){
		var t=DOMhelp.getTarget(e);
		while(t.nodeName.toLowerCase()!='a' 
			  && t.nodeName.toLowerCase()!='body'){
			t=t.parentNode;
		} 
		var parentList=DOMhelp.closestSibling(t.parentNode,-1);
		if(!parentList.loop){
			var loopCall="autoSlides.showSlide('"+parentList.showIndex+"')";
			parentList.loop = window.setInterval(loopCall, autoSlides.delay);
			t.innerHTML=autoSlides.stopLabel;
		} else {
			window.clearInterval(parentList.loop);
			parentList.loop=null;
			t.innerHTML=autoSlides.playLabel;
		}	
		DOMhelp.cancelClick(e);
	},
	showSlide:function(showIndex){
	    var currentShow=autoSlides.slideLists[showIndex];
	    var count=currentShow.currentSlide;
	    var photoCount= currentShow.getElementsByTagName('li').length;
	    var photo= currentShow.getElementsByTagName('li')[count];
	    DOMhelp.cssjs('remove',photo,autoSlides.showClass);
	    count++
	    if(count==photoCount){count=0};
	    photo= currentShow.getElementsByTagName('li')[count];
	    DOMhelp.cssjs('add',photo,autoSlides.showClass);
	    var counterText=currentShow.count.firstChild
	    counterText.nodeValue=counterText.nodeValue.replace(/\d/,count+1);
	    currentShow.currentSlide=count;
	}
}
DOMhelp.addEvent(window, 'load', autoSlides.init, false);
