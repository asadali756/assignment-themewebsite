let btn = document.getElementById("btn");
let btnText = document.getElementById("btnText");
let btnIcon = document.getElementById("btnIcon");
let anchor = document.getElementById("anchor");
let anchor1 = document.getElementById("anchor1");
let anchor2 = document.getElementById("anchor2");
let anchor3 = document.getElementById("anchor3");
let about = document.getElementById('about');
let mq = document.getElementById('mq')





btn.onclick = function(){
    document.body.classList.toggle("dark-theme")

    if(document.body.classList.contains("dark-theme")){
        btnIcon.src = "sun.png";
        btnIcon.style.height = "30px";
        btnIcon.style.width = "30px";
        btnText.innerHTML = "Light";
        anchor.style.color = "white"
        anchor1.style.color = "white"
        anchor2.style.color = "white"
        anchor3.style.color = "white"
        about.style.background = "cornflowerblue"
        mq.style.color = "white"
        mq.style.boxShadow = "3px 3px 4px 4px white"

    }else{
        btnIcon.src = "moon.png";
        btnText.innerHTML = "Dark";
        anchor.style.color = "red"
        anchor1.style.color = "red"
        anchor2.style.color = "red"
        anchor3.style.color = "red"
        about.style.background = "aqua"
        mq.style.color = "red"
        mq.style.boxShadow = "3px 3px 4px 4px red"




    }
}