(function(){
    
    const headerEl = document.querySelector('header');
    const conEl = document.querySelector('.con');

    const handleScroll = () => {
        // headerEl.innerHTML = window.pageYOffset;  스크롤 높이값을 알아옴
        // headerEl.innerHTML = conEl.offsetTop;     위치값, 크기값을 알아올 수 있음
        // headerEl.innerHTML = conEl.offsetLeft;     
        // headerEl.innerHTML = conEl.offsetHeight;   
        // headerEl.innerHTML = conEl.offsetWidth;

        // headerEl.innerHTML = conEl.getBoundingClientRect().top;
        // 엘리먼트의 top,left, width, height 값을 스크롤 변경때 마다 변하는 값을 가져올 수 있음

        // headerEl.innerHTML = window.innerHeight; 브라우저의 높이값을 알아옴

        // offsetTop , getBoundingClientRect



        // if(conEl.getBoundingClientRect().top <= 0){
        //     conEl.style.backgroundColor = 'teal';
        // }else{
        //     conEl.style.backgroundColor = 'royalblue';
        // }



        let sct = window.pageXOffset;
        let conTop = conEl.offsetTop
        const boxEl = document.querySelector('.box');

        // console.log(sct >= conTop);

        // if(sct >= conTop) {
        //     conEl.style.backgroundColor = 'teal';
        // }

        // if(sct >= conTop) {
        //     boxEl.classList.add('active');
        // }

        if(conEl.getBoundingClientRect().top <= 0){
            boxEl.classList.add('active');
        }else{
            boxEl.classList.remove('active');
        }


    };

    window.addEventListener('scroll', handleScroll);

})();