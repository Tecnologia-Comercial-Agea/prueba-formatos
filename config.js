/*Declarar bien la ruta del ADCASE colocar la url de clarin delante https://www.clarin.com/commons/adcase.config.js*/

var adcase=adcase||{kv:{}};var ads=ads||{};try{if(document.body.dataset.adskv){adcase.kv=JSON.parse(document.body.dataset.adskv)}}catch(e){console.log(e)}document.getElementById("flotante1")&&(document.getElementById("flotante1").style.display="none");document.getElementById("flotante1")&&(document.getElementById("flotante1").style.zIndex="2000");document.getElementById("horizontal1")&&(document.getElementById("horizontal1").style.display="none")&&(document.getElementById("horizontal1").style.height="0px");adcase.lib="https://www.clarin.com/commons/adcase.config.js?v1.13";adcase.network=242767168;adcase.styles={footerFixed:{}};adcase.startDisplay="";adcase.startHeight="0px";adcase.slotRenderedCallback={};adcase.slots=[{id:"flotante1#tab",adtype:"flotanteTab"},{id:"flotante1#tab2",adtype:"flotanteTab2"}];adcase.adTypesMap=[{deviceType:"desktop",minWidth:0,type:"caja",sizes:[300,250]},{deviceType:"desktop",minWidth:0,type:"cajagrande",sizes:[[300,250],[300,600]]},{deviceType:"desktop",minWidth:0,type:"auspicio",sizes:[300,50]},{deviceType:"desktop",minWidth:0,type:"horizontal1",sizes:[[1,1],[970,250],[950,200],[728,90],[950,300],[970,300],[950,90],[950,250],[970,200]],adFormat:"push"},{deviceType:"desktop",minWidth:0,type:"horizontal2",sizes:[[1,1],[970,250],[950,200],[728,90],[950,300],[970,300],[950,90],[950,250],[970,200]],adFormat:"push"},{deviceType:"desktop",minWidth:0,type:"horizontal3",sizes:[[1,1],[970,250],[950,200],[728,90],[950,300],[970,300],[950,90],[950,250],[970,200]],adFormat:"push"},{deviceType:"desktop",minWidth:0,type:"horizontal4",sizes:[[1,1],[970,250],[950,200],[728,90],[950,300],[970,300],[950,90],[950,250],[970,200]],adFormat:"push"},{deviceType:"desktop",minWidth:0,type:"horizontal5",sizes:[[1,1],[970,250],[950,200],[728,90],[950,300],[970,300],[950,90],[950,250],[970,200]],adFormat:"push"},{deviceType:"desktop",minWidth:0,type:"horizontal6",sizes:[[728,90],[950,90]]},{deviceType:"desktop",minWidth:0,type:"flotante1",sizes:[[1,1],[800,600],[1200,600]],adFormat:"interstitial"},{deviceType:"desktop",minWidth:0,type:"flotante2",sizes:[[1,1],[900,250],[860,250],[728,90],[738,90],[720,80],[1e3,300],[900,600],[900,80]],adFormat:"footerFixed"},{deviceType:"desktop",minWidth:1280,type:"flotante3",sizes:[[1,1],[250,600]]},{deviceType:"desktop",minWidth:1680,type:"flotante3",sizes:[[1,1],[250,800]]},{deviceType:"desktop",minWidth:1680,type:"flotante4",sizes:[[1,1],[250,800]]},{deviceType:"desktop",minWidth:0,type:"flotante3-1",sizes:[[1,1],[160,600],[120,600]]},{deviceType:"desktop",minWidth:0,type:"inread",sizes:[[1,1],[600,338],[600,450],[600,400],[300,250]]},{deviceType:"desktop",minWidth:0,type:"inread2",sizes:[[1,1],[600,338],[600,450],[600,400],[300,250]]},{deviceType:"desktop",minWidth:0,type:"inread3",sizes:[[1,1],[600,338],[600,450],[600,400],[300,250]]},{deviceType:"desktop",minWidth:1366,type:"flotanteTab",sizes:[1200,600],adFormat:"interstitial"},{deviceType:"desktop",minWidth:1366,type:"flotanteTab2",sizes:[1200,600],adFormat:"interstitial"},{deviceType:"mobile",minWidth:0,type:"caja",sizes:[[300,250],[300,600],"fluid"]},{deviceType:"mobile",minWidth:0,type:"cajagrande",sizes:[[300,250],[300,600],"fluid"]},{deviceType:"mobile",minWidth:0,type:"auspicio",sizes:[[300,50],[300,250],[300,600],"fluid"]},{deviceType:"mobile",minWidth:0,type:"horizontal1",sizes:[[320,50],[320,90],[320,100]],adFormat:"doubletopsticky"},{deviceType:"mobile",minWidth:0,type:"horizontal2",sizes:[[300,50],[320,50],[300,250],[300,600],"fluid"]},{deviceType:"mobile",minWidth:0,type:"horizontal3",sizes:[[300,50],[320,50],[300,250],[300,600],"fluid"]},{deviceType:"mobile",minWidth:0,type:"horizontal4",sizes:[[300,50],[320,50],[300,250],[300,600],"fluid"]},{deviceType:"mobile",minWidth:0,type:"horizontal5",sizes:[[300,50],[320,50],[300,250],[300,600],"fluid"]},{deviceType:"mobile",minWidth:0,type:"horizontal6",sizes:[320,50]},{deviceType:"mobile",minWidth:0,type:"flotante1",sizes:[[1,1],[320,480],[320,416]],adFormat:"interstitial"},{deviceType:"mobile",minWidth:0,type:"flotanteTab2",sizes:[320,475],adFormat:"interstitial"},{deviceType:"mobile",minWidth:480,type:"flotante1",sizes:[[1,1],[480,320],[416,320]],adFormat:"interstitial"},{deviceType:"mobile",minWidth:0,type:"flotante2",sizes:[[1,1],[320,51]],adFormat:"footerFixed"},{deviceType:"mobile",minWidth:0,type:"flotanteTab",sizes:[320,475],adFormat:"interstitial"},{deviceType:"mobile",minWidth:0,type:"inread",sizes:[[1,1],[315,225],[320,180],[320,240],[300,250],[300,600],"fluid"]},{deviceType:"mobile",minWidth:0,type:"inread2",sizes:[[1,1],[315,225],[320,180],[320,240],[300,250],[300,600],"fluid"]},{deviceType:"mobile",minWidth:0,type:"inread3",sizes:[[1,1],[315,225],[320,180],[320,240],[300,250],[300,600],"fluid"]}];adcase.router=function(url){return"/"+document.body.dataset.adspath+"/"};adcase.styles.push={iconsStyle:"width:82px;height:23px;position:absolute;left:866px;top:3px;border:0;font-family:Arial;font-size:11px;padding:0px;background-color:transparent;text-align:center;",openIconHTML:"<img src='https://contenidos2.clarin.com/sincro/diario/cmdvid/btn/abrir.png'>",closeIconHTML:"<img src='https://contenidos2.clarin.com/sincro/diario/cmdvid/btn/cerrar.png'>",expandedHeight:300,collapsedHeight:90};adcase.styles.interstitial=adcase.styles.interstitial||{img:"<img src='https://contenidos2.clarin.com/sincro/diario/cmdvid/btn/cerrar3.png' height=32 width=32 border=0>",top:-25,right:-25};adcase.allSlotsRenderedCallback=function(event,divId){adcase.onResize();if(!event.isEmpty){adcase.bluekai(event,"imp")}};adcase.allSlotsClickCallback=function(event,divId){if(!event.isEmpty){adcase.bluekai(event,"clk")}};adcase.bluekai=function(event,event_type){var advertiserId=event.advertiserId;var campaignId=event.campaignId;var lineItemId=event.lineItemId;var creativeId=event.creativeId;var slotId=adcase.id[event.slot.getSlotElementId()].parentSlot.id||"";var format="";var size=event.size[0]+"x"+event.size[1];var i=document.createElement("img");i.src="https://analytics.bluekai.com/site/65980?"+"phint=event%3D"+event_type+"&phint=advertiserId%3D"+advertiserId+"&phint=campaignId%3D"+campaignId+"&phint=lineItemId%3D"+lineItemId+"&phint=creativeId%3D"+creativeId+"&phint=slotId%3D"+slotId+"&phint=format%3D"+format+"&phint=size%3D"+size;i.width=1;i.height=1;i.style.display="none";document.body.appendChild(i)};adcase.ee=null;adcase.slotRenderedCallback["flotante1#tab"]=function(event){if(/Mobi/.test(navigator.userAgent)){adcase.prepareTab2ITT(true)}};adcase.slotRenderedCallback["flotante1#tab2"]=function(event){if(/Mobi/.test(navigator.userAgent)){adcase.prepareTab2ITT(true)}};adcase.slotRenderedCallback.horizontal6=function(event){if(event.isEmpty){removeAds("100")}};function removeAds(seg){setTimeout(function(){$("#horizontal6_ad").slideUp("slow",function(){$(this).hide();$(".subheader-new, .note-header .head-latests").css("margin-top","50px");$(".galerry-central").css("margin-top","0px");$(".board-75_aniversario #horizontal1,.board-home #horizontal1").css("margin-top","initial");$(".board-home header .header-content .head-latests, .board-75_aniversario header .header-content .head-latests").css("top","initial")})},seg)}adcase.slotRenderedCallback.flotante3=function(event){var iconSizeBig=true;if(event.isEmpty&&window.innerWidth<=1425){iconSizeBig=false}adcase.prepareTab2ITT(iconSizeBig);adcase.flotante3full=!event.isEmpty;if(window.innerWidth>=1680&&event.isEmpty){var d=document.createElement("div");d.classList.add("ad-slot");d.dataset.adtype="flotante3-1";d.id="flotante3#derecha";d.setAttribute("style","left:calc(50% + 640px); top:100px; position:fixed; width:160px");document.body.appendChild(d);var d=document.createElement("div");d.classList.add("ad-slot");d.dataset.adtype="flotante3-1";d.id="flotante3#izquierda";d.setAttribute("style","left:calc(50% - 800px); top:100px; position:fixed; width:160px");document.body.appendChild(d);adcase.pending()}adcase.onResize();window.setTimeout(function(){adcase.onResize()},500);window.setTimeout(function(){adcase.onResize()},1e3)};adcase.slotRenderedCallback["flotante3#derecha"]=function(event){document.getElementById("flotante3").style.display="none"};adcase.slotRenderedCallback["flotante3#izquierda"]=function(event){document.getElementById("flotante3").style.display="none"};document.getElementById("flotante2")&&(document.getElementById("flotante2").style.height="0px");adcase.styles.footerFixed.openImg="";adcase.slotRenderedCallback.flotante2=function(event){if(event.size&&event.size[1]){document.getElementById("flotante2").style.height=event.size[1];adcase.onResize();window.setTimeout(function(){adcase.onResize()},500);window.setTimeout(function(){adcase.onResize()},1e3)}};adcase.onResize=function(){if(adcase.flotante3full&&window.innerWidth<1520){document.body.classList.add("fgpdo-triple-impact");document.getElementById("flotante2")&&(document.getElementById("flotante2_ad").style.marginRight="250px");document.getElementById("adcase_footer_text_flotante2_ad")&&(document.getElementById("adcase_footer_text_flotante2_ad").style.marginRight="-325px");document.body.style.marginRight="250px";document.getElementById("flotante3").setAttribute("style","left:calc(50% + 375px); top:50px; position:fixed; width:250px; z-index:1390");document.getElementById("horizontal6")&&(document.getElementById("horizontal6_ad").style.marginRight="250px")}else if(adcase.flotante3full&&window.innerWidth>=1521){document.getElementById("flotante2")&&(document.getElementById("flotante2_ad").style.marginRight="250px");document.getElementById("adcase_footer_text_flotante2_ad")&&(document.getElementById("adcase_footer_text_flotante2_ad").style.marginRight="-325px");document.body.style.marginRight="250px";document.getElementById("flotante3").setAttribute("style","left:calc(50% + 530px); top:100px; position:fixed; width:250px; z-index:1030")}};adcase.ready=function(params){params=params||{};if(!adcase.loaded){adcase.loaded=true;var s=document.createElement("script");s.async=true;s.src=adcase.lib;document.head.appendChild(s)}adcase.cmd=adcase.cmd||[];adcase.cmd.push({cmd:"run",path:adcase.router(),pending:params.pending,manualSlotList:params.slots||false});adcase.run&&adcase.run()};adcase.pending=function(){adcase.ready({pending:true})};ads.pending=adcase.pending;document.getElementById("flotante1")&&(document.getElementById("flotante1").style.display="");adcase.addEvent=function(object,type,callback){if(object==null||typeof object=="undefined")return;if(object.addEventListener){object.addEventListener(type,callback,false)}else if(object.attachEvent){object.attachEvent("on"+type,callback)}else{object["on"+type]=callback}};adcase.onResizeTimeout=null;adcase.addEvent(window,"resize",function(event){window.clearTimeout(adcase.onResizeTimeout);adcase.onResizeTimeout=window.setTimeout(adcase.onResize,100)});adcase.prepareTab2ITT=function(grande){var css=document.createElement("style");css.innerHTML=".tabsbanner a { text-decoration: underline; -webkit-transition: all 0.3s ease-out 0s; -moz-transition: all 0.3s ease-out 0s; -ms-transition: all 0.3s ease-out 0s; -o-transition: all 0.3s ease-out 0s; transition: all 0.3s ease-out 0s; }.tabsbanner img { border: 0; }.tabsbanner * { padding: 0px; margin: 0px; }.tabsbanner * { -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; }.tabsbanner body { text-align: left; color: #1c1c1c; background-color: #efefef; font-family: Georgia, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height:24px; text-rendering: optimizeLegibility !important; -webkit-font-smoothing: antialiased !important; -moz-osx-font-smoothing: grayscale !important; -webkit-text-size-adjust: none; }.tabsbanner p{margin-left:50px; margin-right: 50px; margin-bottom: 30px;}.texto{  max-width: 1256px;  margin: 0 auto;}.texto{  max-width: 1256px;  margin: 0 auto;}.tabsbanner{  width: 90px;  position: fixed;  left: 0;  z-index: 1390;  display: table;  -webkit-transform: translate(-1px, -35%);    -ms-transform: translate(-1px, -35%);      transform: translate(-1px, -35%);}.tabsbanner1{  top: 60%;}.tabsbanner2{  top: calc(60% + 90px);}.tabsbanner3{  top: calc(60% + 180px);}.tabsbanner ul li{  -webkit-border-top-right-radius: 10px;  -webkit-border-bottom-right-radius: 10px;     -moz-border-radius-topright: 10px;     -moz-border-radius-bottomright: 10px;      border-top-right-radius: 10px;      border-bottom-right-radius: 10px;  margin-bottom: 10px;  border: 2px solid #666;  background-color: white;  padding:6px;  line-height: 0;  list-style: none;  cursor: pointer;  overflow: hidden;  -webkit-transition: all 0.3s ease-out 0s;     -moz-transition: all 0.3s ease-out 0s;      -ms-transition: all 0.3s ease-out 0s;       -o-transition: all 0.3s ease-out 0s;          transition: all 0.3s ease-out 0s;  "+(grande?"width:80px":"width:50px")+"}.tabsbanner ul li:hover{  padding:0px;}.tabsbanner ul li img{  width: 100%;  height: auto;  border: 0;  line-height: 0;}.tabsbanner ul li .imagenchica{  display: none;  visibility: hidden;}.fancybox-button--zoom{  display: none !important;}@media screen and (max-width: 1000px){  .tabsbanner{    width: auto;    top: initial;    bottom: -1px;    -webkit-transform: translate(-50%, 0px);        -ms-transform: translate(-50%, 0px);        transform: translate(-50%, 0px);  }  .tabsbanner ul li{    float: left;    margin-right: 10px;    margin-bottom: 0px;    width: 80px;    -webkit-border-top-left-radius: 10px;       -moz-border-radius-topleft: 10px;        border-top-left-radius: 10px;    -webkit-border-bottom-right-radius: 0px;       -moz-border-radius-bottomright: 0px;        border-bottom-right-radius: 0px;  }  .tabsbanner ul li .imagengrande{    display: none;    visibility: hidden;  }  .tabsbanner ul li .imagenchica{    display: block;    visibility: visible;  }}@media screen and (max-width: 768px){  .tabsbanner ul li{    width: 70px;  }}@media screen and (max-width: 425px){  .tabsbanner ul li{    width: 60px;  }}@media screen and (max-width: 1000px){  .tabsbanner1{    left: 15%;  }  .tabsbanner2{    left: calc(15% + 60px);  }  .tabsbanner3{    left: calc(15% + 120px);  }}.fancybox-button--zoom{  display: none !important;}";document.head.appendChild(css)};adcase.ready();