// document.addEventListener('DOMContentLoaded', ()=> {


//     setTimeout(() => {
//         console.log('A');
//     }, 500); // 1초 지나고 콜백한다.

//     setTimeout(() => {
//         console.log('B');
//     }, 1000); // 1초 지나고 콜백한다.

//     setTimeout(() => {
//         console.log('C');
//     }, 200); // 1초 지나고 콜백한다.

// // 시간이 걸리면 순서대로 안하고 먼저 당겨 오는거 찍는다.Ajax 통신의 예



// })


document.addEventListener('DOMContentLoaded', ()=> {


    setTimeout(() => {
        console.log('A');

        setTimeout(() => {
            console.log('B');
            setTimeout(() => {
                console.log('C');
            }, 200); 
        }, 1000); 
    }, 500); 


// 시간이 안걸려서 조타 but 기다렷다가 자료 받아서 처리해야 하는 경우에는
// 콜백함수 안에 콜백함수 넣어야 한다.  << 콜백지옥이라고함 이것을 지양하기 위해서 promise라는 것을만듬.
// promise 는 보낸 신호에 응답이 온 것만 진행. 순서 상관없이 


})