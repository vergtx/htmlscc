const show = () => {
    event.preventDefault() ;

    let n  = Math.floor((math.random) * 6) + 1 ;

    // 랜덤수 만들기

    document.querySelector(".h2class > img").setAttribute("src",`../images/${n}.png`);

    // 정의 없이 이미지 테그 바로쓰러면 이미지의src 속성 제거 해야함.  img 태그 가져 오기, 정의 없이 이미지 위치 찾아서 바로 들고 오기
}