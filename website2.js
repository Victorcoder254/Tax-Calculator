const nhifH = 1500;
const nssfH = 1650;
const hfundH = 6.5;


const nhifM = 2000;
const nssfM = 2200;
const hfundM = 6.5;


const nhifL = 3500;
const nssfL = 3650;
const hfundL = 6.5;


let salary;
let rem;

document.getElementById("submit").onclick = function(){
    salary = document.getElementById("salary").value;
    salary = Number(salary);
    if (salary >= 0 && salary <= 19000){
       rem = salary - (nhifH + nssfH + ((hfundH/100) * salary));
       document.getElementById("net_salary").innerHTML = salary;
       document.getElementById("nssf").innerHTML = nssfH;
       document.getElementById("nhif").innerHTML = nhifH;
       document.getElementById("hfund").innerHTML = hfundH;
       document.getElementById("rem").innerHTML = rem;
    }
    else if (salary >= 20000 && salary <= 49000){
       rem = salary - nhifH - nssfH - ((hfundH/100) * salary);
       document.getElementById("net_salary").innerHTML = salary;
       document.getElementById("nssf").innerHTML = nssfM;
       document.getElementById("nhif").innerHTML = nhifM;
       document.getElementById("hfund").innerHTML = hfundM;
       document.getElementById("rem").innerHTML = rem;
    }
    else if (salary >= 51000 && salary <= 100000){
       rem = salary - nhifH - nssfH - ((hfundH/100) * salary);
       document.getElementById("net_salary").innerHTML = salary;
       document.getElementById("nssf").innerHTML = nssfL;
       document.getElementById("nhif").innerHTML = nhifL;
       document.getElementById("hfund").innerHTML = hfundL;
       document.getElementById("rem").innerHTML = rem;
    }
}