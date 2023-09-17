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
    $(".datepicker_start input").datepicker({
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
        buttonImage: "../images/ico/ico_calendar.svg",
        buttonImageOnly: true,
        buttonText: "날짜선택"
    });
    $(".datepicker_end input").datepicker({
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
        buttonImage: "../images/ico/ico_calendar.svg",
        buttonImageOnly: true,
        buttonText: "날짜선택"
    });
    $('.datepicker_start input').datepicker("option", "onClose", function ( selectedDate ) {
        $(".datepicker_end input").datepicker( "option", "minDate", selectedDate );
    });
    $('.datepicker_end input').datepicker("option", "onClose", function ( selectedDate ) {
        $(".datepicker_start input").datepicker( "option", "maxDate", selectedDate );
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
    if(service_btn){
        service_btn.addEventListener('click', function(e) {
            e.preventDefault();
            this.parentElement.parentElement.classList.toggle('on');
        });
    }

    // 팝업
    const body = document.querySelector('body');
    let target = document.querySelectorAll('.pop_open');
    let btnPopClose = document.querySelectorAll('.pop_close');
    let targetID;
    const newDim = document.createElement('div'); // dim
    newDim.className = 'dim';

    // 팝업 열기
    for(let i = 0; i < target.length; i++){
        target[i].addEventListener('click', function(){
            body.appendChild(newDim);
            targetID = this.getAttribute('data-target');
            document.querySelector(targetID).style.display = 'flex';
            body.style.overflow = 'hidden';
        });
    }
    
    // 팝업 닫기
    for(let j = 0; j < btnPopClose.length; j++){
        btnPopClose[j].addEventListener('click', function(){
            newDim.remove();
            this.parentNode.parentNode.style.display = 'none';
            body.style.overflow = '';
        });
    }

    // 파일업로드
    const file_inp_g = document.querySelectorAll('.file_inp');
    for(let i = 0; i < file_inp_g.length; i++){
        const file_inp = file_inp_g[i];
        file_inp.addEventListener('change', function(){
            let fileList;
            for(let j = 0; j < file_inp.files.length; j++){
                fileList = file_inp.files[j].name;
            }
            const file_txt = file_inp.nextSibling.nextSibling.nextSibling.nextSibling.querySelector('.file_value');
            console.log(file_txt);
            file_txt.value = fileList;
        });
    }

    // 검색폼 상세검색 toggle
    const search_btn = document.querySelector('.detail_btn');
    if(search_btn){
        search_btn.addEventListener('click', function(e) {
            e.preventDefault();
            this.parentElement.classList.toggle('on');
        });
    }

    // 민원 길라잡이 toggle
    const qna_btn = document.querySelectorAll('.qna_list_box .list dt a');
    if(qna_btn){
        for(let i = 0; i < qna_btn.length; i++){
            qna_btn[i].addEventListener('click', function(e) {
                e.preventDefault();
                this.parentElement.parentElement.classList.toggle('on');
            });
        }
    }

}
