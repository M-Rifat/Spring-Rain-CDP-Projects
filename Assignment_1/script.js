/*confirm+alert*/
const storybtn = document.querySelector(".sub-container button");
storybtn.onclick = function confirmation() {
  var answer = confirm("Do You Want to Redirect?")
  if (answer){
     window.location = "https://www.technewsworld.com/";
  }
    else{
    alert("Thanks for staying with us!")
  }
}

/*mark*/
const mark = document.querySelector('mark');
mark.onclick = function () {
  mark.style.background = "cyan";
}
/*changeText*/
const nav = document.getElementsByTagName("option")[1];
nav.innerHTML = "Popular";

/*addTime*/
const li = document.getElementsByTagName("li")[0];
setInterval(myTimer, 1000);
function myTimer() {
  const date = new Date();
  li.innerHTML = date.toLocaleTimeString();
}
const timeList = document.querySelector("ul");
timeList.appendChild(li);
li.style.color = "white";

/*more text*/
const read = document.querySelector(".main-right-content article a");
const after = "InnoView’s new desktop display adds to a series of portable monitors, such as the InnoView 15.6″ 4K HDR touchscreen portable monitor we reviewed last spring.";
let count = 1;
read.onclick = function () {
    read.replaceWith(after);
}


/*new news*/
const mainRight=document.getElementsByTagName("article")[6];
const newsbtn = document.querySelector(".main-right-content button");
let cnt=1;
newsbtn.onclick = function () {
  if(cnt==1){
    mainRight.insertAdjacentHTML('afterend',`<article>
    <img src = "images/right-5.jpg" >
    
    <div>
        <p class="time"><time><b>26-12-2022,12:00pm</b></time> </p>
        <h2>Standout Tech Products of 2022</h2>

        <p>Every year I look back at my Product of the Week choices and pick what I think made the most significant impact on my life as the Product of the Year. There were a lot of contenders this year, which I will cover, but I want to lead</p>

        <a href = "#">Read More <span>>></span></a>
    </div>
    
    
</article>`)
    cnt=2
  }
  else{
    alert("No Recent News")
  }
}

/*sign In*/
const signIn = document.getElementsByTagName("li")[7];
signIn.onclick=function myFunction() {
  let text;
  let person = prompt("Please enter your username:", "Harry Potter");
  if (person != null || person != "") {
    signIn.innerHTML = person;
    signIn.style.color="cyan"
  }
}
/*sign Up*/
const uname=document.querySelector(".footer-right input")
const email=document.querySelector(".submit input")
const signUp=document.querySelector(".submit button");
signUp.onclick=function(){
  if(uname.value.length==0 || email.value.length==0){
    alert("Please fill up the requierd field");
  }
  else{
   alert("Your profile name "+uname.value);
   uname.value="";
   uname.placeholder="User Name";
   email.value="";
   email.placeholder="Email";
  }
}


/*effect*/
const image = document.querySelector(".main-right-content img");
image.onclick=function(){
  image.style.transform='rotate(360deg)';
  image.style.transition = "all 1s";
}


/*image change*/
const image2 = document.querySelector(".left-top img");
image2.onclick=function(){
  image2.src="images/banner.jpg"
}
image2.ondblclick=function(){
  image2.src="images/top-left.jpg"
}
/*dark mode*/


/*horizantal move*/
const para1 = document.querySelector(".current-news h2")

animate(para1);

function animate(element) {
	let elementWidth = 200;
	let parentWidth = 10;
	let flag = 0;

	setInterval(() => {
		element.style.marginLeft = --flag + "px";
		if (elementWidth == -flag) {
			flag = parentWidth;
		}
	}, 20);
}

/*most popular news*/
window.onload = function () {
  var selectBox = document.getElementById("selectBox");
  selectBox.addEventListener('change', changeFunc);
  function changeFunc() {
    if(this.value==2){
      let div1 = document.getElementsByTagName("article")[3];
let div4 = document.getElementsByTagName("article")[5];
let temp = div1.cloneNode(true);

div1.innerHTML = div4.innerHTML;
div1.className = div4.className;

div4.innerHTML = temp.innerHTML;
div4.className = temp.className;
  }
  if(this.value==3){
    let div1 = document.getElementsByTagName("article")[4];
let div4 = document.getElementsByTagName("article")[6];
let temp = div1.cloneNode(true);

div1.innerHTML = div4.innerHTML;
div1.className = div4.className;

div4.innerHTML = temp.innerHTML;
div4.className = temp.className;
}
  }
}
/*click nav*/ 
const nav_items = document.querySelectorAll('#navbar li');
if(nav_items){
    nav_items.forEach(el =>{
        el.addEventListener('click',e=>{
            e.preventDefault();
            const anyActive = document.querySelector('.active');
            if(anyActive)anyActive.classList.remove('active');
            el.classList.add('active');
        });
    });
};

