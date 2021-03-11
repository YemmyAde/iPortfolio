let container1 = document.getElementsByClassName("sidebar")[0];
let container2 = document.getElementsByClassName("stickyIcon")[0];

function clickMe(){
    if (container1.style.visibility == "hidden"){
        container1.style.visibility = "visible";
    }
    else{
        container1.style.visibility = "hidden";
    }
}