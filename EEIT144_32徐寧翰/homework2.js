function init() {
    document.getElementById("name").addEventListener("blur", namecheck);
    document.getElementById("password").addEventListener("blur", pwdcheck);
    document.getElementById("date").addEventListener("blur", datecheck);
}
function namecheck() {
    let name = document.getElementById("name").value;
    let wname = document.getElementById("wname");
    wname.className = "checkmessage";
    if (name.length == "") {
        wname.innerHTML = "<img src='img/wrong.jpg'>姓名不可空白";
    }
    else if (name.length < 2) {
        wname.innerHTML = "<img src='img/wrong.jpg'>姓名必須至少兩個字以上";
    }
    else if (/[^\u4e00-\u9fff]/.test(name)) {
        wname.innerHTML = "<img src='img/wrong.jpg'>姓名必須全為中文";
    }
    else {
        wname.innerHTML = "<img src='img/right.jpg'>正確";
        wname.className += " right";
    }
}
function pwdcheck() {
    let password = document.getElementById("password").value;
    let wpassword = document.getElementById("wpassword");
    wpassword.className = "checkmessage";
    if (password.length == "") {
        wpassword.innerHTML = "<img src='img/wrong.jpg'>密碼不可空白";
    }
    else if (!/(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}/.test(password)) {
        wpassword.innerHTML = "<img src='img/wrong.jpg'>密碼必須至少6個字且必須包含英數字、特殊字元[!@#$%^&*]";
    }
    else {
        wpassword.innerHTML = "<img src='img/right.jpg'>正確";
        wpassword.className += " right";
    }
}

function datecheck() {
    let date = document.getElementById("date").value;
    let wdate = document.getElementById("wdate");
    wdate.className = "checkmessage";
    if (date.length == "") {
        wdate.innerHTML = "<img src='img/wrong.jpg'>日期不可空白";
    }
    else if (!/\d{4}\/\d{2}\/\d{2}/.test(date)) {
        wdate.innerHTML = "<img src='img/wrong.jpg'>日期格式錯誤";
    }
    else if (!isValidDate(date)) {
        wdate.innerHTML = "<img src='img/wrong.jpg'>無此日期";
    }
    else {
        wdate.innerHTML = "<img src='img/right.jpg'>正確";
        wdate.className += " right";
    }
}

function isValidDate(dateStr) {
    var date = dateStr.split("/");
    var d = new Date(dateStr);
    return d.getDate() == date[2] & (d.getMonth() + 1) == date[1];
}