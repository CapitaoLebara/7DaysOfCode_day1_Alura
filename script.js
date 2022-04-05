var button = document.querySelector(".design")
var element_1 = document.querySelector(".vag")
var element_2 = document.querySelector(".x")

button.addEventListener("click", active)

function active() {
    if(element_1.style.display == "none" && element_2.style.display == "none"){
        element_1.style.display="block"
        element_2.style.display="block"
    }else{
        element_1.style.display="none"
        element_2.style.display="none"
    }
}


/*==== SOFTWARE ====*/
var button_2 = document.querySelector("#software")
var element_01 = document.querySelector("._01")
var element_02 = document.querySelector("._02")
var element_03 = document.querySelector("._03")



button_2.addEventListener("click", active_02)

function active_02() {
    if(element_01.style.display == "none" && element_02.style.display == "none" && element_03.style.display == "none"){
        element_01.style.display="block"
        element_02.style.display="block"
        element_03.style.display="block"
    }else{
        element_01.style.display="none"
        element_02.style.display="none"
        element_03.style.display="none"
    }
}