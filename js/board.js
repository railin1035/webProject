function searched() {
    //입력데이터 유무
    if(bSearch.value == '') {
        alert("검색할 단어를 입력하세요");
        search.focus();
        return false;
    }
    else {
        return true;
    }
}


