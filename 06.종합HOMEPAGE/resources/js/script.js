$(() => {

// 이미지 fadeIn_Out 적용
setInterval(slide,2000);
let x = $('#imgslide>img');
let y = 3;

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


// logo 새로고침
const logo = document.querySelector('header>div>img');
console.log(logo);
    $(logo).click(function() {
        location.reload();
    });
    

    

})
