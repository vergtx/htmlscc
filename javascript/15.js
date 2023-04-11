//       버튼들고 와서 버튼 내 text 빼 내는 법


// document.addEventListener("DOMContentLoaded" , () => {

//     const bts = document.querySelectorAll('button');
//     console.log(bts);

//     document.querySelector('#h2id').textContent = bts.textContent;


// });

// document.addEventListener("DOMContentLoaded" , () => {

//     const bts = document.querySelectorAll('button');
//     console.log(bts);

   
//     for(let i=0 ; i < bts.length; i++) {
//         console.log(bts[i])
//     }

// });


//     //forEach 사용법 포이치는  함수를 넣어줘야 한다.((item)) 배열에 있는 아이템 하나씩 들고옴 idx 까지 들고올 수 있다.

// document.addEventListener("DOMContentLoaded" , () => {

//     const bts = document.querySelectorAll('button');
//     console.log(bts);


    
//     bts.forEach((item)) => {
//         console.log(item.textContext) ;

//     });
// };


    //for in 사용 파이썬에 가장 강력한 연산자 
 
// document.addEventListener("DOMContentLoaded" , () => {

//         const bts = document.querySelectorAll('button');
//         console.log(bts);
    
    
        
//         for(let idx in bts) {
//             console.log(bts[idx].textContext)     
//         }
// });




    //자바에서는 for of 사용 권장

 
    document.addEventListener("DOMContentLoaded" , () => {

        const bts = document.querySelectorAll('button');
        console.log(bts);
        //  콘솔화면에서 받아오는지 확인 하는 것 
        
        
        for(let [k,v] of bts.entries()) {
            console.log(k,v.textContent);
        }


            
    });


