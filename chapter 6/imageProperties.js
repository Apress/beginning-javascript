function getImageProperties(img){
	var im=document.getElementById(img);
	if(!im){return false;}
	var f=document.forms[0];
	for(var i=0;i<f.elements.length;i++){
		if(f.elements[i].type!='text'){continue;}
		f.elements[i].value=im.getAttribute(f.elements[i].name.replace('img',''));
	}
	document.getElementById('imgcomplete').innerHTML=im.complete;
}
function setImageProperties(img){
	var im=document.getElementById(img);
	if(!im){return false;}
	var f=document.forms[0];
	for(var i=0;i<f.elements.length;i++){
		if(f.elements[i].type!='text'){continue;}
		im.setAttribute(f.elements[i].name.replace('img',''),f.elements[i].value);
	}
}
function setImage(img,url){
	var im=document.getElementById(img);
	if(!im){return false;}
	im.src=url;		
	document.getElementById('imgsrc').value=url;
}
