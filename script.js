// const electron = require('electron')
// const path = require('path')
// const BrowserWindow = electron.remote.BrowserWindow


document.getElementById("zlecenie").addEventListener("click", sprawdz);

function sprawdz() {
    let a = document.forms['zlecenie'].NRDOKUMENTU.value;
    if ((a < 1e6) && (a[0] != 0)) {
        document.forms['zlecenie'].NRDOKUMENTU.value = 0 + (a);
    }
};

//data w formacie rrrr-mm-dd
let a = new Date();
let timeNow = `${a.getFullYear()}-${a.getMonth()+1}-${a.getDate()}`;

let times = document.querySelectorAll("input[name=datado]");
times.forEach(time => time.value = timeNow);

let times2 = document.querySelectorAll("input[value='666']");
times2.forEach(time => time.value = timeNow);


//zaznaczanie wyboru oraz wyświetlanie odpowedniego diva
// document.querySelector("#tools").style.boxShadow = '0 0 2px 2px grey'; // obramowanie na domyślnym elemencie

const selection = (e) => {
    select2 = e.target.dataset.option;
    console.log(select2);
    select.forEach(hand => hand.style.boxShadow = '');

    e.target.style.boxShadow = '0 0 2px 2px grey';
    // document.querySelector(`.${select2}`).classList.toggle("hide")
    if (select2 === 'tracking') {
        document.querySelector(".tools").classList.add("hide");
        document.querySelector(".tracking").classList.remove("hide")
    }
    if (select2 === "tools") {
        document.querySelector(".tracking").classList.add("hide")
        document.querySelector(".tools").classList.remove("hide")
    }
}
const select = document.querySelectorAll('#select p');
select.forEach(hand => hand.addEventListener('click', selection))
