var input,output;

function inCome() {
    input = document.getElementById("income").value;
    document.getElementById("show-income").innerHTML = input;
}

function outGo() {
    output = document.getElementById("outgo").value;
    document.getElementById("show-outgo").innerHTML = output;
}

function showMax() {
    var comparison
    if (input > output) {
        comparison = "max:income";
    }
    else if (output > input) {
        comparison = "max:outgo";
    }
    else {
        comparison = "equal";
    }
    document.getElementById("show-cal").innerHTML = comparison;
}
