// 16에서 한 show 버튼 이벤트 만드는법 = 이벤트 리스너 사용 하여 콜백 이벤트 하면됨
// 16은 html에 show 이벤트 넣는 법 16-1 돔이 다 로드 되고 나서 이벤트 넣는법

document.addEventListener("DOMContentLoaded", () => {   // 돔이 하는 일을 적는것
    const bt1 = document.querySelector('#bt1') ;

    bt1.addEventListener('click', () => {  //클릭 기능(이벤트) 생성

       //랜덤수 생성
       let n = Math.floor(Math.random() * 6) + 1 ;

       //사용자 입력 수 : 라디오의 체크값을 찾음
       let user ;
       const radios = document.querySelectorAll('input[type=radio]');
       for(let item of radios) {
           console.log(item);
           if (item.checked) {
               user = item.value ;
               break;
           }
       }

       //랜덤수와 사용자입력수 같은지 검사
       if (n === parseInt(user)) {
           document.querySelector('article h1').textContent = '주사위게임 : 맞음(승)' ;
       }
       else {
           document.querySelector('article h1').textContent = '주사위게임 : 틀림(패)' ;
       }

       //결과출력
       document.querySelector(".h2Class").innerHTML = `<img src="./images/${n}.png">`;
   });

});