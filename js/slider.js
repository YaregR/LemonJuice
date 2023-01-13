// слайдер на JS

// let prev = document.querySelector('#prev');
// let next = document.querySelector('#next');
// let slideImg = document.querySelector('.slider-img img');
// let smallImages = document.querySelectorAll('.small-img');


// // кнопка "следкющий слайд"
// next.onclick = function() {
//     let currentSlide = document.querySelector('.slider-small-img li.active');

//     currentSlide.classList.remove('active');

//     let nextSlide = currentSlide.nextElementSibling;
//     if(nextSlide) {
//         nextSlide.classList.add('active');
//     } else {
//         nextSlide = document.querySelector('.slider-small-img li');
//         nextSlide.classList.add('active');
//     }

//     slideImg.src = nextSlide.querySelector('img').src;
// }

// // кнопка "предыдущий слайд"
// prev.onclick = function() {
//     let currentSlide = document.querySelector('.slider-small-img li.active');
//     currentSlide.classList.remove('active');
//     let prevSlide = currentSlide.previousElementSibling;
//     if(prevSlide) {
//         prevSlide.classList.add('active');
//     } else {
//         prevSlide = document.querySelector('.slider-small-img li:last-child');
//         prevSlide.classList.add('active');
//     }

//     slideImg.src = prevSlide.querySelector('img').src;
// }

// // убирание класса Active
// function removeActive() {
//     let currentSlide = document.querySelector('.slider-small-img li.active');
//     currentSlide.classList.remove('active');
// }

// // переключение слайдера нажатием на миниатюру
// for (let i = 0; i < smallImages.length; i++) {
//     smallImages[i].addEventListener('click', function() {
//       removeActive();
//       smallImages[i].classList.add('active');
//       slideImg.src = smallImages[i].querySelector('img').src;
//     });
// }


// слайдер на JQuery

slider = $('.slider');

// кнопка "предыдущий слайд"
$('#prev').on('click', function() {
    let elem = $('.slider .slider-small-img li.active').prev();
    $('.slider .slider-small-img li.active').removeClass('active');

    if (!elem.length) {
       elem = $('.slider .slider-small-img li:last-child');
    } 
    elem.addClass('active');

    $('.slider-img img').attr( 'src', elem.find( 'img' ).attr( 'src' ) );
});

// кнопка "следкющий слайд"
$('#next').on('click', function() {
    let elem = $('.slider .slider-small-img li.active').next();
    $('.slider .slider-small-img li.active').removeClass('active');

    if (!elem.length) {
       elem = $('.slider .slider-small-img li:first-child');
    } 
    elem.addClass('active');

    $('.slider-img img').attr( 'src', elem.find( 'img' ).attr( 'src' ) );
});

smallImages = $('.small-img');

// убирание класса Active
$.each(smallImages, function(index, value) {
    smallImages.on('click', function() {
        $('.slider .slider-small-img li.active').removeClass('active');
       
    })
})

// переключение слайдера нажатием на миниатюру
for (let i = 0; i < smallImages.length; i++) {
    $(smallImages[i]).on('click', function() {
        $(smallImages[i]).addClass('active');
        $('.slider-img img').attr( 'src', $(smallImages[i]).find( 'img' ).attr( 'src' ) );
    });
}