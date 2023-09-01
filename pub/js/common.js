window.onload = function(){

    // datepicker
    $('.datepicker_day input').datepicker({
        dateFormat: 'yy-mm-dd',
        prevText: '이전 달',
        nextText: '다음 달',
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        showMonthAfterYear: true,
        yearSuffix: '년',
        showOn: "both",
        changeMonth: true,
        changeYear: true,
        yearRange: 'c-100:c+15',
        // maxDate: "d",
        buttonImage: "../images/ico/ico_calendar.svg",
        buttonImageOnly: true,
        buttonText: "날짜선택"
    });

    // 탭
    $('.tab_group > .tab_btn > ul > li > a').on('click', function(e){
        e.preventDefault();
        const on_tab = $(this).attr("rel")

        // 탭 컨텐츠 숨기기
        $(this).parent().siblings().removeClass('on');
        $(this).parent().parent().parent().siblings().children("div").removeClass('on');

        // 클릭이벤트
        $(this).parent().addClass('on');
        $("." + on_tab).addClass('on');
    });

    // 모바일 header
    const m_menu_btn = document.querySelectorAll('.allmenu_btn'); // 모바일 메뉴 버튼
    const m_menu_cont = document.querySelectorAll('.allmenu_cont'); // 모바일 메뉴
    const m_menu_close = document.querySelectorAll('.allmenu_cont .tit a'); // 닫기 버튼
    const depth1 = document.querySelectorAll('.allmenu_cont > ul > li > a'); // 1depth
    const depth2 = document.querySelectorAll('.allmenu_cont > ul > li > ul > li > a'); // 2depth
    const depth1_cont = document.querySelectorAll('.allmenu_cont > ul > li > ul'); // 1depth 내용
    const depth2_cont = document.querySelectorAll('.allmenu_cont > ul ul ul'); // 2depth 내용
    
    // 열기
    m_menu_btn.forEach((btn, index) => {
        btn.addEventListener("click", function(e) {
            e.preventDefault();
            m_menu_cont[index].classList.add("on");
        });
    });
    // 닫기
    m_menu_close.forEach((closeBtn, index) => {
        closeBtn.addEventListener("click", function(e) {
            e.preventDefault();
            m_menu_cont[index].classList.remove("on");
        });
    });

    depth1.forEach((item, index) => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const parentElement = depth1_cont[index].parentElement;

            if (parentElement.classList.contains('on')) {
                parentElement.classList.remove('on');
            } else {

                // 이전 class지우기
                let this_parent = Array.from(depth1_cont[index].parentElement.parentElement.children);
                for(let i = 0; i < this_parent.length; i++){
                    this_parent[i].classList.remove('on');
                }

                parentElement.classList.add('on');
            }
        });
    });
    
    depth2.forEach((item, index) => {
        item.addEventListener('click', function(e) {
            e.preventDefault();

            const parentElement = item.parentElement;
            if (parentElement.classList.contains('on')) {
                parentElement.classList.remove('on');
            } else {
                // 이전 class 지우기
                let this_parent = Array.from(item.parentElement.parentElement.children);
                for (let i = 0; i < this_parent.length; i++) {
                    this_parent[i].classList.remove('on');
                }
                parentElement.classList.add('on');
            }
        });
    });

    // 주요서비스
    const service_btn = document.querySelector('.main_service dt a');

    service_btn.addEventListener('click', function(e) {
        e.preventDefault();
        this.parentElement.parentElement.classList.toggle('on');
    });


}
