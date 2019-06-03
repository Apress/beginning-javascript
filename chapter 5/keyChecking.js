voucherCheck={
  errorMessage:'A voucher can only contain numbers.',
  error:false,
  errorClass:'error',
  init:function(){
    if (!document.getElementById || !document.createTextNode) { return; }
    var voucher=document.getElementById('Voucher');
    if(!voucher){return;}
    voucherCheck.v=voucher;
    DOMhelp.addEvent(voucher, 'keyup', voucherCheck.checkKey, false);
  },
  checkKey:function(e){
    if(window.event){
      var key = window.event.keyCode;
    } else if(e){
      var key=e.keyCode;
    }
    var v=document.getElementById('Voucher');
    if(voucherCheck.error){
      v.parentNode.removeChild(v.parentNode.lastChild);
      voucherCheck.error=false;
	  DOMhelp.closestSibling(v,1).disabled='';
    }
    if(key<48 || key>57){  
      v.value=v.value.substring(0,v.value.length-1);
      voucherCheck.error=document.createElement('span');
	  DOMhelp.cssjs('add', voucherCheck.error, voucherCheck.errorClass);
      voucherCheck.error.appendChild(document.createTextNode(voucherCheck.errorMessage));
      v.parentNode.appendChild(voucherCheck.error);   
	  DOMhelp.closestSibling(v,1).disabled='disabled';
    }
  }
}
DOMhelp.addEvent(window, 'load', voucherCheck.init, false);
