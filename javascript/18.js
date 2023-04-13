//회문 확인 함수
const palindrome = (t1,t2) => {    //매개변수를 전달해서 다시 찝어올 필요 없음 t1,t2 넣어줌으로서 t1에는 txt1이 들어가고 t2에는 txt2이 들어감
    let s = t1.value ;
    //입력내용이 없는 경우 
    if (s.length == 0) {  // 글자길이가 0일 경우
        document.querySelector("h2").textContent = '단어를 입력하세요' ; //hgroup 내 <h2> 부분에 메시지 띄우기
    return ;
    }
    // 입력 내용이 있는경우

    let rs = '';

// 방법 2 배열 이용 뒤집기
    s = s.split(''); // 스플릿 배열만드는 함수 문자를 분리자로 분리해서 배열
    s = s.reverse() ; // 배열의 요소를 뒤집기
    rs = s.join('') ; // 분리자를 문자열로 붙여줌
    console.log("s=", s, "rs=",rs) ;


// 방법 1 뒤집은 문자열 만들기
    // for(let i = s.length -1; i>=0 ; i-- ) { //0부터 길이 시작하기 때문에  -1 해줌
    //     rs = rs + s[i] ;
    // }
        if (t1.value == rs) {
            t2.value="회문입니다." ;  //폼 의 값은 value로 찍어야 함 쿼리 셀랙터 이너 에이치티엠엘 사용하면 안됨
        }
        else {
            t2.value= "회문이 아닙니다." ;
        //console.log("s = ",s , ",rs =", rs ) ;
        }   

}

// 숫자합계 함수
const numsum = (t1,t2) => {
    let s= t1.value ; // 폼 테그 안에 있는 값은 value로 들고와야 한다. 

    let sum = 0; // 초기값 안주면 undefine되어 계간안됨, 아래 for문자열 안에 넣으면 계속 0으로 표기 된다.

    //문자열 순회
    for(let ch of s) { // for of 쓰면 글짜 하나씩 순회 하게 됨
        console.log(ch, isNaN(ch)); // isNaN 숫자인것은 false 로 뜬다 >>숫자인 것만 골라낼수 있음
        
        if (isNaN(ch) == false) {
            sum = sum + parseInt(ch) ; // 숫자sum 에 더하기 ch하면 숫자에서 숫자 더해서 문자가된다. sum이 안먹음
        } 
    }
    t2.value = sum ;
    //console.log('numsum')
}



document.addEventListener("DOMContentLoaded", () =>{

// 돔이 다 만들어지고 난 다음에 이 콜백 함수를 사용 하겠다
//화면에서 제어를 해야 하는 컴포넌트 (텍스트 박스 2 버튼 2가지)
// 컴포넌트 찝어오는것 const ...dom요소 가져 오기
    const txt1 = document.querySelector("#txt1");
    const txt2 = document.querySelector("#txt2");

    // const txts = document.querySelectorAll("input[type=text]"); 인풋타입(속성) 텍스트인 id txt 값 다 가지고 옴 

    const bts = document.querySelectorAll(".bt"); // class로 가져 오는 법, 버튼 2가지 클래스가 bt로 동일
    
    // 버튼 2개 클릭 이벤트 추가 하겠다 왜 ? html에 속성 안넣어 놔서 js에 입력해줌 , 클릭이 될때마다 이 콜백 함수를 불러낸다
  
    // 버튼 2개는 각각 다르나 이벤트로 보면 같은 속성이다. 배열로 가져옴 (배열의 순회)
    // 반복문으로 클릭이벤트 넣겠다
    
    for(let bt of bts) {
        // console.log(bt); // bt 2개 개발자 모드에서 찍히는 지 확인
        bt.addEventListener('click', (event)=>{    // bt 2개가 구분이 안되어 이제 구분해야함
            event.preventDefault(); // 폼이라는 객체가 하는 일이 버튼 눌리면 페이지 재로딩 하는것인데 재로딩하지 말라고 막음
            // let gubun = bt.innerHTML ; // let 어떤 기능인지 질문 , innerhtml 로 가져 올수도 있다
            let gubun = bt.getAttribute('id').slice(-1) ;  // innerhtml 대신에attribute로 아이디값 땡겨올수 있음 bt1, bt2 두가지로 해도되지만 '슬라이스'-1로 맨마지막 내용 짤라내고 bt를 구분
            if(gubun === '1') palindrome (txt1,txt2);
            else numsum(txt1,txt2);
            //console.log(gubun);
            

            
        }); 


    }
    
});
