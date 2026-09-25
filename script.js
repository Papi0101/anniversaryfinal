let current=0;
const pages=document.querySelectorAll(".page");

function next(){
 if(current < pages.length-1){
  pages[current].classList.remove("active");
  current++;
  pages[current].classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
 }
}

function check(){
 let a=document.getElementById("answer").value.toLowerCase();
 document.getElementById("result").innerHTML=
 a.includes("релакс")||a.includes("relax")
 ?"✅ Съдът приема доказателството."
 :"❌ Съдът има съмнения.";
}

function clock(){
 let start=new Date("2019-09-26T00:00:00");
 let s=Math.floor((Date.now()-start)/1000);
 let y=Math.floor(s/31557600);
 s%=31557600;
 let d=Math.floor(s/86400);
 s%=86400;
 let h=Math.floor(s/3600);
 s%=3600;
 let m=Math.floor(s/60);
 let sec=s%60;
 let t=`${y} години ${d} дни ${h} часа ${m} минути ${sec} секунди`;
 document.getElementById("clock").innerHTML=t;
 document.getElementById("finalClock").innerHTML=t;
}
setInterval(clock,1000);clock();

setInterval(()=>{
 let e=document.createElement("span");
 e.innerHTML=["❤️","✨","🔨","🔩"][Math.floor(Math.random()*4)];
 e.style.left=Math.random()*100+"%";
 document.getElementById("effects").appendChild(e);
 setTimeout(()=>e.remove(),5000);
},1000);
