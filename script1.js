let divtag=document.createElement("div");
divtag.innerHTML=`<input id="searchinput" type="text"> <button type="button" onclick="getcountries()">Search</button>
<div class="container"><span id="cap"></span><span class="capital"></span><p id="reg"></p><span class="region"></span><span id="popu"></span><p class="population"></p><span id="subre"></span><span class="subregion"></span><div class="title"><span class="name"></span></div></div>
<span class="theme">Themes</span><button class="light" onclick="lighttheme()"><span>🌞</span></button> <button class="dark" onclick="darktheme()"><span>🌛</span></button>`;
document.body.append(divtag);



async function getcountries(){
var a=await fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
var entirecountries= await a.json();
var search=document.querySelector("#searchinput").value;
for(i=0;i<entirecountries.length;i++){
    if(entirecountries[i].name==search){
    var n=document.querySelector(".name");
    n.innerText=entirecountries[i].name;
    var c=document.querySelector(".capital");
    c.innerText=entirecountries[i].capital;
   console.log(entirecountries[i])
   var r=document.querySelector(".region");
    r.innerText=entirecountries[i].region;
var po=document.querySelector(".population");
po.innerText=entirecountries[i].population;
    var sub=document.querySelector(".subregion");
    sub.innerText=entirecountries[i].subregion;
    var p=document.querySelector("#cap");
    cap.innerText="Capital"
    var q=document.querySelector("#reg");
    q.innerText="Region";
    var r=document.querySelector("#popu");
    r.innerText="Population";
    var s=document.querySelector("#subre");
    s.innerText="Sub Region";
   
    
    
}
    

}


}

function lighttheme(){
    document.body.style.backgroundColor="#EFAB9C";
    var cont=document.querySelector(".container");
    cont.style.border="3px solid black";
    var tit=document.querySelector(".title");
    tit.style.backgroundColor="black";
    tit.style.color="#EFAB9C";
    cont.style.color="black";
    var but=document.querySelector("button");
    but.style.backgroundColor="#EFAB9C";
    but.style.border="#ed795e"
    var lig=document.querySelector(".light");
    var dar=document.querySelector(".dark");
    lig.style.backgroundColor="#EFAB9C";
    dar.style.backgroundColor="#EFAB9C";
}
function darktheme(){
    document.body.style.backgroundColor="#140751";
    var cont=document.querySelector(".container");
    cont.style.border="3px solid white";
    var tit=document.querySelector(".title");
    tit.style.backgroundColor="white";
    tit.style.color="#140751";
    cont.style.color="white";
    var but=document.querySelector("button");
    but.style.backgroundColor="white"
    but.style.border="white"
    var lig=document.querySelector(".light");
    var dar=document.querySelector(".dark");
    lig.style.backgroundColor="white";
    dar.style.backgroundColor="white";
    lig.style.border="white";
    dar.style.border="white";
}

