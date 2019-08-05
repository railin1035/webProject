var birth = year.value + "-" + month.value + "-" + day.value;
var phoneNum=0;

function checkData() {
    //id
    if(userId.value == '' || userId.value.length < 3) {
        showMessage("아이디를 4자 이상 입력하세요.",userId);
        return false;
    }
    
    //pw
    if(pw1.value == '' || pw1.value.length < 4) {
        showMessage("비밀번호는 4자 이상 입력하세요.",pw1);
        return false;
    }
    else if(isNaN(pw1.value)) {
        showMessage("비밀번호는 숫자만 입력하세요.",pw1);
        return false;
    }
    else if(pw1.value != pw2.value){
        showMessage("패스워드가 일치하지 않습니다.",pw2);
        return false;
    }
    
    //userName
    if(userName.value == '' || userName.value.length < 2) {
        showMessage("이름을 입력하세요.",userName);
        return false;
    }
    
    //phone
    if(ph2.value == ''|| ph2.value.length <3) {
        showMessage("전화번호를 다시 입력하세요.",ph2);
        return false;
    }
    if(ph3.value == ''|| ph3.value.length <3) {
        showMessage("전화번호를 다시 입력하세요.",ph3);
        return false;
    }
    else {
        phoneNum = parseInt(ph1.value) + parseInt(ph2.value) + parseInt(ph3.value);
    }
    
    //email
    if(email.value=='') {
        showMessage("이메일주소를 입력하세요.",email);
        return false;
    }
    var a = 0;
    var m = email.value;
    for(var i=0; i<m.length;i++){
        if(m[i]=='@'){
            a++;
        }
    }
    if(a != 1) {
        showMessage("잘못된 이메일 형식입니다.",email);
        return false;
    }
    
    alert("가입되었습니다.");
    window.close();
}


function showMessage(errorMessage, inputId) {
    alert(errorMessage);
    inputId.focus();
}


/*
function check_id() {
    if(id.value == '' || id.value.length < 3) {
        showMessage("아이디를 4자 이상 입력하세요.",id);
    }
}

function check_pw() {
    if(pw1.value.lenth < 4) {
        showMessage("비밀번호는 4자 이상 입력하세요.",pw1);
    }
    else if(isNaN(pw1.value)) {
        showMessage("비밀번호는 숫자만 입력하세요.",pw1);
    }
}

function check_pw2() {
    if(pw1.value != pw2.value){
        showMessage("패스워드가 일치하지 않습니다.",pw2);
    }
}

function check_name() {
    if(name.value == '' || id.value.length < 2) {
        showMessage("이름을 입력하세요.",name);
    }
}

function check_phone() {
    if(pNum2.value == ''|| pNum2.value.length <3) {
        showMessage("전화번호를 다시 입력하세요.",pNum2);
    }
    if(pNum3.value == ''|| pNum3.value.length <3) {
        showMessage("전화번호를 다시 입력하세요.",pNum3);
    }
    else {
        phoneNum = parseInt(pNum1.value) + parseInt(pNum2.value) + parseInt(pNum3.value);
    }
}

function check_email() {
    if(mail.value=='') {
        showMessage("이메일주소를 입력하세요.",mail);
    }
    var a = 0;
    var m = mail.value;
    for(var i=0; i<m.length;i++){
        if(m[i]=='@'){
            a++;
        }
    }
    if(a != 1) {
        showMessage("잘못된 이메일 형식입니다.",mail);
    }
}
*/