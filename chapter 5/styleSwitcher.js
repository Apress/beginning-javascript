switcher={
	menuID:'styleswitcher',
	chooseLabel:'Choose Style:',
	init:function(){
		var tempLI,tempA,styleTitle;
		var stylemenu=document.createElement('ul');
		tempLI=document.createElement('li');
		tempLI.appendChild(document.createTextNode(switcher.chooseLabel));
		stylemenu.appendChild(tempLI);
		stylemenu.id=switcher.menuID;
		var links=document.getElementsByTagName('link');
		for(var i=0;i<links.length;i++){
			if(links[i].getAttribute('rel')!='stylesheet' && 
			links[i].getAttribute('rel')!='alternate stylesheet'){
				continue;
			}
			tempLI=document.createElement('li');
			tempA=document.createElement('a');
			styleTitle=links[i].getAttribute('title');
			tempA.appendChild(document.createTextNode(styleTitle));
			tempA.setAttribute('href','#');
			tempA.onclick=function(){
				switcher.setSwitch(this);
			}
			tempLI.appendChild(tempA);
			stylemenu.appendChild(tempLI);
		}		
		document.body.appendChild(stylemenu);
	},
	setSwitch:function(o){
		var links=document.getElementsByTagName('link');
		for(var i=0;i<links.length;i++){
			var title=o.firstChild.nodeValue;
			if(links[i].getAttribute('title')!=title){
				links[i].disabled=true;
			} else {
				links[i].setAttribute('rel','stylesheet');
				links[i].disabled=false;
			}
		}			
		return false;
	}
}
DOMhelp.addEvent(window,'load',switcher.init,false);
