
//  dom 이 만들어지고 나서 펑션(버튼) 누르면 h2id에 어떤 내용 띄울껀지 기능 넣은것
// 우리는 버튼 누르면 누구님 안녕하세요 이런 펑션을 만들어 볼꺼다
// 자바스크립트를 통해서 dom 에 crud 구현하는것이 강의 목표 아래 돔 컨탠츠 로드 참조

// function show() {
//     event.preventDefault();
//     document.getElementById("h2id").innerHTML = "안녕하세요" ;
// }


//     document.addEventListener("DOMContentLoaded",function(){
//     document.getElementById("h2id").innerHTML = "시작입니다.";
// });

// document.addEventListener안에 함수가 들어간다 
// DOMContentLoaded 로드가 되면 함수 적용 하겟다. 함수는 여기 그래도 짜서 넣어야 한다. 함수 인수(이름)를 만들어서 떙겨 오는게 아님
// 따라서 이름이 없는 함수가 생긴다
// 함수 괄호 열고 () 중괄호 열고 { 줄바꾸고 }); <<<이게 규칙



// const는 변하지 않는다는 의미

// const show = () => {
 
//      event.preventDefault();
//      document.getElementById("h2id").innerHTML = "안녕하세요" ;
//  }

// document.addEventListener("DOMContentLoaded", () => {
//     // document.getElementById("h2id").innerHTML = "시작입니다.";

//     const bt = document.createElement("button") ;
//     bt.textContent = "확인"
//     document.getElementById("hdiv").append(bt) ;
    
// });

// 3.쿼리 셀랙터 사용하는법
// const show = () => {
 
//     event.preventDefault();
//     document.getElementById("h2id").innerHTML = "안녕하세요" ;
// }

// document.addEventListener("DOMContentLoaded", () => {


//    document.querySelector("#h2id").innerHTML = "아이디선택자:시작입니다."
   

//    const bt = document.createElement("button") ;
//    bt.textContent = "확인"
//    document.getElementById("hdiv").append(bt) ;
   
// });


// ID 없는 경우 selctor 로 가져 올 수 도 있음 document.querySelector() 괄호안에 셀랙터(id 셀렉터-#id이름-#h2iv,) 들어가면 됨
// dom 이 만들어오면 dom 에서 먼가를 잡아올수 있음 document.getElementById, document.querySelector 그리고 .innerHTML 을 사용하여 html 코드 널을 수 있다.


// 4.눌러주세요 누르면 주사위 그림 나오게만들기
// const show = () => {
//     event.preventDefault();
    
//     // 랜덤수 생성 하는 함수 math 사용하면 1~6까지 생성됨 아래
//     // 위 함수 변수 선언해야함 n 을로 선언 const 는 바뀌면 안되고 버튼 누를때마다 바뀌는걸 구현해야 해서 let 사용
//     let n = Math.floor(Math.random() * 6) + 1 ;
//     console.log(n);
        
    // 첫번쨰 방법
    // let imgtag ;
    // if(n == 1) imgtag = '<img src = "../images/1.png">' ;
    // if(n == 2) imgtag = '<img src = "../images/2.png">' ;
    // if(n == 3) imgtag = '<img src = "../images/3.png">' ;
    // if(n == 4) imgtag = '<img src = "../images/4.png">' ;
    // if(n == 5) imgtag = '<img src = "../images/5.png">' ;
    // if(n == 6) imgtag = '<img src = "../images/6.png">' ;
    
    // document.querySelector("#h2id").innerHTML = imgtag ;

    // 두번째 방법 - 문자열 안에 변수 넣는 기능 위 이미지 1~6까지 한줄로 표혐

    const show = () => {
        event.preventDefault();
                
        let n = Math.floor(Math.random() * 6) + 1 ;
        console.log(n);

        document.getElementById("h2id").innerHTML = `<img src ="../images/${n}.png">` ;
        // page 346 백틱 탬플릿 문자열 ` ` 사용 해서 문자열로 정의, ${} 외부 변경되는 변수 넣을 수 있음
        // 이미지 불러올때 큰따옴표 안에 작음따옴표든 다른따온표 안에 큰따옴표를 하던지 해서 구분해줘야 한다 </if> "< img src ='../images/1.png'> " */}


document.addEventListener("DOMContentLoaded", () => {


   const bt = document.createElement("button") ;
   bt.textContent = "확인"
   document.getElementById("hdiv").append(bt) ;
   
});


      // document.getElementById로 불러오면 결과는 배열로 불러온다.
