function color() {

    var get = document.getElementById("bgcolor");
    get.style.backgroundColor = prompt("Enter bAckground  Color");

}


function textColor() {

    var get = document.getElementById("bgcolor");
    get.style.color = prompt("Enter Text  Color");

}

function showImage() {

    var get = document.getElementById("cat");
    get.style.display = "inline-block";

}

function bigImage() {

    var get = document.getElementById("cat");
    get.style.width = "300px";
    get.style.display = "inline-block";

}
function smallImage() {

    var get = document.getElementById("cat");
    get.style.width = "150px";
    get.style.display = "inline-block";

}
function hideImage() {

    var get = document.getElementById("cat");
    get.style.display = "none";

}

function blubon() {

    var get = document.getElementById("blubimg");
    get.src = "./images/on.png";
}
function blubof() {

    var get = document.getElementById("blubimg");
    get.src = "./images/blub_off.png";
}

function para() {
    var get = document.getElementById("para1")
    var peragraph = get.getElementsByTagName("p")
    for (i = 0; i <peragraph.length; i++) {
        peragraph[i].style.color = prompt("Enter color for para " + [i]);
    }
}



function spesificPara() {

    var get = document.getElementById("paras");
    var para = get.getElementsByTagName("p");
    para[0].style.color = prompt("Enter color " + [0]);
    para[1].style.color = prompt("Enter color " + [1]);


}