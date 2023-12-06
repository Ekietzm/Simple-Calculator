let total = 0;
let adding = false;
let subtracting = false;
let multiplying = false;
let dividing = false;
let dotting = false;


document.getElementById("clear").onclick = function(){
    document.getElementById("output").value = 0;
    total=0;
}

document.getElementById("9").onclick = function(){
    onNumberClick(9);
}

document.getElementById("8").onclick = function(){
    onNumberClick(8);
}

document.getElementById("7").onclick = function(){
    onNumberClick(7);
}

document.getElementById("6").onclick = function(){
    onNumberClick(6);
}

document.getElementById("5").onclick = function(){
    onNumberClick(5);
}

document.getElementById("4").onclick = function(){
    onNumberClick(4);
}

document.getElementById("3").onclick = function(){
    onNumberClick(3);
}

document.getElementById("2").onclick = function(){
    onNumberClick(2);
}

document.getElementById("1").onclick = function(){
    onNumberClick(1);
}

document.getElementById("0").onclick = function(){
    onNumberClick(0);
}

document.getElementById("add").onclick = function(){
    adding = true;    
}

document.getElementById("subtract").onclick = function(){       
    subtracting = true;    
}

document.getElementById("multiply").onclick = function(){
   multiplying = true;

}

document.getElementById("divide").onclick = function(){       
   dividing = true;
}

document.getElementById("dot").onclick = function() {}

function onNumberClick(number){
    if (adding === true) {
        total = total + number; 
        document.getElementById("output").value = total; 
        adding = false;
    } else if (subtracting === true){
        total = total - number;
        document.getElementById("output").value = total; 
        subtracting = false;
    } else if (multiplying === true){
        total = total * number;
        document.getElementById("output").value = total; 
        multiplying = false;
    } else if (dividing === true){
        total = total / number;
        document.getElementById("output").value = total; 
        dividing = false;
    } else {
        total = number;
        document.getElementById("output").value = total; 
    }    
}


