// 배열 필터 구현
const myfilter = (item) => {
    console.log(item) ;
    }

// 자바스크립트는 내가하고싶은 기능 추가 하려고 사용한다!
document.addEventListener('DOMContentLoaded',()=> {   // 에드이벤트 리스너 이벤트 실행되는것을 내가 포착하겟다 // 돔컨텐츠로드 (한번만 사용가능) 돔이 만들어졌을때 이벤트를 내가 잡겟다
    const cbt1s = document.querySelectorAll(".cbt1");  // 돔만들고 나서 돔안에 구성된 요소를 가지고 옴 (배열로 땡겨옴) // 첫번째 줄 버튼 찝어옴  
    const cbt2s = document.querySelectorAll(".cbt2"); // 겟엘리먼트바이아이디를 쓰면 일일이 한줄 한줄 아이디 다 넣어야한다(12줄만들어야함). // 쿼리셀렉터는 상위 대분류로 찝어와서 편한다
    const cbt3s = document.querySelectorAll(".cbt3"); // 
    const btReset = document.querySelector("#btReset"); // 한개만 땡겨오고 싶을때 쿼리샐랙터 (맨처음만나는거 땡겨옴) //다땡겨오면 쿼리 셀랙터 올.
    const txt1 = document.querySelector("#txt1") ;  // querySelector 집어온 속성을 보고 속성값을 참조하겟다. get attibute는 id와 class를 정확히 찝어온다.

    //배열의 초기화
    let arr = [] ;

    // 배열설명 : 배열[]은 index형식으로 순서 구분하여 표현한다.
    
    // 객체설명(추가적으로 설명함) : 객체(오브잭트는 키값으로 구분한다 ex영화 진흥위원회 박스오피스 다운박아 키값입력하면 데이타 땡겨옴)

    // reset 기능 추가
    btReset.addEventListener('click', (event)=> {
        event.preventDefault ();
        txt1.value = '' ;
        arr = [] ;
    
    })

    //버튼누르면  버튼 값 표시 이벤트 달기
    console.log(cbt1s)

    //배열에 자료 추가
    for(let cbt1 of cbt1s) {   //cbt1은 cbts 줄의 버튼에 클릭 이벤트 생성) 
        cbt1.addEventListener('click', (event) => {    //4개의 버튼에 클릭이벤트 생성 //그러나 각각 어떤 버튼에 어떤 이벤트 달지 결정 안되어 아래 스위치 사용하여 하는일 구분함 // 버튼마다 하는일 다르면 클릭이벤트 상위에 이프 달아서 하면됨
            event.preventDefault (); // 폼때문에 리로드 되는데 그 리로드 막는 것임
            //console.log(cbt1.textContent) ;           // 배열에 자료 추가
            switch (cbt1.textContent) { //텍스트 컨탠트는 택스트 뽑아내서 사과면 push 로 사과이모지를 추가하겠다
                case '사과' :
                    arr.push('🍏') ; //배열 내 push 하면 보여주는 것 읜도우 + . 누르면 이모지
                    break ;
                case '바나나' :
                    arr.push('🍌') ;
                    break ;
                case '오랜지' :
                    arr.push('🍊') ;
                    break ;
                case '수박' :
                    arr.push('🍉') ;
                    break ;
            }
            console.log(arr) ;
            
            //txt1.value = arr.toString() ;
            txt1.value = arr.join(',') ; //input타입 땅겨올때는 value로 꼿아야함 // 

        }) ;
    }    
    
// 배열에서 많이쓰는 함수는 필터(배열을 만듬; 기존 배열을 기반으로 arr.filter((아이템 )=>(조건식)) ex)arr.filter((사과 )=>(사과빼고 다불러오면 사과 삭제된것)) 와 맵(배열을 만듬;기존배열에 가지고 와서 어떻게 쓸것인지 arr.map(사과=>(오이)바꿀수 있음))

    for(let cbt2 of cbt2s) {
        cbt2.addEventListener('click', (event) => {
            event.preventDefault () ;
            // arr.myfilter(gubun) ;
            // switch (cbt2.textContent) { //텍스트 컨탠트는 택스트 뽑아내서 사과면 push 로 사과이모지를 추가하겠다
            //     case '사과삭제' :
            //         arr = arr.filter((item)=> item !='🍏' ) ; // 사과가 아닌 것을 배열로 불러온다. filter 자동으로 기존의 어레이를 순회를 한다.
            //         break ;                                   // 필터는 특징을 가진다 ;
            //     case '바나나삭제' :
            //         arr = arr.filter((item)=> item !='🍌' ) ; //필터는 새로운 필터를 만드는것 앞에 arr = 이라고 붙인이유는 새로운필터를 붙이기 위하여
            //         break ;                                    // 필터앞에 arr = 안붙이면 기존 어레이 불러옴
            //     case '오랜지삭제' :
            //         arr = arr.filter((item)=> item !='🍊' ) ;
            //         break ;
            //     case '수박삭제' :
            //         arr = arr.filter((item)=> item !='🍉' ) ;
            //         break ;
            // }

            // 필터함수 안쓰고 하는법

            let temp = [];
            let gubun =cbt2.textContent.replace('삭제','');
            for(let item of arr) {
                switch (gubun) {
                    case '사과' :
                        if (item != '🍏') temp.push(item);
                        break;
                    case '바나나' :
                        if (item != '🍌') temp.push(item);
                        break;
                    case '오랜지' :
                        if (item != '🍊') temp.push(item);
                        break;
                    case '수박' :
                        if (item != '🍉') temp.push(item);
                        break;

                }

            }
            arr = temp ; // for구문에서 생성된 새로운 temp를  arr 에 넣는다.

            console.log(cbt2,arr) ;
            txt1.value = arr.join(',') ; //input타입 땅겨올때는 value로 꼿아야함 // 
        }) ;
    }

    for(let cbt3 of cbt3s) {
        cbt3.addEventListener('click', (event) => {
            event.preventDefault () ;
            let temp = [];
            let gubun =cbt3.textContent.split('->')[0]; // split는 어레이를 분리시킨다 여기서는 "사과->당근" -> 기준으로 분리하여 0번째 당겨옴 
            console.log(gubun);
        //   for(let item of arr) {  // 아이템을 어레이에 배열 돌린다 .아이템 어디서 ???
        //        switch (gubun) {
        //             case '사과' :
        //              if(item == '🍏') temp.push('🥕');
        //               else temp.push(item);
        //               break ;
        //          case '바나나' :
        //               if(item == '🍌') temp.push('🥒');
        //               else temp.push(item);
        //             break ;
        //         case '오랜지' :
        //             if(item == '🍊') temp.push('🥑');
        //             else temp.push(item);
        //             break ;
        //         case '수박' :
        //             if(item == '🍉') temp.push('🥦');
        //             else temp.push(item);
        //             break ;
        //         }

        // }
        // arr = temp ; 
        // console.log(cbt3,arr) ;


            // 위 내용 map으로 간소화
            
            switch (gubun) {
                case '사과' :
                    arr = arr.map((item) => item == '🍏' ? '🥕' : item) ; // 삼항연산자
                    break ;
                case '바나나' :
                    arr = arr.map((item) => item == '🍌' ? '🥒' : item) ; // 삼항연산자
                    break ;
                case '오랜지' :
                    arr = arr.map((item) => item == '🍊' ? '🥑' : item) ; // 삼항연산자
                    break ;
                case '수박' :
                    arr = arr.map((item) => item == '🍉' ? '🥦' : item) ; // 삼항연산자
                    break ;
            }

        txt1.value = arr.join(',') ; 
    }) ;

    }
});