function myFunction() {
    var x = document.getElementById("navigate-my-site");
    if (x.className === "links") {
        x.className += " responsive";
    } else {
        x.className = "links";
    }
}