function show() {

// 펑션사용해서 알람 띄우기alert("안녕하세요") ;
// id가 뭐인것을 찾아올께

    event.preventDefault();
    document.getElementById("h2id").innerHTML = "안녕하세요" ;
}
//  dom 이 만들어지고 나서 펑션(버튼) 누르면 h2id에 어떤 내용 띄울껀지 기능 넣은것
// 우리는 버튼 누르면 누구님 안녕하세요 이런 펑션을 만들어 볼꺼다
// 자바스크립트를 통해서 dom 에 crud 구현하는것이 강의 목표 아래 돔 컨탠츠 로드 참조

    document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("h2id").innerHTML = "시작입니다.";
});

// document.addEventListener안에 함수가 들어간다 
// DOMContentLoaded 로드가 되면 함수 적용 하겟다. 함수는 여기 그래도 짜서 넣어야 한다. 함수 인수(이름)를 만들어서 떙겨 오는게 아님
// 따라서 이름이 없는 함수가 생긴다
// 함수 괄호 열고 () 중괄호 열고 { 줄바꾸고 }); <<<이게 규칙