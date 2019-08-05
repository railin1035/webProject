var tog = false;

function view(obj) {
	var papa = obj.parentElement;

	if(tog == false) {
		papa.style.right = 0;
        obj.innerHTML='<img src="images/m_btn_close.png">';
		tog = true;
	}
	else {
		papa.style.right = '-410px';
        obj.innerHTML='<img src="images/hamburger.png">';
		tog = false;
	}
}

function searching() {
    //입력데이터 유무
    if(search.value == '') {
        alert("검색할 단어를 입력하세요");
        search.focus();
        return false;
    }
    else {
        return true;
    }
}