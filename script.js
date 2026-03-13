function openLogin(){

document.getElementById("intro").style.display="none"
document.getElementById("login").style.display="flex"

}

function checkPassword(){

let pass=document.getElementById("password").value

if(pass==="kanmani"){

document.getElementById("login").style.display="none"

document.getElementById("popup").style.display="flex"

setTimeout(function(){

document.getElementById("popup").style.display="none"

startCinema()

},2000)

}else{

document.getElementById("error").innerText="Wrong password"

}

}

function startCinema(){

document.getElementById("cinema").style.display="flex"

let text="In a world full of people...\n\nTwo souls met by destiny...\n\nAkash ❤️ Ankitha\n\nJanuary 28 2026\n\nA story that will never end..."

let i=0

let typing=setInterval(function(){

document.getElementById("cinemaText").innerHTML+=text[i]

i++

if(i>=text.length){

clearInterval(typing)

setTimeout(function(){

document.getElementById("cinema").style.display="none"

document.getElementById("main").style.display="block"

startTimer()

},3000)

}

},40)

}

function startTimer(){

let start=new Date("Jan 28 2026")

setInterval(function(){

let now=new Date()

let diff=now-start

let d=Math.floor(diff/(1000*60*60*24))
let h=Math.floor((diff%(1000*60*60*24))/(1000*60*60))
let m=Math.floor((diff%(1000*60*60))/(1000*60))
let s=Math.floor((diff%(1000*60))/1000)

document.getElementById("days").innerText=d
document.getElementById("hours").innerText=h
document.getElementById("minutes").innerText=m
document.getElementById("seconds").innerText=s

},1000)

}

/* gallery */

function addPhoto(){

let file=document.getElementById("photoInput").files[0]
let note=document.getElementById("noteInput").value

if(!file)return

let reader=new FileReader()

reader.onload=function(e){

let div=document.createElement("div")

div.className="memory"

div.innerHTML=
"<img src='"+e.target.result+"'><p>"+note+"</p><button onclick='this.parentElement.remove()'>Delete</button>"

document.getElementById("gallery").appendChild(div)

}

reader.readAsDataURL(file)

}

/* flipbook */

let pages=document.querySelectorAll(".page")
let current=0

function nextPage(){

if(current<pages.length-1){

pages[current].classList.remove("active")
current++
pages[current].classList.add("active")

}

}

function prevPage(){

if(current>0){

pages[current].classList.remove("active")
current--
pages[current].classList.add("active")

}

}

/* secret */

function unlockSecret(){

let s=document.getElementById("secretInput").value

if(s==="kanmani"){

document.getElementById("secretText").innerText="You unlocked my heart ❤️"

}else{

document.getElementById("secretText").innerText="Wrong word"

}

}

/* heart */

function heartRate(){

let rate=Math.floor(Math.random()*40)+80

document.getElementById("heartResult").innerText=
"My heart beats "+rate+" bpm whenever I see you ❤️"

}

/* love meter */

function updateLove(){

let v=document.getElementById("loveRange").value

let text=""

if(v<30)text="Weak Bond"
else if(v<60)text="Growing Love"
else if(v<80)text="Strong Love"
else text="Unbreakable Love 💍"

document.getElementById("loveText").innerText=text

}

/* final */

function showFinal(){

document.getElementById("finalText").innerText=
"This is going to be a never ending story and no Nazar for us ❤️"

}