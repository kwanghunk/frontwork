$(() => {
// 모든 .imgbtn 요소들을 가져옴
const imgBtns = document.querySelectorAll('.imgbtn');

// 각 .imgbtn 요소에 클릭 이벤트 리스너 추가
imgBtns.forEach(imgBtn => {
    imgBtn.addEventListener('click', () => {
        window.location.href = 'https://www.naver.com';
    });
       // 각 img 요소에 클릭 이벤트 리스너 추가
       imgBtn.querySelector('img').addEventListener('click', () => {
        window.location.href = 'https://www.naver.com';
    });

    // 각 button 요소에 클릭 이벤트 리스너 추가
    imgBtn.querySelector('button').addEventListener('click', () => {
        window.location.href = 'https://www.naver.com';
    });
});

    // 이미지 slide 적용하기
    serInterval(slide,2000);
    let x = $('#imgslide>div');

    function slide() {

        if(x.position().left == -2000){
            x.animate({left:'-=1000px'}, function() {
                x.css('left', 0);
            })
        } else {
            x.animate({left:'-=1000px'})
        }
        
    }



})
