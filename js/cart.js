function minus() {
    acuNumber(false);
}

function plus() {
    acuNumber(true);
}



function acuNumber(isAdd) {
    var num = document.getElementById('number').innerHTML;
    var intNum = parseInt(num);
    if(isAdd) {
        intNum=intNum+1;
        document.getElementById('number').innerHTML= String(intNum);
    }
    else {
        if(intNum==1){
            return;
        }
        intNum=intNum-1;
        document.getElementById('number').innerHTML=String(intNum);
    }
}