// 이미지 및 리소스 로드 후 코드 실행
window.onload = () => {
    // 모바일 메뉴 버튼 처리
    const $mbBt = document.querySelector('.mb-bt');
    const $mbNav = document.querySelector('.mb-nav');
    const $logo = document.querySelector('.logo');
    const $mbBtSpan = document.querySelectorAll('.mb-bt span');
    const $html = document.querySelector('html');
    const $header = document.querySelector('.header');
    const $gnbA = document.querySelectorAll('.gnb>li>a');

    $mbBt.addEventListener('click', ()=>{
        const scT = window.document.documentElement.scrollTop;
        $mbBt.classList.toggle('active');
        $mbNav.classList.toggle('active');
        $logo.classList.toggle('active-blue');
        $html.classList.toggle('active');
        $mbBtSpan.forEach(ele=>{
            ele.classList.toggle('active');
        });
    });
    window.addEventListener('resize', ()=>{
        const scT = window.document.documentElement.scrollTop;
        const wW = window.innerWidth;
        if(wW > 1080 && scT < 100){            
            $mbBt.classList.toggle('active', false);
            $mbNav.classList.toggle('active', false);
            $logo.classList.toggle('active-blue', false);
            $html.classList.toggle('active', false);
            $mbBtSpan.forEach(ele=>{
                ele.classList.remove('active');
            });
        }
    });
    window.addEventListener('scroll', ()=>{
        const scT = window.document.documentElement.scrollTop;

        if(scT > 99){
            $header.classList.add('active');
            $logo.classList.add('active');
            $gnbA.forEach(ele=>{
                ele.classList.add('active');
            });
            $mbBtSpan.forEach(ele=>{
                ele.classList.add('active');
            });
        } else {
            $header.classList.remove('active');
            $logo.classList.remove('active');
            $gnbA.forEach(ele=>{
                ele.classList.remove('active');
            });
            $mbBtSpan.forEach(ele=>{
                ele.classList.remove('active');
            });
        }
    });
    const scT = window.document.documentElement.scrollTop;

        if(scT > 99){
            $header.classList.add('active');
            $logo.classList.add('active');
            $gnbA.forEach(ele=>{
                ele.classList.add('active');
            });
            $mbBtSpan.forEach(ele=>{
                ele.classList.add('active');
            });
        } else {
            $header.classList.remove('active');
            $logo.classList.remove('active');
            $gnbA.forEach(ele=>{
                ele.classList.remove('active');
            });
            $mbBtSpan.forEach(ele=>{
                ele.classList.remove('active');
            });
        }
};