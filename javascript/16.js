// 사용자가 무었을 찍었는지 , 레디오 박스에서 찍힌것을 어떻게 찾아올지 고민

const show = () => {
    event.preventDefault() ;

    //랜덤수 생성 (1부터 6까지 >>>+1해줘야 함)

    let n = Math.floor(Math.random()*6) + 1 ; // 랜덤수 정의 let

    // 사용자 입력 수 : 레디오 체크값을 찾음

    let user // 사용자수 정의
    const radios = document.querySelectorAll('input[type=radio]') ; // radios 는 레디오에 입력된값 가져옴
    for(let item of radios) {    // for 반복분 let 변수 넣는 선언 of 사용 하여 변수는 레디오 값
        console.log(item); // 콘솔 로그 개발자 화면에 기록한다
        if (item.checked) {
            user = item.value
            break // 빠져 나옴

        }
    }

    // 랜덤수와 사용자 입력수 같은지 검사 , 아티클 자리 h1 표기
    if(n === parseInt(user)) {  // === 은 타입까지 같아야 한다
        document.querySelector('article h1').innerHTML = '주사위게임 : 맞음(승)' ;
        }
    else {
        document.querySelector('article h1').innerHTML = '주사위게임 : 틀림(패)' ;

    }



    // 결과 출력
    document.querySelector(".h2Class").innerHTML = `<img src="../images/${n}.png">`;

}

