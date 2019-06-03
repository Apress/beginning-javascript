function showProperties(o){
  var p,message='';
  var props=[
    'closed','defaultStatus','innerHeight',
    'innerWidth','outerHeight','outerWidth',
    'pageXOffset','pageYOffset','status',
    'name'
  ];
  for (var i=0;i<props.length;i++){
    p=o==null?eval('window.'+props[i]):eval('window.'+o+'.'+props[i]);
    if(p){
      message+=props[i]+':'+p+'\n';
    }
  }
  alert(message);
}
