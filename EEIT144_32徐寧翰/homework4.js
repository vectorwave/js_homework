let index = 0;
let clock = null;
function makeclock() {
    clock = setInterval(() => {
        index++;
        refreshAd();
    }, 3000);
}
function refreshAd() {
    if (index > 6) {
        index = 0;
    }
    if (index < 0) {
        index = 6;
    }
    document.getElementById("adimg").src = ad[index][0];
    document.getElementById("adurl").href = ad[index][1];
}

document.addEventListener("DOMContentLoaded", () => {
    makeclock();
    let n = 0;
    for (let bt of document.getElementsByClassName("indexbutton")[0].children) {
        bt.src=ad[n][0];
        bt.href=ad[n][1];
        bt.addEventListener("click", function (n) {
            return () => {
                index = n;
                refreshAd();
            }
        }(n));
        n++;
    };
    let replay = document.getElementById("replay");
    document.getElementById("left").addEventListener("click", function (replay) {
        return () => {
            index--;
            refreshAd();
            clearInterval(clock);
            replay.innerText = ">";
        }
    }(replay));
    document.getElementById("right").addEventListener("click", function (replay) {
        return () => {
            index++;
            refreshAd();
            clearInterval(clock);
            replay.innerText = ">";
        }
    }(replay));
    replay.addEventListener("click", function (replay) {
        return () => {
            if (replay.innerText == ">") {
                makeclock();
                replay.innerText = "||";
            } else {
                clearInterval(clock);
                replay.innerText = ">";
            }
        }
    }(replay));
});

let ad = [["adimg/cokacola.jpg", "https://www.coke.com.tw/zh/home"],
["adimg/burgerking.png", "https://www.burgerking.com.tw/branchweb"],
["adimg/kfc.jpg", "https://www.kfcclub.com.tw/"],
["adimg/chocolate.png", "https://www.meiji.co.jp/sweets/chocolate/kinotake/"],
["adimg/sushi.jpg", "https://www.kurasushi.tw/"],
["adimg/sushiex.jpg", "https://www.sushiexpress.com.tw/sushi-express/Menu"],
["adimg/sunset.png", "https://www.niftypixels.io/"]
];

