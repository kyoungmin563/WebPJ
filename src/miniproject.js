    $('.ham-icon').click(function(){
        $('.ham-menu').toggleClass('ham-top')
        $('.ham-icon').toggleClass('ham-close')
    })

    $(document).ready(function() {
        time_clock();
        set_slide =  setInterval(auto_slide, 3200);
        set_img = setInterval(img_chage, 8000);
    });
// section1 시계 날짜
    function time_clock(){
         // Create two variable with the names of the months and days in an array
        var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]; 
        var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

        // Create a newDate() object
        var newDate = new Date();
        // Extract the current date from Date object
        newDate.setDate(newDate.getDate());
        // Output the day, date, month and year    
        $('.Date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());

        setInterval( function() {
            // Create a newDate() object and extract the seconds of the current time on the visitor's
            var seconds = new Date().getSeconds();
            // Add a leading zero to seconds value
            $(".sec").html(( seconds < 10 ? "0" : "" ) + seconds);
            },1000);

        setInterval( function() {
            // Create a newDate() object and extract the minutes of the current time on the visitor's
            var minutes = new Date().getMinutes();
            // Add a leading zero to the minutes value
            $(".min").html(( minutes < 10 ? "0" : "" ) + minutes);
            },1000);

        setInterval( function() {
            // Create a newDate() object and extract the hours of the current time on the visitor's
            var hours = new Date().getHours();
            // Add a leading zero to the hours value
            $(".hours").html(( hours < 10 ? "0" : "" ) + hours);
            }, 1000);   
    }

//    section2 클릭 오픈
var auto_num = 0;
        $('.section2 .item').click(function(){
            index = $(this).index();
            console.log(index);
            auto_num = index -1;
            auto_slide();
    })
function auto_slide(){
    auto_num++;
    auto_num%=4;
    switch(auto_num){
        case 0:
           $('.section2 .item').eq(1).css({left:'780px'})
        $('.section2 .item').eq(2).css({left:'880px'})
        $('.section2 .item').eq(3).css({left:'980px'})
            break;
        case 1:
            $('.section2 .item').eq(1).css({left:'100px'})
        $('.section2 .item').eq(2).css({left:'880px'})
        $('.section2 .item').eq(3).css({left:'980px'})
            break;
          case 2:
           $('.section2 .item').eq(1).css({left:'100px'})
        $('.section2 .item').eq(2).css({left:'200px'})
        $('.section2 .item').eq(3).css({left:'980px'})
            break;
        case 3:
           $('.section2 .item').eq(1).css({left:'100px'})
        $('.section2 .item').eq(2).css({left:'200px'})
        $('.section2 .item').eq(3).css({left:'300px'})
            break;
        default:
            break;
           }
}
    
//    section3 텍스트 타이핑 효과
    var typingBool = false; 
    var typingIdx=0; 
    var liIndex = 0;
    var liLength = $(".typing-text>ul>li").length;
    var del = -1;
    var repeatInt= null;
    var tyInt = null;
    var typingTxt = $(".typing-text>ul>li").eq(liIndex).text(); 

    typingTxt=typingTxt.split(""); // 한글자씩 자른다. 

    if(typingBool==false){ 
      // 타이핑이 진행되지 않았다면 첫번재 반복동작 
        typingBool=true; 
        tyInt = setInterval(typing,200);
    } 
    function typing(){ 
      if(typingIdx<typingTxt.length){ 
        // 타이핑될 텍스트 길이만큼 반복 
       $(".typing").append(typingTxt[typingIdx]); 
         typingIdx++; 
        if(typingIdx == typingTxt.length){
          //첫번째 단어가 써지면 1분쉰다.
            clearInterval(tyInt);
             setTimeout(function(){
               tyInt = setInterval(typing,200);
             },1000);
           }
       } else{ 
     
     //한문장이끝나면 한문장이끝나면 
       if(-typingTxt.length-1 < del ){
          $(".typing").html(typingTxt.slice(0, del))
          del--;
       }else{
         if(liIndex >= liLength-1){
              liIndex=0;
         }else{
           liIndex++;
         }
         
         //변수초기화 
         typingIdx=0;
         del= -1;
         typingTxt = $(".typing-text>ul>li").eq(liIndex).text(); 
         
         //1분후 다음분장 타이핑 
         clearInterval(tyInt);
         setTimeout(function(){
           tyInt = setInterval(typing,200);
         },1000);
       }
     

    } 
}     
//    section3 사진+텍스트 변경
        var num = 0;
    $('.change-group').click(function(){
        img_chage();
    })
    function img_chage(){
        //        딜레이 settimeout(함수명, 딜레이시간)
             $('.mask').css({animation: 'disapear 2s forwards'})
             $('.section3 .text').css({animation: 'textdisap 1s forwards'})
            setTimeout(function(){
                num++;
                num = num%5;
                console.log(num);
                $('.section3 .img').eq(num).stop().show();
                $('.left-text-box .text').eq(num).stop().show();
                $('.right-text-box .text').eq(num).stop().show();
                $('.section3 .img').not($('.section3 .img').eq(num)).stop().hide();
                $('.left-text-box .text').not($('.left-text-box .text').eq(num)).stop().hide();
                $('.right-text-box .text').not($('.right-text-box .text').eq(num)).stop().hide();
                $('.mask').css({animation: 'apear 2s forwards'})
                $('.section3 .text').css({animation: 'textap 1s forwards'})
            },2000)
    }
    
    var videoi;
//   section4 영상
    $('.section4 .box .item').mouseover(function(){
        //아이디 명칭 v0~v3 => 인덱스 값 0~3으로 선택 .play()
        i = $(this).index();
         document.getElementById('v'+i).currentTime=0;
        document.getElementById('v'+i).play();
        $(this).addClass('active')
    })
    
    $('.section4 .box .item').mouseleave(function(){
        i = $(this).index();
        document.getElementById('v'+i).pause();
        $(this).removeClass('active')
    })