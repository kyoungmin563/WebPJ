    $('header').mousemove(function(event){
        w_w = $(window).width();
        m_x = event.clientX;
        pos_x =m_x-w_w*0.5
//        console.log(pos_x);
        $('.main .m1').css({transform:'translateX('+(pos_x*0.04)+'px)',transition:'0s'})
        $('.main .t1').css({transform:'translateX('+(pos_x*-0.05)+'px)',transition:'0s'})
        $('.main .t2').css({transform:'translateX('+(pos_x*0.08)+'px)',transition:'0s'})
    });
    $('header').mouseleave(function(){
        $('.main .m1').css({transform:'translateX(0)',transition:'transform 0.3s'})
        $('.main .t').css({transform:'translateX(0)',transition:'transform 0.3s'})
    });
    var main_num=0;
    var sec_num=0;
    $(document).ready(function(){
//        sliding = setInterval(mainslide,4000)
//        setInterval(secslide,3000)      
    })

    function mainslide(){
        if(main_num == 0){
            $('.main1').stop().fadeIn();
            $('.main2').stop().fadeOut();
            main_num++;
           }
        else if(main_num == 1){
           $('.main2').stop().fadeIn();
            $('.main1').stop().fadeOut();
            main_num++;
           }
        main_num =main_num%2;
//        console.log(main_num);
    }

    function secslide(){
         if(sec_num == 0){
            $('.section2 .img1').stop().fadeIn();
            $('.section2 .img2').stop().fadeOut();
            sec_num++;
           }
        else if(sec_num == 1){
           $('.section2 .img2').stop().fadeIn();
            $('.section2 .img1').stop().fadeOut();
            sec_num++;
           }
        sec_num =sec_num%2;
//        console.log(sec_num); 
    }