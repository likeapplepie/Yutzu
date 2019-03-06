$(document).ready(function(){
  
  $("#StringTextBox").keypress(function ChangeString(event){
  if (event.keyCode == 13) {
    $(".before_username").hide();
    $(".username").show();
    $("#NewStringBox").show();
    var NewStringValue=document.getElementById("StringTextBox").value;
    document.getElementById("NewStringBox").innerHTML=NewStringValue;
    $("input").val("");  
  }
})



$(".btn_home_go").click(function ChangeString(){
  $(".before_username").hide();
  $(".username").show();
  $("#NewStringBox").show();
    var NewStringValue=document.getElementById("StringTextBox").value;
    document.getElementById("NewStringBox").innerHTML=NewStringValue;
  $("input").val("");
})


console.clear()
var onClick = false;
    // $(".guideWords").click()
console.clear()
var onClick = false;
$(".burger").click(function(){
  if (onClick == false){
    $("#guide").show();
    $(".line1").css('borderRadius', '9px').css('width', '54px').css('transformOrigin', 'left top').css('height',' 10.5px').css('transform', 'rotate(43deg)');
    $(".line2").css('width', '0px');
    $(".line3").css('borderRadius', '9px').css('width', '54px').css('transformOrigin', 'left bottom').css('height',' 11px').css('transform', 'rotate(-43deg)');
    $('.name_pic').animate({
      top:'-40px',
      left:'-2%',
      },500);
    $('.me_pic').animate({
      bottom:'-5px',
      right:'-20px'},500);
    $('.guideWords').animate({
      top:'27%',
      left:'20%'},500);
    onClick = true;
    console.log(onClick);
    return onClick;
  }
if (onClick == true){
    $("#guide").hide();
    crossToBurger();
    guidePicBackToCssNornmalPlace();
    onClick = false;
    console.log(onClick);
    return onClick;
  }
})

$(".guidehomebox").click(function(){
  $("#guide").hide();
  $('html,body').animate({scrollTop:$('#home').offset().top}, 500); 
  crossToBurger();
  guidePicBackToCssNornmalPlace();
  onClick = false;
  console.log(onClick);
  return onClick;
})

$(".guideaboutbox").click(function(){
  $("#guide").hide();
  $('html,body').animate({scrollTop:$('#aboutme').offset().top}, 500); 
  crossToBurger();
  guidePicBackToCssNornmalPlace();
  console.log(onClick);
  return onClick;
})


$('.guideportbox').click(function(){ 
  $("#guide").hide();
  $('html,body').animate({scrollTop:$('#portfolio').offset().top}, 500); 
  crossToBurger();
  guidePicBackToCssNornmalPlace();
  onClick = false;
  console.log(onClick);
  return onClick;
  }); 

$('.guidecontbox').click(function(){ 
  $("#guide").hide();
  $('html,body').animate({scrollTop:$('#contact').offset().top}, 500); 
  crossToBurger();
  guidePicBackToCssNornmalPlace();
  onClick = false;
  console.log(onClick);
  return onClick;
})

function crossToBurger(){
  $(".line1").css('borderRadius', '0px').css('width', '45px').css('transformOrigin', 'left top').css('height',' 9px').css('transform', 'rotate(0deg)');
    $(".line2").css('width', '45px');
    $(".line3").css('borderRadius', '0px').css('width', '45px').css('transformOrigin', 'left bottom').css('height',' 9px').css('transform', 'rotate(0deg)');
}


function guidePicBackToCssNornmalPlace(){
  $('.name_pic').animate({
      top:'-0.1%',
      left:'1%'},500);
    $('.me_pic').animate({
      bottom:'-5%',
      right:'2%'},500);
    $('.guideWords').animate({
      left:'-20%'},500);
}

$(document).ready(function(){
    $(function(){ 
      $('.button_at_home_aboutme').click(function(){ 
        $('html,body').animate({scrollTop:$('#aboutme').offset().top}, 500); 
        });  
      $('.button_at_home_portfolio').click(function(){ 
        $('html,body').animate({scrollTop:$('#portfolio').offset().top}, 500); 
        }); 
      $('.button_at_home_contact').click(function(){ 
        $('html,body').animate({scrollTop:$('#contact').offset().top}, 500); 
        }); 
      $('.fbname').click(function(){ 
        $('html,body').animate({scrollTop:$('#contact').offset().top}, 500); 
        }); 
    }); 
});

var x=0;
$(".btn_blue.left").click(function(){
  if(x<40){
    x+=20; 
    $(".portfolioRow").css('transform','translateX('+x+'%)')
  } else {
    $(".portfolioRow").css('transform','translateX(40%)')
  }
})
$(".btn_blue.right").click(function(){
  
  if(x>-40){
    x-=20; 
    $(".portfolioRow").css('transform','translateX('+x+'%)')
  } else {
    $(".portfolioRow").css('transform','translateX(-40%)')
  }
})

// $(".portfolioRow").on("swipeleft",function(){
//       if(x<30){
//       x+=30; 
//       $(".portfolioRow").css('transform','translateX('+x+'%)')
//     } else {
//       $(".portfolioRow").css('transform','translateX(30%)')
//     }
// });

// $(".portfolioRow").on("swiperight",function(){
//     if(x>-30){
//       x-=30; 
//       $(".portfolioRow").css('transform','translateX('+x+'%)')
//     } else {
//       $(".portfolioRow").css('transform','translateX(-30%)')
//     }
// });



var timer
$(window).scroll(function(){
  var window_height = $(window).height();
  var window_scrollTop = $(window).scrollTop();
  var document_height = $(document).height();
  
  window.clearTimeout(timer)
  
  if(window_scrollTop > document_height*0.05 && window_scrollTop < document_height*0.35){
    timer = window.setTimeout(function(){
    $(".floatdecoration.aboutme").css("transform","translateY(-100%)").css("opacity","1")
    $(".floatword.aboutme").css("transform","translateY(-450%) rotate(-90deg)").css("opacity","1")
    $(".circle3").css("transform","translateY(-30%)").css("opacity","1")
    $(".circle4").css("transform","translateY(-50%)").css("opacity","1")
    $(".circle5").css("transform","translateY(-40%)").css("opacity","1")
    $(".circle6").css("transform","translateY(-36%)").css("opacity","1")
    $(".circle7").css("transform","translateY(-55%)").css("opacity","1")
    },300)
  }
  if(window_scrollTop > document_height*0.35 && window_scrollTop < document_height*0.60){
   timer = window.setTimeout(function(){
     $(".floatdecoration.portfolio").css("transform","translateY(-130%)").css("opacity","1")
     $(".floatword.portfolio").css("transform","translateY(-450%) rotate(-90deg)").css("opacity","1")
   },100);
    
  }
  if(window_scrollTop > document_height*0.60 && window_scrollTop < document_height*0.85){
   timer = window.setTimeout(function(){
     $(".circle1").css("transform","translateY(-10%)").css("opacity","1")
     $(".circle2").css("transform","translateY(-30%)").css("opacity","1")
     $(".floatword.contact").css("transform","translateY(900%) rotate(-90deg)").css("opacity","1")
   },100);
  }
})

$('#wave1').wavify({
  height: 375,
  bones: 3,
  amplitude: 40,
  color: '#E4DFD4',
  speed: .4
})

$('#wave2').wavify({
  height: 20,
  bones: 3,
  amplitude: 40,
  color: '#9ebec6',
  speed: .4
})

});