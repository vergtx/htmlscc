document.addEventListener('DOMContentLoaded', () => {
    const boxDT = document.querySelector('#boxDT');

    boxDT.addEventListener('change', ()=> {
        let url = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt='

        url = url + boxDT.value.replaceAll('-','');
        console.log(url)


        fetch(url)                        // url 땡겨 옴  // 문법 외우기
        .then ((resp)=>resp.json())       //  응답 왔을떄 .then에 걸림 할일    resp는 변수명 내가지정. // 여기는 한줄만 가능 
        .then((data)=>{                           // resp 받고 나면 할 일 적는 것.
            let boxlist = data.boxOfficeResult.dailyBoxOfficeList ;
            let boxTag = '' ; // 문자열 10개 만들어지면 innerhtml 에 박아 넣을 것임
    
            for (let box of boxlist) {              // for of 모든데이터 순회
            
    
                console.log(box.rank, box.movieNm, box.rankInten);
    
                boxTag = boxTag + '<details>' ;
                boxTag = boxTag + `<summary>${box.movieNm}</summary>` ;     //백틱 사용
                boxTag = boxTag + `<p>순위 : ${box.rank} </p>` ;
                boxTag = boxTag + `<p>매출액 : ${parseInt(box.salesAcc).toLocaleString()} </p>` ; // 숫자 천단위 표현
                boxTag = boxTag + `<p>전일대비순위 : ${box.rankInten} </p>` ;
                boxTag = boxTag + `</details>` ;
                
            }
            console.log(boxTag);
            document.querySelector('#boxDIV').innerHTML = boxTag ;
    
        })
        .catch((err)=>{console.log(err); //   통신이 안되거나 오류가 났을때 catch에 잡힘. err은 내가 지정.
            })
        ;
    });
    })


