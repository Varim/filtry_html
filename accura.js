let accura = document.getElementById("accuraSn");
let serialNumber = document.getElementById("accura");
const div = document.getElementById("dostawcaA");




const check = () => {
    div.textContent = '';
    const number = serialNumber.value.replace(/[^0-9]/g, '');
    if (((number >= 13000001) && (number <= 13005000)) || ((number >= 14000001) && (number <= 14005000)) || ((number >= 14095001) && (number <= 14100000)) || ((number >= 15195001) && (number <= 15200000)) || ((number >= 16060001) && (number <= 16100000)) || ((number >= 17000001) && (number <= 17005000)) || ((number >= 18070001) && (number <= 18100000)) || ((number >= 18075001) && (number <= 18100000)) || ((number >= 19000000) && (number <= 19010000))) {
        div.textContent = `s/n: ${serialNumber.value} KRISS`;
    } else if (((number >= 13005001) && (number <= 13160000)) || ((number >= 14005001) && (number <= 14095000)) || ((number >= 14100001) && (number <= 14200000)) || ((number >= 15000001) && (number <= 15195000)) || ((number >= 16000000) && (number <= 16060000)) || ((number >= 17005001) && (number <= 17095000)) || ((number >= 17100001) && (number <= 17200000)) || ((number >= 18000000) && (number <= 18075000)) || ((number >= 18100000) && (number <= 18130000)) || ((number >= 19010001) && (number <= 19100000))) {
        div.textContent = `s/n: ${serialNumber.value} CHAMELEON`;
    } else if ((number >= 15400001) && (number <= 15452000)) {
        div.textContent = `s/n: ${serialNumber.value} BUTTNER sro`;
    } else if ((number >= 17095001) && (number <= 17097000)) {
        div.textContent = `s/n: ${serialNumber.value} CKTonery`;
    } else if ((number >= 17097001) && (number <= 17100000)) {
        div.textContent = `s/n: ${serialNumber.value} ??REZERWA??`;
    } else if (number == '') {
        div.textContent = `musisz podać s/n np AC13160000`;
    } else {
        div.textContent = `s/n: ${serialNumber.value} jest błędny!`
    }


}


accura.addEventListener("click", check);
serialNumber.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        check();
    }
});