let current=0;
const cards=document.querySelectorAll('.card');

function next(){
    if(current < cards.length - 1){
        cards[current].classList.remove('active');
        current++;
        cards[current].classList.add('active');

        setTimeout(()=>{
            window.scrollTo({
                top:0,
                behavior:"smooth"
            });
        },100);
    }
}

function checkAnswer(){
 let a=document.getElementById('answer').value.toLowerCase();
 document.getElementById('answerResult').innerHTML=
 a.includes('релакс') || a.includes('relax')
 ? '✅ Съдът приема доказателството.'
 : '❌ Съдът има съмнения.';
}

function updateClock(){
 let start=new Date('2019-09-26T00:00:00');
 let diff=Math.floor((Date.now()-start)/1000);
 let y=Math.floor(diff/31557600);
 let d=Math.floor((diff%31557600)/86400);
 let h=Math.floor((diff%86400)/3600);
 let m=Math.floor((diff%3600)/60);
 let s=diff%60;
 let text=`${y} години ${d} дни ${h} часа ${m} минути ${s} секунди`;
 if(document.getElementById('clock')) document.getElementById('clock').innerHTML='❤️ Заедно: '+text;
 if(document.getElementById('finalClock')) document.getElementById('finalClock').innerHTML=text;
}

setInterval(updateClock,1000);
updateClock();
