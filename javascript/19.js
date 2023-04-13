document.addEventListener('DOMContentLoaded',()=> {
    const cbt1s = document.querySelectorAll(".cbt1");  // 첫번째 줄 버튼 찝어옴  
    const cbt2s = document.querySelectorAll(".cbt2");
    const cbt3s = document.querySelectorAll(".cbt3");
    const btReset = document.querySelector("#btReset");
    const txt1 = document.querySelector("#txt1") ;

    //배열의 초기화
    let arr = [] ;

    // reset 기능 추가
    btReset.addEventListener('click', (event)=> {
        event.preventDefault ();
        txt1.value = '' ;
        arr = [] ;
    
    })

    //버튼에 이벤트 달기
    console.log(cbt1s)
    for(let cbt1 of cbt1s) {   //cbt1은 cbts 줄의 버튼에 클릭 이벤트 생성) 
        cbt1.addEventListener('click', (event) => {
            event.preventDefault ();
            //console.log(cbt1.textContent) ;           // 배열에 자료 추가
            switch (cbt1.textContent) {
                case '사과' :
                    arr.push('🍏') ; //push 하면 보여주는 것 읜도우 + . 누르면 이모지
                    break ;
                case '바나나' :
                    arr.push('🍌') ;
                    break ;
                case '오랜지' :
                    arr.push('🍊') ;
                    break ;
                case '오랜지' :
                    arr.push('🍉') ;
                    break ;
            }
            console.log(arr) ;
            
            //txt1.value = arr.toString() ;
            txt1.value = arr.join(',') ;

        }) ;
    }    
    
    for(let cbt2 of cbt2s) {
        cbt2.addEventListener('click', () => {}) ;
    }
    for(let cbt2 of cbt3s) {
        cbt2.addEventListener('click', () => {}) ;
    }


});