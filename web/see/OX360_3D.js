function OX360(a,b,c){
    var times=0;
    var opacity=-0.001;
    document.write("<div id=\""+c+"\" style=\"z-index:100;position:relative;\">"+"</div>");
for(var i=0;i<400;i++){
    times=times+1;
    if(times>a){
        opacity=opacity-b;
    }else{
    opacity=opacity+b;
    }
    document.getElementById(c).innerHTML=document.getElementById(c).innerHTML+("<div id='_"+times+"' style='background:white;width:"+Math.floor(screen.width/360)+"px"+";height:"+Math.floor(screen.height)+"px"+";float:left;z-index:99;'></div>");
    document.getElementById("_"+times).style.opacity=opacity;
}
}

function sprite(a,b,c,d,e){
    document.getElementById(String(a).replace(/id:/g ,'')).style.position="absolute";
    document.getElementById(String(a).replace(/id:/g ,'')).width=Number(String(b).replace(/size:/g ,''));
    document.getElementById(String(a).replace(/id:/g ,'')).style.left=String(c).replace(/x:/g ,'');
    document.getElementById(String(a).replace(/id:/g ,'')).style.top=String(d).replace(/y:/g ,'');
    
}
function Zpp(a,b){
    document.getElementById(String(a).replace(/id:/g ,'')).width=document.getElementById(String(a).replace(/id:/g ,'')).width+document.getElementById(String(a).replace(/id:/g ,'')).width/Number(String(b).replace(/size:/g ,''));
    document.getElementById(String(a).replace(/id:/g ,'')).style.top=document.getElementById(String(a).replace(/id:/g ,'')).offsetTop-document.getElementById(String(a).replace(/id:/g ,'')).width/70+"px";
    document.getElementById(String(a).replace(/id:/g ,'')).style.left=document.getElementById(String(a).replace(/id:/g ,'')).offsetLeft-document.getElementById(String(a).replace(/id:/g ,'')).width/200+"px";

}
function Ypp(a,b){
  document.getElementById(a).style.top=document.getElementById(a).offsetTop+b+"px";
}
