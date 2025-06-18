    //    section1~5(아래) wrap1~6(좌우)
    var page = 0;
    var wrap = 0;
    var num = 0;
    var win_w = $(window).width();
    var win_h = $(window).height();

//    휠 아래
    function page_ud() {
        active_page = $('.section').eq(page);
        active_page.stop().animate({top: 0}, 500);
        active_page.prevAll().stop().animate({top: -win_h}, 500);
        active_page.nextAll().stop().animate({top: win_h}, 500);
        if (page == 4) {
            $('.section5 .front').stop().delay(1000).fadeIn(3000);
            $('.section5 .front .text').stop().fadeIn();
            $('header .wrap .b').stop().hide();
            $('header .wrap .w').stop().show();
        } else if (page == 0) {
            $('header .wrap .b').stop().hide();
            $('header .wrap .w').stop().show();
            $('.section-group .section-wrap').css({left:'100vw'});
        } else {
            $('.section5 .front').css({display: 'none'});
            $('.section5 .front .text').css({display: 'none'});
            $('header .wrap .b').stop().show();
            $('header .wrap .w').stop().hide();
        }
    }
//    휠 양옆
    function page_lr() {
        active_wrap = $('.section-group .section-wrap').eq(wrap);
        $('.section5 .front').css({display: 'none'});
        $('.section5 .front .text').css({display: 'none'});
        if (wrap == 0) {
            active_wrap.stop().animate({left: 0}, 1200);
            active_wrap.prevAll().stop().animate({left: -win_w}, 500);
            active_wrap.nextAll().stop().animate({left: win_w}, 500);
        } else {
            active_wrap.stop().animate({left: 0}, 800);
            active_wrap.prevAll().stop().animate({left: -win_w}, 500);
            active_wrap.nextAll().stop().animate({left: win_w}, 500);
        }
    }
//    휠
    $('*').on('mousewheel', function (event) {
        event.preventDefault();
    })
    $('.section').on('mousewheel', function (event) {
        delta = event.originalEvent.wheelDelta;
        has_ani = $('html, .section, .section-wrap').is(':animated')
        if (delta < 0 && !has_ani && page < 4) {
            if (page == 0) {
                page++;
                page_ud();
                setTimeout(page_lr, 800);
            } else if (page == 1 && wrap < 3) {
                wrap++;
                page_lr();
                page_ud();
            } else {
                page++;
                page_lr();
                page_ud();
            }
        } else if (delta > 0 && !has_ani && page > 0) {
            if (page == 1 && wrap > 0) {
                wrap--;
                page_lr();
                page_ud();
            }else {
                page--;
                page_ud();
            }
        }
        num = page + wrap;
        btn();
    })
//   일의 자리 숫자 앞에 0 붙이기
    var leadingZeros = function (date, num) {
        var zero = '';
        date = date.toString();

        if (date.length < num) {
            for (i = 0; i < num - date.length; i++)
                zero += '0';
        }
        return zero + date;
    }
//    버튼 색상 및 숫자 변경
    function btn() {
        b_num = $('.btn-group span').eq(num);
        if (num == 0 || num == 1 || num == 2 || num == 7) {
            $('.num-box .text').css({color: 'white'})
            $('.btn-group span').not(b_num).css({background: 'transparent'});
            $('.btn-group span').css({border: '1px solid white'});
            b_num.css({background: 'white'});
        } else {
            $('.num-box .text').css({color: 'black'})
            $('.btn-group span').not(b_num).css({background: 'transparent'});
            $('.btn-group span').css({border: '1px solid black'});
            b_num.css({background: 'black'});
        }
        num_t = num + 1;
        num_text = leadingZeros(num_t, 2);
        $('.num-box .text p').text(num_text);
    }
//    버튼 클릭 이동
    $('.btn-group span').click(function () {
        page=$(this).data("page")
        wrap=$(this).data("wrap")
        num = $(this).index();
        btn();
        page_lr();
        page_ud();
    })
       
//        새로고침 메인으로 이동
    $(document).ready(function () {
        $('.section').eq(page).stop().animate({top: 0}, 500);
        $('.section1 .title').stop().animate({top: '60%'}, 2000);
        size();
    })

//    로고 클릭
    $('.logo').click(function () {
        num = 0;
        wrap = 0;
        page = 0;
        page_lr();
        page_ud();
        btn();
    })    
    
