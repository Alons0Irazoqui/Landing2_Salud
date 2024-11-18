const button = document.getElementById("class");
const ul_menu = document.getElementById("ul");
button.addEventListener("click", function(){

    if(button.classList.contains("activo")){
        button.classList.remove("activo");
        ul_menu.classList.remove("translate")
    }else{
        button.classList.add("activo");
        ul_menu.classList.add("translate");
    }
})
let header = document.getElementById("header");
window.addEventListener("scroll", function(){
    if(window.scrollY>0){
        header.classList.add("uno");
    }else{
        header.classList.remove("uno")
    }
})
