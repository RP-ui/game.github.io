var zz=null;
var _=null;
var position=null;
var html=null;
var dl=null;
var move_id=null;
Math.click=0;
Math.ctm=0;
Math.md=0;
Math.mm=0;
Math.send=0;
a=65; b=66; c=67; d=68; e=69; f=70; g=71; h=72; i=73; j=74; k=75; l=76; m=77; n=78; o=79; p=80; q=81; r=82; s=83; t=84; u=85; v=86; w=87; x=88; y=89; z=90; N1=97; N2=98; N0=96; N3=99; N4=100; N5=101; N6=102; N7=103; N8=104; N9=105; star=106; Plus=107; Enter=108; unPlus=109; dot=110; slash=111; F1=112; F2=113; F3=114; F4=115; F5=116; F6=117; F7=118; F8=119; F9=120; F10=121; F11=122; F12=123;
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
function plus(a){
    document.write(a);
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
    document.getElementById(a).innerHTML="";
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
function pic(a,b){
document.write("<img src='"+a+"' id='"+b+"'>");
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
function color(a,b){
document.write("<span style='color:"+b+";'>"+a+"</span>");
}
function text(a,b,c,d){
document.write("<span style='color:"+b+";font-size:"+c+";text-align:"+d+";'>"+a+"</span>");
}
function send(a,b){
    hc.send=a+":"+b;
    Math.send=Math.send+1;
}
document.write("<div id='fana_style'></div>");
function rotate(a,b){
    document.getElementById("fana_style").innerHTML=document.getElementById("fana_style").innerHTML+"<style>#"+a+"{transform:rotate("+b+"deg)}</style>";
}
function styleClear(){
    document.getElementById("fana_style").innerHTML="";
}
document.write("<div id='save_html'></div>");
hc.save=null;
function save(a){
    if(zz=="save_html"){
        document.getElementById("save_html").innerHTML=a;
    }
    if(zz=="save_hc"){
        hc.save=a;
    }
}
function fana(a){
    if(zz=="fana_id"){
        _=document.getElementById(a);
    }
    if(zz=="fana_elm"){
        _=a;
    }

        hc.str=_;

}
function z__(a,b){
    var hh=a;
   if(zz=="z___+"){
   hh.width=hh.width+b;
   }
   if(zz=="z___-"){
    hh.width=hh.width-b;
    }
}
function x__(a,b){
    var hh=a;
    if(zz=="x___+"){
    hh.style.left = hh.offsetLeft+b+"px";
    }
    if(zz=="x___-"){
        hh.style.left = hh.offsetLeft-b+"px";
    }
}
document.write("<style>.say{width:10em;height:8em;background-color:white;border-radius:10px;border:solid;font-size:25px;position:relative;top:10em;left:10em;z-index:99;}.say-btn{border-radius:10px;background-color:lightgreen;border:none;font-size:30px;color:white;position:absolute;top:5em;left:3em;z-index:99;}.say-btn:hover{background-color:green;}</style>");
document.write("<div id='fana_say' style='position:fixed;z-index:99;'></div>");
function say_hide(){
    document.getElementById("fana_say").innerHTML="";
}
function say(a){
document.getElementById("fana_say").innerHTML=document.getElementById("fana_say").innerHTML+"<div class='say' onclick='say_hide();'>"+a+"<button class='say-btn' onclick='say_hide();'>确定</button></div>";
}
function style(a){
    document.write("<style>"+a+"<style>");
}
function bg(a){
    document.write("<style>html{background:url("+a+");}</style>");
}
function style_pxTOem(a){
    hc.math=a/16;
}
function style_emTOpx(a){
    hc.math=a*16;
}


var scaleValue = 1; 
function shang(){ 
    scaleValue+= 0.1;
    document.getElementById(move_id).style.transform = "scale("+scaleValue+")"; 
}

function zuo(a){
        move_id.style.left = move_id.offsetLeft+a+"px";
}
function you(a){
        move_id.style.left = move_id.offsetLeft-a+"px";
}