//    메뉴 클릭 시 페이지 이동
    $('.menu img').click(function(){
        wrap = $(this).index();
        page = $(this).parent().parent().index();
        if(page > 1){
           wrap = 3;
            page_lr();
            page_ud();
           }
        else if(page == 0){
           page_ud();     
                }
        else{
            page_lr();
            page_ud();
                }
        console.log('wrap'+wrap);
        console.log('pa'+page);
        console.log('num'+num);
        num = wrap + page;
        btn();
        $('header .wrap .close').stop().hide();
        $('.num-box').stop().show();
        $('.menu').stop().hide();
    })
//    메뉴 아이콘 클릭시
    $('.menu-icon').click(function () {
        $('header .wrap .w').stop().hide();
        $('header .wrap .b').stop().hide();
        $('header .wrap .m').stop().show();
        $('.num-box').stop().hide();
        $('.menu').stop().show();
    })
//    메뉴 닫기 버튼 클릭시
    $('.close').click(function () {
        $('header .wrap .m').stop().hide();
        $('.num-box').stop().show();
        $('.menu').stop().hide();
        page_lr();
        page_ud();
    })


//************************section3 갤러리페이지*************************
var list_img=$('.section3 .col1 li');
list_len=list_img.length;
img_name=[]
list_col    =5;
list_row    =4; //20개가 들어가도록
list_gap    =20;
section3_list();
function section3_list() {
    win_width = $(window).width();
    win_height = $(window).height()
    list_img.each(function (list_i) {
        img_name = list_i + 1;
        img_width = (win_width - 200 - (list_col - 1) * list_gap) / list_col;
        img_height = (win_height - 160 - (list_row - 1) * list_gap) / list_row;
        img_left = img_width * (list_i % list_col) + list_gap * (list_i % list_col);
        img_top = img_height * Math.floor(list_i / list_col) + list_gap * Math.floor(list_i / list_col);
        $(this).css({
            backgroundImage: "url(image/s3_other/" + img_name + ".jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center center"
        });
        $(this).stop().delay(Math.floor(list_i / list_col) * 80 + (list_i % list_col) * 50).animate({
            width: img_width,
            height: img_height,
            left: img_left,
            top: img_top,
            opacity: 1
        }, 300)
    })
}
//************************section3 갤러리페이지*************************끝

//************************section5 랜덤************************* 시작
//var Random=[];
//var list5=$(".section5 .img li");
//var list_item=0;
//var not_index=0;
//list5_total=list5.length;
////console.log("list5_total:"+list5_total);
//
//for(list_item=0;list_item<list5_total;list_item++){
//    Random[list_item]=Math.floor(Math.random()*list5_total);
////    console.log(Random);
//    for(not_index=0;not_index<list_item;not_index++){
//        if(Random[list_item]==Random[not_index]){
//            list_item--;
//            break;
//        }
//    }
//}
//
//for(list_item=0;list_item<list5_total;list_item++){
//    console.log(Random[list_item]);
//    list5.eq(Random[list_item]).stop().delay(3000).animate({opacity:1});
//}
//console.log(Random);
//list5.each(function(section_i){
//    $(this).stop().delay(section_i*1000).animate({opacity:1})
//})
//list5.each(function(section_i){
//    $(this).stop().delay(section_i*50).animate({opacity:1})
//})
//****************************************************************



//    section2 액자 클릭 시
    $('.section2 .section-wrap3 .img-wrap').click(function () {
        $('.section2 .section-wrap3 .click').stop().hide();
        $('.section2 .section-wrap3 .pic').stop().animate({top: '140px'}, 1000)
        $('.section2 .section-wrap3 .down').stop().animate({top: '500px'}, 1000)
    })

//    section2 상점 셔터 클릭 시
    $('.section2 .section-wrap4 .store').click(function () {
        $('.section2 .section-wrap4 .store1').stop().fadeOut();
        $('.section2 .section-wrap4 .store2').stop().fadeIn();
    })

//    뱅크시 인터뷰 스몰 타이틀 클릭 시
    $('.section4 .bor1 .s-title li').click(function () {
        snum = $(this).index();
        $('.section4 .bor1 .s-title li').not(this).css({color: '#777777', background: 'transparent'})
        $(this).css({color: 'white', background: '#777777'})
        $('.section4 .bor1 .p li').eq(snum).stop().fadeIn();
        $('.section4 .bor1 .p li').not($('.section4 .bor1 .p li').eq(snum)).stop().fadeOut();
    })
    
//    리사이징 화면 넓이가 1800보다 작으면 경고창
    $(window).resize(function(){
        win_w = $(window).width();
        size();
    })
    function size() {
       if(win_w < 1400){
            $('.com').stop().show();
        }
        else{
           $('.com').stop().hide(); 
        } 
    }
//    경고창 클로즈 버튼 클릭
    $('.com .top .com-close').click(function(){
        $('.com').stop().hide();
    })