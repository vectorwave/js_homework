let count = 0;
let i = 0;
let check = null;
window.onload = () => {
    let stars = document.getElementById("stars");
    document.getElementById("stars").addEventListener("mouseleave", () => { if (!check) { clear(); } });
    for (let img of stars.children) {
        img.addEventListener("mouseover", over(img));
        img.addEventListener("click", click);
        img.addEventListener("dblclick", clear);
    }
};
function click() {
    check = 1;
    document.getElementById("number").innerHTML = `${count}`;
}
function over(img) {
    return () => {
        if (img.className != "") {
            img.className = "";
            count++;
        }
    }
}

function clear() {
    for (let img of stars.children) {
        img.className = " bw";
        count = 0;
        check = null;
        document.getElementById("number").innerHTML = `${count}`;
    }
}

