let btn = document.querySelector("#menu-btn");
let navBar = document.querySelector("#nav");
let valDisplays = document.querySelectorAll(".count");
let fullImgBox = document.getElementById("fullImageBox");
let fullImgName = document.getElementById("fullImgName");
let fullImgId = document.getElementById("fullImgId");
let fullImgLvl = document.getElementById("fullImgLvl");
let hiddenElements = document.querySelectorAll('.hidden');


let count = 0;
let stVal =0;

const changeMenuBar = () => {
    if(count%2===0){
        btn.classList.add("header__menu-btn-cross");
        navBar.classList.remove("nav-bar__options-none");
        navBar.classList.remove("nav-bar__options-hide");
        navBar.classList.add("nav-bar__options-show");
    }else{
        btn.classList.remove("header__menu-btn-cross");
        navBar.classList.add("nav-bar__options-hide");
        navBar.classList.remove("nav-bar__options-show");
    }
    count++;
}

btn.addEventListener("click", changeMenuBar);


valDisplays.forEach((valDisplay) => {
    let endVal = parseInt(valDisplay.getAttribute("data-val"));
    let counter = setInterval(function(){
        stVal+=700;
        valDisplay.textContent = stVal;
        if(stVal >= endVal){
            clearInterval(counter);
        }
    }, 0.01)
})

function closeFullImg(){
    fullImgBox.style.display = "none";
}

function openFullImg(playerName, uid, level){
    fullImgName.textContent = playerName;
    fullImgId.textContent = uid;
    fullImgLvl.textContent = level;
    fullImgBox.style.display = "flex";
}

const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});


hiddenElements.forEach((el) => observer.observe(el)); 