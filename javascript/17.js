// 함수 생성 >>> 리턴 값까지 지정을 해줘야 함

const cTof = (temp) => {
    let ftemp = (temp * (9/5)) + 32 ;

    return ftemp;
}

//화씨온도 섭씨온도 변환
const fToc = (temp) => {
    let ctemp = (temp - 32) * (5/9) ;
    return ctemp;
}

//select 토글
const selToggle = (s1, s2, t1, t2) => {
    t1.value = '' ;
    t2.value = '' ;

    if (s1.value == '℃') {
        s2.value = '℉' ;
    }
    else if (s1.value == '℉') {
        s2.value = '℃' ;
    }
}

// input type = "number" 사용 
// readonly속성 : 글 입력 안되고 숫자만 

document.addEventListener("DOMContentLoaded", ()=>{
    const sel1 = document.querySelector('#sel1') ;
    const sel2 = document.querySelector('#sel2') ;

    const d1 = document.querySelector('#d1') ;
    const d2 = document.querySelector('#d2') ;

    const t1 = document.querySelector('#t1') ;
    const t2 = document.querySelector('#t2') ;


    //단위표시
    d1.textContent = sel1.value ;   //textContent = 글자 땡겨온다
    d2.textContent = sel2.value ;   

    // select 값이 변경 될떄 이벤트 생성 이벤트 리스너 사용 온도 타입 선택할때 자동으로 반영된
    sel1.addEventListener('change', (event)=>{
        selToggle(sel1, sel2, t1, t2) ;   //변경되는 종속값 왼쪽에
        
        d1.textContent = sel1.value ;
        d2.textContent = sel2.value ;
    }) ;
    sel2.addEventListener('change', (event)=>{
        selToggle(sel2, sel1, t1, t2) ;

        d1.textContent = sel1.value ;
        d2.textContent = sel2.value ;
    }) ;

       //input에 값이 입력 되었을 때 change 못써서 input 사용
       t1.addEventListener('input', (event)=>{
        if (sel1.value == sel2.value) {
            t2.value = t1.value ;
        }
        else if (sel1.value == '℃' && sel2.value =='℉' ) {
            //섭씨온도->화씨온도
            t2.value = cTof(t1.value) ;
        }
        else if (sel1.value == '℉' && sel2.value =='℃' ) {
            //섭씨온도->화씨온도
            t2.value = fToc(t1.value)  ;
        }
    });

});