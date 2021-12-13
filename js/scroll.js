(function(){

    const wrapEl = document.querySelector('.wrap');
    const gageEl = document.querySelector('.gage');

    const handleScroll = () => {
        let sct = window.pageYOffset;
        let useScroll = wrapEl.offsetHeight - innerHeight
        // 원래의높이 - 브라우저 값

        // sct / useScroll * 100

        gageEl.style.width = (sct / useScroll) * 100 + '%';
        //Math.floor() : 소수점 버림, 정수 반환
        gageEl.innerHTML = (sct / useScroll) * 100 + '%';
    };

    window.addEventListener("scroll", handleScroll);

    // 0 / 4192 * 100       => 0
    //변경하고싶은 값 / 상위부모값 * 100     => 퍼센트로 변경하는 식


})();