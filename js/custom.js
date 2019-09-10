var gs1=document.getElementById("gs1");
var gs2=document.getElementById("gs2");
var gs3=document.getElementById("gs3");
var gs4=document.getElementById("gs4");
var gs5=document.getElementById("gs5");
var gs6=document.getElementById("gs6");
var gs=document.getElementsByClassName("gs");


// each bin equal to 22050/16384 = 1.346 Hz

var freq_gs1 =['gs1',328.5,331,234,254,'E1'];   //329.6
var freq_gs2 =['gs2',245,247.5,173,193,'A2'];   //246.9
var freq_gs3 =['gs3',195.5,197.5,135,155,'D3']; //196
var freq_gs4 =['gs4',145.5,148,99,119,'G4'];    //146.8
var freq_gs5 =['gs5',109.5,111,71,91,'B5'];     //110
var freq_gs6 =['gs6',81.41,83.41,51,71,'E6'];   //82.41


gs1.addEventListener("click",selectstring);
gs2.addEventListener("click",selectstring);
gs3.addEventListener("click",selectstring);
gs4.addEventListener("click",selectstring);
gs5.addEventListener("click",selectstring);
gs6.addEventListener("click",selectstring);


gs1.addEventListener("click", check);
gs2.addEventListener("click", check);
gs3.addEventListener("click", check);
gs4.addEventListener("click", check);
gs5.addEventListener("click", check);
gs6.addEventListener("click", check);
