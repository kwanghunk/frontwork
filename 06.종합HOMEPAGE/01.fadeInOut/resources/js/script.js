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

// 이미지 fadeIn_Out 적용
setInterval(slide,2000);
let x = $('#imgslide>img');
let y = 3;

console.log(x);

function slide() {
    y--;
    if(y == 0) {
        x.fadeIn();
        y=3;
    }else {
    x.eq(y).fadeOut();
    }
}

// let x = $('imgslide>img');
// let y = 3;

// setInterval(function() {
//     y--;
//     if(y == 0) {
//         x.fadeIn();
//         y=3;
//     }else {
//     x.eq(y).fadeOut();
//     }
// }, 2000);

})
