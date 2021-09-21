"use strict";

(function () {
    const stageElem = document.querySelector('.stage');
    const houseElem = document.querySelector('.house');
    const barElem = document.querySelector('.progress-bar');
    const selectCharacterElem = document.querySelector('.select-character');
    

    // js 10 scroll, offsetHeight,  innerHeight, pageYoffset

  /*   🍄
    0~1값 구하는 공식
    스클롤한/ 스크롤영역 */
    
    let maxScroll = document.body.offsetHeight - window.innerHeight;
    // console.log(maxScroll)

    //scroll
    window.addEventListener('scroll',()=>{
        // console.log(pageYOffset);
        const scrollPer= pageYOffset/ maxScroll;
        console.log(scrollPer)

        const zMove = scrollPer * 980-490;
        console.log(zMove)

        houseElem.style.transform = `translateZ(${zMove}vw)`;

        // console.log(window.scrollY)

        // 🍀progress bar
        barElem.style.width=`${scrollPer*100}%`;
    });


// 40 mousemove and wall rotate

let mouseP= {x:0, y:0};

window.addEventListener('mousemove',(e)=>{

  console.log(mouseP.x)
  // console.log(mouseP.y)

  mouseP.x =(e.clientX/ window.innerWidth *5)-2.5;
  mouseP.y = e.clientY/window.innerWidth *5
  console.log(mouseP.x)

  stageElem.style.transform = `rotateX(${mouseP.y}deg) rotateY(${mouseP.x}deg)`;
});







})();