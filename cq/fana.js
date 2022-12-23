/**This fana.js 1.0,Maker:RP;**/
var y=1;
var n=0;
var position=null;
var html=null;
var Math={};
Math.click=0;
Math.ctm=0;
Math.md=0;
Math.mm=0;
Math.send=0;
if(html==true){
document.write("<!DOCTYPE html>");
document.write("<html>");
document.write("<head>");
document.write("<meta charset='UTF-8'>");
document.write("</head>");
document.write("<body>");
document.write("<div id='fana_pro'></div>");
document.write("</body>");
document.write("</html>");
}
var hc={};
hc.str=null;
hc.send=null;
function pyp(a,b){
a=b+a+b;
hc.str=a;
}
function pypq(a,b){
a=b+a;
hc.str=a;
}
function pyph(a,b){
    a=a+b;
    hc.str=a;
}
function gid(a,b){
    a=document.getElementById(b);
hc.str=a;
}
function copy(a){
document.write(document.getElementById(a).innerHTML);
}
function tag(a,b,c){
    if(c==1){
document.write("<"+a+">");
document.write(b);
document.write("</"+a+">");
    }else{
        document.write("<"+a+"/>");
    }
}
function hide(a,b){
if(b=="text"){
    document.getElementById(a).style.fontSize=0+"px";
    document.getElementById(a).style.border="noen";
}
if(b=="img"){
    document.getElementById(a).width="0px";
    document.getElementById(a).style.border="noen";
}
if(b=="div"){
    document.getElementById(a).style.width="0px";
}
}
function cursor(a){
document.write("<style>html{cursor:url("+a+"),auto;}</style>");
}
function pic(a){
document.write("<img src='"+a+"'>");
}

if(position=="all's"){
    document.write("<style>html{position:absolute;}</style>");
    }
    if(position=="self's"){
        document.write("<style>html{position:relative;}</style>");
}
function Math_md(){
    Math.md=Math.md+1;
}
function Math_click(){
    Math.click=Math.click+1;
}
function Math_mm(){
    Math.mm=Math.mm+1;
}

document.write("<div id='fana_pro'></div>");

function color(a,b){
document.write("<span style='color:"+b+";'>"+a+"</span>");
}
function text(a,b,c,d){
document.write("<span style='color:"+b+";font-size:"+c+";text-align:"+d+";'>"+a+"</span>");
}
function sendd(a,b){
    hc.send=a+":"+b;
    Math.send=Math.send+1;
}
function rotate(a,b){
    document.getElementById("fana_pro").innerHTML=document.getElementById("fana_pro").innerHTML+"<style>#"+a+"{transform:rotate("+b+"deg)}</style>";
}
function lighty(a,b){
    document.getElementById("fana_pro").innerHTML=document.getElementById("fana_pro").innerHTML+"<style>#"+a+"{opacity:"+b/100+"}</style>";
}
function styleClear(){
    document.getElementById("fana_pro").innerHTML="";
    setTimeout(styleClear,1000);
}
styleClear();
