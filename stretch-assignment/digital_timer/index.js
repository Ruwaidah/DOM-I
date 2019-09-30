let d = 0;
let s = 0;
function start(){
    document.getElementById("start").disabled = true;
    timer = window.setInterval(myTimer2, 100);

function myTimer2() {  
    document.querySelector(".digits").style.color = "black";
    s++;
    if ( s == 10){
        document.getElementById("msHundreds").textContent= 1;
        document.getElementById("msTens").textContent= 0;
        if (s >= 10){
            d++;
            if (d > 10){
                d = 0;
                return;
            }
            if (d == 10){
                document.getElementById("secondOnes").textContent= 0;
                document.getElementById("secondTens").textContent= 1;
                document.getElementById("msHundreds").textContent= 0 ;
                document.getElementById("msTens").textContent= 0 ;
                document.querySelector(".digits").style.color = "red";
                clearInterval(timer);
            }
            else {
                document.getElementById("secondOnes").textContent= d;
                document.getElementById("secondTens").textContent= " - ";
    
            }
        }
        s = 0;

    }
    else {
        document.getElementById("msTens").textContent= " - " ;
        document.getElementById("msHundreds").textContent= s;

    }

}

}

function reset(){
    clearInterval(timer);
    s = 0;
    d = 0;
    document.getElementById("start").disabled = false;
    document.getElementById("secondTens").textContent= " - ";
    document.getElementById("secondOnes").textContent= " - ";
    document.getElementById("msHundreds").textContent= " - ";
    document.getElementById("msTens").textContent= " - " ;
    document.querySelector(".digits").style.color = "black";

}