function change() {
    var x = prompt("Enter your name in lower case!!")
    if (x == "dimpal" || x == "dimpal pandey") {
        document.getElementById("change").innerHTML = "HEY DIMPAL !!! HOW CAN I HELP YOU ??";
    } else {
        document.getElementById("change").innerHTML = alert("YOU ARE AN UNKNOWN USER!!!");
    }
    console.log(x);
}