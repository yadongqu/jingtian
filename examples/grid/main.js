var app = document.getElementById("app");
for (var i = 1; i < 12; i++){
    let container = document.createElement("div");
    container.className = "container";
    let inner1 = document.createElement("div");
    inner1.className = "col-" + i;
    inner1.innerHTML = i;
    let inner2 = document.createElement("div");
    inner2.className = "col-" + (12 - i);
    inner2.innerHTML = 12 - i;
    container.appendChild(inner1);
    container.appendChild(inner2);
    document.body.appendChild(container);
}